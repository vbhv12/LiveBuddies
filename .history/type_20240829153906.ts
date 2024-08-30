import { Member, Profile } from "@prisma/client"
import { Server } from "@prisma/client"
import {Server as NetServer, Socket} from "net";
import { NextResponse } from "next/server";

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile})[]
}