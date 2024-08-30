import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params } : {params: {serverId: string}}){
    try{
        const profile = await currentProfile
    }
    catch(e){
        console.log("[SERVERID]" + e);
        return new NextResponse("Internal Error", {status: 500});
    }
}