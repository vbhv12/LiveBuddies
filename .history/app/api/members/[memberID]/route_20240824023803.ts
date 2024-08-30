import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import axios from "axios";
import { NextResponse } from "next/server";

interface memberIDProps{
    params:{
        memberID: string
    }
}

export async function PATCH(req: Request, {params}: memberIDProps){
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

        if(!params.memberID){
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
                        where:{
                            id: params.memberID,
                            //Check if it's not the currently logged in user
                            profileId:{
                                not: profile.id
                            }
                        },
                        data:{
                            role
                        }
                    }
                }
            },
            include:{
                members:{
                    include:{
                        profile: true
                    },
                    orderBy:{
                        role:"asc"
                    }
                }
            }
        });


        return NextResponse.json(server);
    } catch (error) {
        console.log("[MEMBERS_ID_PATCH]", error);
        return new NextResponse("Internal Error", {status: 500});
    }
}



export async function DELETE(req: Request, {params} : memberIDProps){
    try {

        const profile = await currentProfile();
        const {searchParams} = new URL(req.url);

        const serverId = searchParams.get("serverId");
        if(!profile){
            return new NextResponse("Unauthorized", {status: 403});
        }

        if(!serverId){
            return new NextResponse("Server ID missing", {status: 400});
        }

        if(!params.memberID){
            return new NextResponse("Member ID missing", {status: 400});
        }

        const server = await db.server.update({
            where:{
                id: serverId,
                profileId: profile.id
            },
            data:{
                members:{
                    deleteMany:{
                        id: params.memberID,
                        profileId: {
                            not: profile.id
                        }
                    }
                }
            },
            include:{
                members:{
                    include:{
                        profile: true
                    },
                    orderBy:{
                        role: "asc"
                    }
                }
            }
        })

        //This give the include data 
        return NextResponse.json(server);
        
    } catch (error) {
        console.log("[MEMBERS_ID_DELETE]", error);
        return new NextResponse("Internal Error", {status: 500});
    }
}