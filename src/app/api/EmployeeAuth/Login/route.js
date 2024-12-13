import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function POST(request) {
  const req = await request.json();
  console.log("EmployeeAuth/Login 1");
  console.log(req);
  try {
    // const url = new URL(request.url);
    // const token = url.searchParams.get("token");
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeAuth/Login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      }
    );

    console.log("EmployeeAuth/Login 2");
    console.log(data);

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders,
      },
    });
  } catch (error) {
    console.log("api/EmployeeAuth/Login error");
    console.log(error);
    return new Response(error, {
      status: error?.status || 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
