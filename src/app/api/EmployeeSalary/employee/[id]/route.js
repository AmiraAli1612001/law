import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function GET(request, { params }) {
  console.log("GET api/EmployeeSalary/employee/id");
  console.log(request.headers.authorization);
  
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeSalary/employee/${params.id}`,
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
    console.log("GET api/EmployeeSalary/employee/id err");
    return new Response(error);
  }
}


