import { currentProfile } from "@/lib/current-profile";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: Request, {params} : {params: {serverId : string}}){
    try{
        const profile = await currentProfile();

        if(!profile){

        }
    }
    catch(e){
        console.log(e);
        return new NextResponse("Internal Error", {status: 500});
    }
}