import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ result: number } | Error>
) {
    const { query } = req;
    const { a, b } = query;
    const result = Number(a) + Number(b);
    res.status(200).json({ result });
}
