import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function GET(request, { params }) {
  console.log("GET api/Attendance/checked-in-today");

  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/Attendance/checked-in-today`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${request.headers.authorization}`,
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
    console.log("GET api/Attendance/checked-in-today");
    return new Response(error, {
      headers: { "Content-Type": "application/json" },
    });
  }
}
