import { currentProfilePages } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";
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

        if(!channelId){
            return res.status(400).json({error: "Channel ID Missing"})
        }

        if(!content){
            return res.status(400).json({error: "Content Missing"})
        }

        const server = await db.server.findFirst({
            where:{
                id: serverId as string,
                members:{
                    some:{
                        profileId: profile.id
                    }
                }
            },
            include:{
                members: true
            }
        });

        if(!server){
            return res.status(404).json({
                message: "Server not found"
            });
        }

        const channel = await db.channel.findFirst({
            where:{
                id: channelId as string,
                serverId: serverId as string
            }
        })

        if(!channel){
            return res.status(404).json({
                message: "Channel not found"
            });
        }

        const member = server.members.find((member) => member.profileId === profile.id)

        if(!member){
            
        }

    } catch (error) {
        console.log("[MESSAGES_POST]",error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}