import { NextResponse } from "next/server";

export async function GET(req: Request){
    try {
        
    } catch (error) {
        console.log("[MESSAGES_GET]", error);
        return new NextResponse("Internal Error", {status : 500});
    }
}