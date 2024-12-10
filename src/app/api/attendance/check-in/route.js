import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function POST(request) {
  const req = await request.json();
  console.log("api/Attendance/check-in");
  console.log(request.headers.authorization);
  
  try {
    // const url = new URL(request.url);
    // const token = url.searchParams.get("token");
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/Attendance/check-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": request.headers.authorization,
        },
        body: JSON.stringify(req),
      }
    );
    console.log("data");
    console.log(data);
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders,
      },
    });
  } catch (error) {
    console.log("error api/Attendance/check-in")
    return new Response(error, {
      headers: { "Content-Type": "application/json" },
      status: 403,
    });
  }
}
