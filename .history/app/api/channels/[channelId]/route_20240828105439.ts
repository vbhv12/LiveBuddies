import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    {params}: {params: {channelId: string}}) {
    try{
        const 
    }
    catch(error){
        console.log("[CHANNELS_DELETE]", error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}