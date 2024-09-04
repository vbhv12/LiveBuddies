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
        const profile = await currentProfilePages();
    } catch (error) {
        console.log(["MESSAGE_ID"],error);
        return res.status(500).json({message: "Internal Error"})
    }
}