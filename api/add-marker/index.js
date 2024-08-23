import { kv } from "@vercel/kv";

export default async function handler(req, res) {
    await kv.lpush('markers', JSON.stringify(req.body.marker))

    const markers = await kv.get("markers");

    res.status(200).json({ markers });
}