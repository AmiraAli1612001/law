import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function GET(request, { params: { id } }) {
  console.log("GET CaseContract");

  try {
    // const url = new URL(request.url);
    // const token = url.searchParams.get("token");

    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/CaseContract/${id}`,
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
    console.log("GET api/CaseContract err");

    return new Response(error, {
      headers: { "Content-Type": "application/json" },
      status: error.status || 500,
    });
  }
}
export async function DELETE(request, { params: { id } }) {
  console.log("DELETE CaseContract");

  try {
    // const url = new URL(request.url);
    // const token = url.searchParams.get("token");

    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/CaseContract/${id}`,
      {
        method: "DELETE",
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
    console.log("DELETE api/CaseContract err");

    return new Response(error, {
      headers: { "Content-Type": "application/json" },
      status: error.status || 500,
    });
  }
}
export async function PUT(request, { params: { id } }) {
  const reqBody = await request.json();
  console.log("PUT CaseContract");
  console.log(reqBody);

  try {
    // const url = new URL(request.url);
    // const token = url.searchParams.get("token");

    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/CaseContract/${id}`,
      {
        method: "PUT",
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
    console.log("PUT api/CaseContract err");

    return new Response(error, {
      headers: { "Content-Type": "application/json" },
      status: error.status || 500,
    });
  }
}
