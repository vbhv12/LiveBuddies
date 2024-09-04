import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { Message } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request){
    try {
        const profile = await currentProfile();

        const {searchParams} = new URL(req.url);

        const cursor = searchParams.get("cursor");
        const channelId = searchParams.get("channelId");

        if(!profile){
            return new NextResponse("Unauthorized", {status: 401});
        }

        if(!channelId){
            return new NextResponse("Channel ID missing", {status: 400});
        }


       let message: Message[] = [];

       if(cursor){
            messages = await db.message.findMany({
                
            })
       }
    } catch (error) {
        console.log("[MESSAGES_GET]", error);
        return new NextResponse("Internal Error", {status : 500});
    }
}