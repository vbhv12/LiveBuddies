import { currentUser } from "@clerk/nextjs/server";
import { UUID } from "crypto";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const {name, imageURl} = await req.json();
        const profile = await currentUser();

        if(!profile){
            return new NextResponse("Unauthorized user", {status: 401});
        }


    }
    catch(e){
        console.log("[SERVERS_POST]", e);
        return new NextResponse("Internal Error", {status: 500})
    }
}