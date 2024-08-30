import {Server as NetServer} from "http";
import { NextApiRequest  } from "next";
import {Server as ServerIo} from "socket.io"

import { NextApiResponseServerIo } from "@/type";
import { Server } from "lucide-react";


export const config = () =>{
    api:{
        bodyParser: false
    }
}

const ioHandler  = (req: NextApiRequest, res: NextApiResponseServerIo) =>{
    if(!res.socket.server.io){
        const path = "/api/socket/io";
        const httpServer: NetServer = res.socket.server as any;
        const io = new Server
    }
}