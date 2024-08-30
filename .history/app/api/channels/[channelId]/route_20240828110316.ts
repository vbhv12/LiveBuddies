import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    {params}: {params: {channelId: string}}) {
    try{
        const profile = await currentProfile();
        const {searchParams} = new URL(req.url);

        const serverId = searchParams.get("serverId");
        if(!profile){
            return new NextResponse("Unauthorized", {status: 403});
        }

        if(!serverId){
            return new NextResponse("Server ID missing", {status: 400});
        }

        if(!params.channelId){
            return new NextResponse("Channel ID missing", {status: 400});
        }

        const server = await db.server.update({
            
        })


    }
    catch(error){
        console.log("[CHANNELS_DELETE]", error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}