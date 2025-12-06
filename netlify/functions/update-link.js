import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const store = getStore("brainrot-links");

  if (req.method === "POST") {
    const body = await req.json();
    const link = body.link || "";

    await store.set("latest", link);

    return new Response(
      JSON.stringify({ success: true, link }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  if (req.method === "GET") {
    const latest = await store.get("latest");
    return new Response(latest || "", { status: 200 });
  }

  return new Response("Method Not Allowed", { status: 405 });
};
