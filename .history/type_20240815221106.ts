import { Member, Profile } from "@prisma/client"
import { Server } from "@prisma/client"

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & Profile)[]
}