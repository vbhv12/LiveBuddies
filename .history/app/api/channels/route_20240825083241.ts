import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        const profile = currentProfile();

        if(!profile){
            return new NextResponse("Unauthorized", {status: 403});
        }

        const {name, type} = req.json();

        const {searchParams} = new URL(req.url);

        const {serverId} = searchParams.get("searchId");

        if(!serverId){
            return new NextResponse("Server Id not found", {status: 403});
        }


    } catch (error) {
        console.log("Channel_Error", error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}