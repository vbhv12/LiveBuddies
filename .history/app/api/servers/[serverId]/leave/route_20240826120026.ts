import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req:Request, {params} : {params: {serverId: string}}){
    try {
        const profile = await currentProfile();
        if(!profile){
            return new NextResponse("Unauthorized", {status: 403});
        }

        if(!params.serverId){
            return new NextResponse("Server Id is missing", {status: 400});
        }

        const sever = db.server.update({
            where:{
                id: params.serverId,
                profileId:{
                    not: profile.id,
            }
        })



    } catch (error) {
        console.log("PATCH_SERVER_ID_LEAVE", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}