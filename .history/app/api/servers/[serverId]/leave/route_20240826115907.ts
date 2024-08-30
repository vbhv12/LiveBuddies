import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req:Request, {params} : {params: {serverId: string}}){
    try {
        const profile = await currentProfile();
        if(!profile){
            return new NextResponse("Unauthorized", {status: 403});
        }

        const sever = db.server.update({
            where:{
                id: params.serverId
            }
        })



    } catch (error) {
        console.log("PATCH_SERVER_ID_LEAVE", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}