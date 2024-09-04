import { currentProfilePages } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";
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
            return res.status(404).json({message: "Server ID Missing"})
        }

        if(!channelId){
            return res.status(404).json({message: "Channel ID Missing"})
        }

        const server = await db.server.findFirst({
            where:{
                id:serverId as string,
                members:{
                    some:{
                        profileId: profile.id
                    }
                }
            },
            include:{
                members: true,
            }
        })

        if(!server){
            return res.status(404).json({message: "Server Not Found"})
        }

        const channel = await db.channel.findFirst({
            where:{
                id: channelId as string,
                serverId: serverId as string
            }
        })

        if(!channel){
            return res.status(404).json({message: "Channel Not Found"})
        }


        const member = server.members.find((member) => member.profileId === profile.id);

        if(!member){
            return res.status(404).json({message: "Member Not Found"})
        }


        let message = db.message.findFirst({
            where:{
                id: messageId as string,
                channelId: channelId as string,
            },
            include:{
                member:{
                    include:{
                        
                    }
                }
            }
        })
    } catch (error) {
        console.log(["MESSAGE_ID"],error);
        return res.status(500).json({message: "Internal Error"})
    }
}