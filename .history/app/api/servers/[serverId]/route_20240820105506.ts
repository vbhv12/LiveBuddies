import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: Request, {params} : {params: {serverId : string}}){
    try{
        const profile = await currentProfile();

        if(!profile){
            return new NextResponse("Unauthorized", {status: 401});
        }

        const server = await db.server.update({
            where:{
                id: server
            }
        })
    }
    catch(e){
        console.log(e);
        return new NextResponse("Internal Error", {status: 500});
    }
}