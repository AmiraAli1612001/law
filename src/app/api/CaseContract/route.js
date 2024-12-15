import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function GET(request) {
  console.log("get /api/CaseContract");

  try {
    // const url = new URL(request.url);
    // const pageNumber = url.searchParams.get("pageNumber");
    // const pageSize = url.searchParams.get("pageSize");

    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/CaseContract`,
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
    console.log("get /api/CaseContract err");
    console.log(error)
    return new Response(error, {
      headers: { "Content-Type": "application/json" },
      status: error.status || 500,
    });
  }

}
export async function POST(request) {
  console.log("get /api/CaseContract");

  try {
    // const url = new URL(request.url);
    // const pageNumber = url.searchParams.get("pageNumber");
    // const pageSize = url.searchParams.get("pageSize");

    const reqBody = await request.json();

    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/CaseContract`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${request.headers.authorization}`,
        },
        body: JSON.stringify(reqBody),
      }
    );

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders,
      },
    });

  } catch (error) {
    console.log("POST /api/CaseContract err");
    console.log(error)
    return new Response(error, {
      headers: { "Content-Type": "application/json" },
      status: error.status || 500,
    });
  }

}

