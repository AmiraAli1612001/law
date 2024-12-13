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

export async function PUT(request, { params }) {
  console.log("PUT api/EmployeeWarning/id");
  console.log(request.headers.authorization);
  const reqBody = await request.json();
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeWarning/${params.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: request.headers.authorization,
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
    console.log("PUT api/EmployeeWarning/id err");
    return new Response(error);
  }
}

export async function DELETE(request, { params }) {
  console.log("DELETE api/EmployeeWarning/id");
  console.log(request.headers.authorization);

  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeWarning/${params.id}`,
      {
        method: "DELETE",
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
    console.log("DELETE api/EmployeeWarning/id err");
    return new Response(error);
  }
}
