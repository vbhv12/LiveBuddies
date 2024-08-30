import { db } from "@/lib/db";


export const getOrCreateConversation = async (memberOneId:type) => {
    
}

const findConversation =async (memberOneId: string, memberTwoId: string) => {
    try {
        return await db.conversation.findFirst({
            where:{
                AND:[
                    {memberOneId: memberOneId},
                    {memberTwoId: memberTwoId}
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
                }
            }
        });
    } catch (error) {
        return null;
    }
    
}

const newConversation =async (memberOneId: string, memberTwoId: string) => {
    try{
        return await db.conversation.create({
            data:{
                memberOneId,
                memberTwoId
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
                 }
            }
        })
    }
    catch(error){
        return null;
    }
}

