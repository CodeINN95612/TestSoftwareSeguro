import { NextApiRequest, NextApiResponse } from "next";
import { writeFile, readFile } from 'fs/promises';
import path from "path";

const fileName = path.join(process.cwd(), 'data', 'projects.json');
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>) {

    if (req.method === 'POST') {
        try {
            const project: Project = req.body;
            const fileContents = await readFile(fileName, 'utf-8');
            let items = JSON.parse(fileContents) as Project[];
            items = [...items, project]
            await writeFile(fileName, JSON.stringify(items));
        }
        catch {
            res.status(500).json({ message: 'Error storing data: ' });
        }

    }

}