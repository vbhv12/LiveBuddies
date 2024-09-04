import { currentProfilePages } from "@/lib/current-profile-pages";
import { NextApiResponseServerIo } from "@/type";
import { NextApiRequest } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponseServerIo
){
    if(req.method !== "DELETE" && req.method !== "PATCH"){
        return res.status(405).json({message: "Method Not Allowed"})
    }

    try {
        const profile = await currentProfilePages(req);
        const {messageId, serverId, channelId} = req.query;
        const {content} = req.body;

        if(!profile){
            return res.status(401).json({message: "Unauthorized"})
        }

        if(!serverId){
            return res.status(400).json({message: "Server ID Missing"})
        }

    } catch (error) {
        console.log(["MESSAGE_ID"],error);
        return res.status(500).json({message: "Internal Error"})
    }
}