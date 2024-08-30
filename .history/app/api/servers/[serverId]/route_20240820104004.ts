import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: Request, {params} : {params: {serverId : string}}){
    try{

    }
    catch(e){
        console.log(e);
        return new NextResponse()
    }
}