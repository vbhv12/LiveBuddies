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
        
    } catch (error) {
        console.log(["MESSAGE_ID"],error);
        return res.status(500).json({message: "Method Not Allowed"})
    }
}