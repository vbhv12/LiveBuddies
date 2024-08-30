import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest, {params} : {params: {serverId}})