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
        const {conversationId} = req.query;


        if(!profile){
            return res.status(401).json({error: "Unauthorized"})
        }

        if(!conversationId){
            return res.status(400).json({error: "Conversation ID Missing"})
        }

        if(!content){
            return res.status(400).json({error: "Content Missing"})
        }

        const conversation = await db.conversation.findFirst({
            where:{
                id: conversationId as string,
                OR:[
                    {
                        memberOne:{
                            profileId: profile.id
                        }
                    },
                    {
                        mmeber
                    }
                ]
            }
        })

        const member = server.members.find((member) => member.profileId === profile.id)

        if(!member){
            return res.status(404).json({
                message: "Member not found"
            });
        }

       

        const message = await db.message.create({
            data:{
                content,
                fileURL,
                channelId: channelId as string,
                memberId: member.id
            },
            include:{
                member:{
                    include:{
                        profile: true
                    }
                }
            }
        });

        const channelKey = `chat:${channelId}:messages`;

        res?.socket?.server?.io?.emit(channelKey, message);

        return res.status(200).json(message);

    } catch (error) {
        console.log("[MESSAGES_POST]",error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}