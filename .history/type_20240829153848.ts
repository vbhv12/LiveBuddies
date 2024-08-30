import { Member, Profile } from "@prisma/client"
import { Server } from "@prisma/client"
import {Server as NetServer, Sock}

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile})[]
}