import { currentProfilePages } from "@/lib/current-profile-pages";
import { NextApiResponseServerIo } from "@/type";
import { NextApiRequest } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponseServerIo
){
    if(req.method != "POST"){
        return res.status(405).json({
            error: "Method not allowed"
        })
    }

    try {
        const profile = await currentProfilePages(req);
        const {content, fileURL} = req.body;
        const {serverId, channelId} = req.query;


        if(!profile){
            return res.status(401).json({error: "Unauthorized"})
        }

        if(!serverId){
            return res.status(400).json({error: "Server ID Missing"})
        }

        if(!serverId){
            return res.status(400).json({error: "Server ID Missing"})
        }

    } catch (error) {
        console.log("[MESSAGES_POST]",error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}