import { NextResponse } from "next/server";

export async function POST(Req:Request) {
    try {
        const profile = 
    } catch (error) {
        console.log("Channel_Error", error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}