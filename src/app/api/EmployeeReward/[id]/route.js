import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function GET(request, { params }) {
  console.log("api/Employee/id");
  console.log(request.headers.authorization);
  
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/Employee/${params.id}`,
      {
        headers: {
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
    console.log("api/Employee/id");
    return new Response(error, {
      status: 500,
    });
  }
}
