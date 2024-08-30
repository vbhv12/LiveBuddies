import { NextResponse } from "next/server";

export async function PATCH(req: Request, {params}: {params: {memeberID: string}}){
    try {
        
    } catch (error) {
        console.log("[MEMBERS_ID_PATCH]", error);
        return new NextResponse("Internal Error", {status: 500});
    }
}