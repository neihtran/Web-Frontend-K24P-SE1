export async function POST(req: Request) {
  const data = await req.json();

  const fail = Math.random() < 0.3;

  if (fail) {
    return new Response(JSON.stringify({ message: "API Error" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
  });
}
