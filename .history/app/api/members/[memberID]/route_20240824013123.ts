import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, {params}: {params: {memeberID: string}}){
    try {
        console.log("Request_start", req, "Resquest_finish");
        const profile = await currentProfile();
        const {searchParams} = new URL(req.url);
        const {role} = await req.json();

        const serverId = searchParams.get("serverId");
        if(!profile){
            return new NextResponse("Unauthorized", {status: 403});
        }

        if(!serverId){
            return new NextResponse("Server ID missing", {status: 400});
        }

        if(!params.memeberID){
            return new NextResponse("Member ID missing", {status: 400});
        }

        const server = await db.server.update({
            where:{
                id: serverId,
                profileId: profile.id
            }, 
            data:{
                members:{
                    update:{
                        
                    }
                }
            }
        })

    } catch (error) {
        console.log("[MEMBERS_ID_PATCH]", error);
        return new NextResponse("Internal Error", {status: 500});
    }
}