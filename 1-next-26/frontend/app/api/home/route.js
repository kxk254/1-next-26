export async function GET() {
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/getHome/?format=json`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    return new Response("Failed to fetch backend data", { status: 500 });
  }

  return Response.json(await res.json());
}
