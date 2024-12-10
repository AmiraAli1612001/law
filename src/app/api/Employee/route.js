import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";
//all employees
export async function GET(request) {
  console.log("get api/Employee/");
  
  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/Employee`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": request.headers.authorization,
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
    console.log("get api/Employee/ error");

    return new Response(JSON.stringify(error), {
      headers: { "Content-Type": "application/json" },
    });
  }
}

//add employee
export async function POST(request) {
  const req = await request.json();
  
  console.log("post api/Employee/");

  try {
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_BASE}/api/Employee`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": request.headers.authorization,
        },
        body: JSON.stringify(req),
      }
    );

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders,
      },
    });
  } catch (error) {
    console.log("post api/Employee/ error");
    return new Response(JSON.stringify(error), {
      headers: { "Content-Type": "application/json" },
    });
  }
}

