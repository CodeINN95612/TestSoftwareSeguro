import { decrypt } from "@/services/encriptionService";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

export default withApiAuthRequired(async (
    req: NextApiRequest,
    res: NextApiResponse<Project[]>
) => {
    if (req.method === "POST") {
        const data = req.body as string;
        const msg = await decrypt<Project[]>(data);
        res.status(200).json(msg);
    }
})