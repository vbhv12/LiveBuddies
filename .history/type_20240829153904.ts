import { Member, Profile } from "@prisma/client"
import { Server } from "@prisma/client"
import {Server as NetServer, Socket} from "net";
import {NextRe}

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile})[]
}