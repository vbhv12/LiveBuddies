import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";
import { await } from "effect/Deferred";


export const currentUser = async () =>{
    const { userId } = auth();
}