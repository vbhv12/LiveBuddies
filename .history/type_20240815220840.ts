import { Member, Profile } from "@prisma/client"
import { Server } from "@"

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile})[]
}