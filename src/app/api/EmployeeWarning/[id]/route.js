import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function GET(request, { params }) {
  console.log("GET api/EmployeeWarning/id");
  console.log(request.headers.authorization);
  
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeWarning/${params.id}`,
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
    console.log("GET api/EmployeeWarning/id err");
    return new Response(error);
  }
}
export async function POST(request, { params }) {
  console.log("post api/EmployeeWarning/id");
  console.log(request.headers.authorization);
  
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeWarning/${params.id}`,
      {
        method: "POST",
        headers: {
          Authorization: request.headers.authorization,
        },
        body: request.body,
      }
    );

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders,
      },
    });
  } catch (error) {
    console.log("post api/EmployeeWarning/id err");
    return new Response(error);
  }
}
