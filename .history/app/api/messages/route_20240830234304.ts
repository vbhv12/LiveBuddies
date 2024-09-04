import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
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


        await db.
    } catch (error) {
        console.log("[MESSAGES_GET]", error);
        return new NextResponse("Internal Error", {status : 500});
    }
}