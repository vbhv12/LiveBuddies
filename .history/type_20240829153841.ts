import { Member, Profile } from "@prisma/client"
import { Server } from "@prisma/client"
import 

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile})[]
}