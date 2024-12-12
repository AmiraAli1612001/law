import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function GET(request, { params: id }) {
  console.log("get api/EmployeeReward/id");
  console.log(request.headers.authorization);

  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeReward/${id}`,
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
    console.log("get api/EmployeeReward/id err");
    return new Response(error, {
      status: 500,
    });
  }
}

export async function PUT(request, { params: id }) {
  console.log("PUT api/EmployeeReward/id");
  console.log(request.headers.authorization);
  const reqData = await request.json();
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeReward/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: request.headers.authorization,
        },
        body: JSON.stringify(reqData),
      }
    );

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders,
      },
    });
  } catch (error) {
    console.log("PUT api/EmployeeReward/id err");
    return new Response(error, {
      status: 500,
    });
  }
}
export async function DELETE(request, { params: id }) {
  console.log("DELETE api/EmployeeReward/id");
  console.log(request.headers.authorization);
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeReward/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: request.headers.authorization,
        }
      }
    );

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders,
      },
    });
  } catch (error) {
    console.log("DELETE api/EmployeeReward/id err");
    return new Response(error, {
      status: 500,
    });
  }
}
