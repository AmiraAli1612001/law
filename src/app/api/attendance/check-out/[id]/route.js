import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function POST(request, {params}) {
  const req = await request.json();
  console.log("api/Attendance/check-out");
  console.log(req);
  
  try {
    // const url = new URL(request.url);
    // const token = url.searchParams.get("token");
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/Attendance/check-out/${params.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${request.headers.authorization}`,
        },
        body: JSON.stringify(req),
      }
    );

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders,
      },
    });
  } catch (error) {
    console.log("api/Attendance/check-in")
    return new Response(JSON.stringify(error), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
