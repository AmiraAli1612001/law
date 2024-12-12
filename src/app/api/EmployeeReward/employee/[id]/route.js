import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";
//all employee rewards
export async function GET(request, { params: {id} }) {
  console.log("get api/EmployeeReward/employee/id");

  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/EmployeeReward/employee/${id}`,
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
    console.log("get api/EmployeeReward/employee/id err");
    console.log(id);
    return new Response(error, {
      headers: { "Content-Type": "application/json" },
      status: error?.status || 500,
    });
  }
}

