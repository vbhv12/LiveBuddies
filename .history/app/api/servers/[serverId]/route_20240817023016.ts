import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params } : {params: {serverId: string}}){
    try{
        const profile = await currentProfile();

        if(!profile){
            return new NextResponse("Unauthorized", {status: 401});
        }

        if(!params.serverId){
            return new NextResponse("Server ID missing", {status: 400});
        }

        const server = await db.server.update({
            
        })

    }
    catch(e){
        console.log("[SERVERID]" + e);
        return new NextResponse("Internal Error", {status: 500});
    }
}