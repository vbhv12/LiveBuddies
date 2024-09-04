import { currentProfilePages } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";
import { NextApiResponseServerIo } from "@/type";
import { MemberRole } from "@prisma/client";
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
        const { directMessageId, conversationId } = req.query;
        const {content} = req.body;

        if(!profile){
            return res.status(401).json({message: "Unauthorized"})
        }

        if(!conversationId){
            return res.status(404).json({message: "Conversation ID Missing"})
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
                        memberTwo:{
                            profileId: profile.id
                        }
                    }
                ]
            },
            include:{
                memberOne:{
                    include:{
                        profile: true
                    }
                },
                memberTwo:{
                    include:{
                        profile: true
                    }
                },
            }
        })

        if(!conversation){
            return res.status(404).json({message: "Conversation Not Found"})
        }
    
        const member = server.members.find((member) => member.profileId === profile.id);

        if(!member){
            return res.status(404).json({message: "Member Not Found"})
        }


        let message = await db.message.findFirst({
            where:{
                id: messageId as string,
                channelId: channelId as string,
            },
            include:{
                member:{
                    include:{
                        profile: true
                    }
                }
            }
        })

        if(!message || message.deleted){
            return res.status(404).json({message: "Message Not Found"})
        }

        const isMessageOwner = message.memberId === member.id;
        const isAdmin = MemberRole.ADMIN === member.role;
        const isModerator = MemberRole.MODERATOR === member.role;

        const canModify = isMessageOwner || isAdmin || isModerator;

        if(!canModify){
            return res.status(401).json({message: "Unauthorized"})
        }

        if(req.method === "DELETE"){
            message = await db.message.update({
                where:{
                    id: message.id as string
                },
                data:{
                    fileURL: null,
                    content: "This message has been deleted",
                    deleted: true
                },
                include:{
                    member:{
                        include:{
                            profile: true
                        }
                    }
                }
            })
        }

        if(req.method === "PATCH"){
            if(!isMessageOwner){
                return res.status(401).json({message: "Unauthorized"})
            }

            message = await db.message.update({
                where:{
                    id: message.id as string
                },
                data:{
                    content,
                },
                include:{
                    member:{
                        include:{
                            profile: true
                        }
                    }
                }
            })
        }

        const updateKey = `chat:${channelId}:messages:update`;

        res?.socket?.server?.io?.emit(updateKey, message);

        return res.status(200).json(message);
    } catch (error) {
        console.log(["MESSAGE_ID"],error);
        return res.status(500).json({message: "Internal Error"})
    }
}