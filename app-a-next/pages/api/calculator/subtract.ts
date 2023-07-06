import type { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired((
    req: NextApiRequest,
    res: NextApiResponse<{ result: number } | Error>
) => {
    const { query } = req;
    const { a, b } = query;
    const result = Number(a) - Number(b);
    res.status(200).json({ result });
})
