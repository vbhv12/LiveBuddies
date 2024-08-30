import { db } from "@/lib/db";

const findConversation =async (memberOneId: string, memberTwoId: string) => {
    try {
        
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

