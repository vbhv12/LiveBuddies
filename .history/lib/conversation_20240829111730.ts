import { db } from "@/lib/db";

const findConversation =async (memberOneId: string, memberTwoId: string) => {
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
}

const newConversation =async (memberOneId: string, memberTwoId: string) => {
    try{
        return
    }
    catch(error){
        return null;
    }
}

