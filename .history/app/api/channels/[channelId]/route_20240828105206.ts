import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    {params}: {params: {channelId: string}}) {
    try{

    }
    catch(error){
        console.log("[CHANNELS_DELETE]", error);
        return new NextResponse()
    }
}