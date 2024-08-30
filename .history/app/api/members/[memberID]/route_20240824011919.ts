import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, {params}: {params: {memeberID: string}}){
    try {
        const profile = await currentProfile();
        const {searchParams} = 
        const {role} = await req.json();

        if(!profile){
            return new NextResponse("Unauthorized", {status: 403});
        }


    } catch (error) {
        console.log("[MEMBERS_ID_PATCH]", error);
        return new NextResponse("Internal Error", {status: 500});
    }
}