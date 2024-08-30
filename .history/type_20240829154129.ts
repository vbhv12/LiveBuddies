import { Member, Profile } from "@prisma/client"
import { Server } from "@prisma/client"
import {Server as NetServer, Socket} from "net";
import { NextApiResponse } from "next";
import {Server as SocketIoServer} from "socket.io"

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile})[]
}

export type NextApiResponse