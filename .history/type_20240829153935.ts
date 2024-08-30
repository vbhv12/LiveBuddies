import { Member, Profile } from "@prisma/client"
import { Server } from "@prisma/client"
import {Server as NetServer, Socket} from "net";
import { NextApiResponse } from "next";
import {Server as Socket}

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile})[]
}