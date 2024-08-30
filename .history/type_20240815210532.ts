import { Member } from "@prisma/client"

export type ServerWithMembersWithProfiles = Server & {
    members: (Member)
}