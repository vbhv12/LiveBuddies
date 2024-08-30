import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function PATCH(req:Request, {params} : {params: {serverId: string}}){
    try {
        const profile = await currentProfile();
    } catch (error) {
        console.log("PATCH_SERVERID_LEAVE", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}