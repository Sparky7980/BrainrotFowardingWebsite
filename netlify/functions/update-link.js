import fs from "fs";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const body = await req.json();
  const link = body.link || "";

  fs.writeFileSync("/tmp/link.txt", link);

  return res.json({ success: true, link });
};
