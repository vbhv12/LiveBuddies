import { NextResponse } from "next/server";

export async function PATCH(req:Request, {params} : {params: {serverId: string}}){
    try {
        
    } catch (error) {
        console.log("PATCH_SERVERID_LEAVE", error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}