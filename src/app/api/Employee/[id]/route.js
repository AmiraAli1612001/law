import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function GET(request, { params }) {
  console.log("get api/Employee/id");
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
    console.log("get api/Employee/id err");
    return new Response(error, {
      status: 500,
    });
  }
}
export async function DELETE(request, { params }) {
  console.log("delete api/Employee/id");
  
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/Employee/${params.id}`,
      {
        method:"DELETE",
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
    console.log("delete api/Employee/id err");
    return new Response(error, {
      status: 500,
    });
  }
}
export async function PUT(request, { params }) {
  console.log("PUT api/Employee/id");
  
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/Employee/${params.id}`,
      {
        method:"PUT",
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
    console.log("PUT api/Employee/id err");
    return new Response(error, {
      status: 500,
    });
  }
}
