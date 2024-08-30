import { Member } from "@prisma/client"
import { Server } from "http"

export type ServerWithMembersWithProfiles = Server & {
    members: (Member)
}