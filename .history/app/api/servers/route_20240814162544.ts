import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{

    }
    catch(e){
        console.log("[SERVERS_POST]", e);
        return new NextResponse
    }
}