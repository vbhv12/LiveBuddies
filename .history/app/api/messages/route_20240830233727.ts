import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function GET(req: Request){
    try {
        const profile = await currentProfile();
        await db.
    } catch (error) {
        console.log("[MESSAGES_GET]", error);
        return new NextResponse("Internal Error", {status : 500});
    }
}