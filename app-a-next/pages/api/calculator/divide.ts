import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ result: number } | Error>
) {
    const { query } = req;
    const { a, b } = query;
    const num = Number(b);
    const result = Number(a) / (num == 0 ? 1 : num);
    res.status(200).json({ result });
}
