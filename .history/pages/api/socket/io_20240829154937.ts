import {Server as NetServer} from "http";
import { NextApiRequest  } from "next";
import {Server as ServerIo} from "socket.io"

import { NextApiResponseServerIo } from "@/type";


export const config = () =>{
    api:{
        bodyParser: false
    }
}

const ioHandler  = (req: NextApiRequest, res: NextApiRequest)