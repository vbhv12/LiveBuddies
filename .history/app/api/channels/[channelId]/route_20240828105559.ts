import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    {params}: {params: {channelId: string}}) {
    try{
        const profile = await currentProfile();
        const {searchParams} = new URL(req.url);

        const serverId = searchParams
        if(!profile){
            return new NextResponse("Unauthorized", {status: 403});
        }


    }
    catch(error){
        console.log("[CHANNELS_DELETE]", error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}