import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { await } from "effect/Deferred";

export async function POST(req: Request) {
    try{
        const {name, imageURl} = await 
    }
    catch(e){
        console.log("[SERVERS_POST]", e);
        return new NextResponse("Internal Error", {status: 500})
    }
}