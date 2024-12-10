import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function GET(request) {
  console.log("get api/AttendanceAdmin");

  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/AttendanceAdmin`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: request.headers.authorization,
        },
      }
    );

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders,
      },
    });
  } catch (error) {
    console.log("get api/AttendanceAdmin err");
    return new Response(error, {
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  console.log("POST api/AttendanceAdmin");
  const req = await request.json();
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/AttendanceAdmin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: request.headers.authorization,
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
    console.log("POST api/AttendanceAdmin err");
    return new Response(JSON.stringify(error), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
