import { v4 as uuidv4 } from "uuid"
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";
import { currentProfile } from "@/lib/current-profile";

export async function POST(req: Request) {
    try{
        // console.log(await req.json());
        const {name, imageURL} = await req.json();
    
        const user = await currentProfile();

        if(!user){
            return new NextResponse("Unauthorized user", {status: 401});
        }
        console.log(user.id);
        const server = await db.server.create({
            data:{
                profileId: user.id,
                name, 
                imageURl: imageURL,
                inviteCode: uuidv4(),
                channel:{
                    create:[
                        {name: 'general', profileId: user.id}
                    ]
                },
                members:{
                    create:[
                        {profileId: user.id, role: MemberRole.ADMIN}
                    ]
                }
            }
        })
        return NextResponse.json(server);
    }
    catch(e){
        console.log("[SERVERS_POST]", e);
        return new NextResponse("Internal Error", {status: 500})
    }
}