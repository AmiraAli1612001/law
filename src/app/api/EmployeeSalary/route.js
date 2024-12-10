import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";
//all employees
export async function GET(request) {
  console.log("get api/EmployeeSalary");

  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeSalary`,
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
    console.log("get api/EmployeeSalary err");

    return new Response(JSON.stringify(error), {
      headers: { "Content-Type": "application/json" },
      status: error?.status || 500,
    });
  }
}

//add employee
export async function POST(request) {
  console.log("POST api/EmployeeSalary");

  const requestBody = await request.json();
  console.log(requestBody);
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeSalary`,
      {
        method: "POST",
        headers: {
          Authorization: request.headers.authorization,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders,
      },
    });
  } catch (error) {
    console.log("POST api/EmployeeSalary err");
    return new Response(error);
  }
}
