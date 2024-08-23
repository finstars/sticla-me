import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const markers = await kv.get("markers");

  res.status(200).json({ markers });
}