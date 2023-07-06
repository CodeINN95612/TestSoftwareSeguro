import { encrypt } from "@/services/encriptionService";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { readFile } from 'fs/promises';
import NextCors from 'nextjs-cors';

const fileName = path.join(process.cwd(), 'data', 'projects.json');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200
    });

    if (req.method === "GET") {
        try {
            const fileContents = await readFile(fileName, 'utf-8');
            const _ = JSON.parse(fileContents) as Project[];
            const encrypted = await encrypt(fileContents);
            res.status(200).json(encrypted);
        } catch {
            res.status(500).json({ message: 'Error getting data' });
        }
    }
}