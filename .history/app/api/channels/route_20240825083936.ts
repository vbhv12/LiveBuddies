import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        const profile = currentProfile();

        if(!profile){
            return new NextResponse("Unauthorized", {status: 403});
        }

        const {name, type} = req.json();

        const {searchParams} = new URL(req.url);

        const serverId = searchParams.get("serverId");

        if(!serverId){
            return new NextResponse("Server Id not found", {status: 400});
        }

        if(name === "general"){
            return new NextResponse("Name cannot be 'general'", {status : 400});
        }

        const server = db.server.update({
            where:{
                id: serverId,
                members:{
                    some:{
                        profileId: profile.id,
                        role:{
                            in:[MemberRole.ADMIN, MemberRole.GUEST]
                        }
                    }
                }
            }
        })


    } catch (error) {
        console.log("Channel_Error", error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}