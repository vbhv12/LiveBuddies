import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params } : {params: {serverId: string}}){
    try{

    }
    catch(e){
        console.log("[SERVERID]" + e);
        return NextResponse("Internal Error" + )

    }
}