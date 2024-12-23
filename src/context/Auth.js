"use client";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const apiKey = process.env.NEXT_PUBLIC_DEV;
export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [Error, setError] = useState(null);
    let logoutTimer;

    const parseRemainingTime = (remainingTime) => {
        const [hours, minutes, seconds] = remainingTime
            .split(/[hms\s]+/)
            .filter(Boolean)
            .map(Number);
        return hours * 3600 + minutes * 60 + seconds; // Total time in seconds
    };

    const startLogoutTimer = (expirationTime) => {
        const currentTime = new Date().getTime();
        const remainingTime = expirationTime - currentTime;

        if (remainingTime <= 0) {
            logout();
        } else {
            logoutTimer = setTimeout(() => {
                logout();
            }, remainingTime);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        localStorage.removeItem("employeeId");
        localStorage.removeItem("attendanceId");
        localStorage.removeItem("remainingTime");
        router.push("/auth");
    };

    const login = async (email, password) => {
        try {
            const response = await fetch(`${apiKey}/EmployeeAuth/Login`, {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                const remainingSeconds = parseRemainingTime(data.remainingTime);
                const expirationTime = new Date().getTime() + remainingSeconds * 1000;
                localStorage.setItem("token", data.token);
                localStorage.setItem("tokenExpiration", expirationTime);
                localStorage.setItem("employeeId", data.employeeId);
                localStorage.setItem("attendanceId", data.lastAttendance.attendanceId);
                localStorage.setItem("remainingTime", JSON.stringify(data.remainingTime));
                localStorage.setItem("isCheckOutTimeNull", localStorage.getItem("isCheckOutTimeNull") ? localStorage.getItem("isCheckOutTimeNull") : false);

                startLogoutTimer(expirationTime);
                router.push("/");
            } else {
                setError("خطأ في كلمة السر او البريد الالكتروني");
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    // Auto Logout on Page Load
    const checkTokenExpiration = () => {
        const expirationTime = localStorage.getItem("tokenExpiration");
        if (expirationTime) {
            startLogoutTimer(expirationTime);
        }
    };

    // Run on Page Load
    checkTokenExpiration();


    // ********************************************************************************************************

    useEffect(() => {
        if (!localStorage.getItem("isCheckOutTimeNull")) {
            localStorage.setItem("isCheckOutTimeNull", false)
        }
    }, [])
    let [isCheckOutTimeNull, setIsCheckOutTimeNull] = useState(localStorage.getItem("isCheckOutTimeNull") ? localStorage.getItem("isCheckOutTimeNull") : false);
    const isCheckOutTimeNullApi = async () => {
        const id = localStorage.getItem("employeeId");
        console.log(id)
        try {
            const response = await fetch(`${apiKey}/Attendance/last-attendance/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                cache: "no-store",
            });

            let data = response.json()

            if (response.ok) {
                setIsCheckOutTimeNull(data?.isCheckOutTimeNull);
                console.log("🙂🙂🙂🙂", isCheckOutTimeNull)
            }
        } catch (error) {
            console.error("Error in check-out API:", error);
        }
    };
    useEffect(() => {
        isCheckOutTimeNullApi()
    }, [])

    /********************************************clients****************************************** */
    let [customers, setCustomers] = useState([])

    const getAllCustomers = async () => {
        try {
            const response = await fetch(`${apiKey}/Customer`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                cache: "no-store",
            });
            const data = await response.json();
            if (response.ok) {
                setCustomers(data.customers)
            }
        } catch (error) {
            console.error("Error fetching attendance:", error);
        }
    };
    useEffect(() => {
        getAllCustomers()
    }, [])


    /*******************************************************Check btn*********************************************************** */
    const [Check, setCheck] = useState(null);

    useEffect(() => {
        // const storedCheck = localStorage.getItem("isCheckOutTimeNull");
        setCheck(isCheckOutTimeNull);
    }, [isCheckOutTimeNull]);




    // /************************************leave admin */
    let [leaveAdmin, setLeaveAdmin] = useState([])
    const apiKey = process.env.NEXT_PUBLIC_DEV;

    const getAllLeaveAdmin = async () => {
        try {
            const response = await fetch(`${apiKey}/LeaveAdmin`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                cache: "no-store",
            });
            const data = await response.json();
            if (response.ok) {
                setLeaveAdmin(data)
            }
        } catch (error) {
            console.error("Error fetching leaveAdmin:", error);
        }
    };
    useEffect(() => {
        getAllLeaveAdmin()
    }, [])


    /******************************employee********* */
    let [employees, setEmployees] = useState([])
  
    const getAllEmployees = async () => {
      try {
        const response = await fetch(`${apiKey}/Employee`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          cache: "no-store",
        });
        const data = await response.json();
        if (response.ok) {
          setEmployees(data)
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    useEffect(() => {
      getAllEmployees()
    }, [])
// salary
let [salary, setSalaries] = useState([])

const getAllSalaries = async () => {
    try {
      const response = await fetch(`${apiKey}/EmployeeSalary`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
      });
      const res = await response.json();
      if (response.ok) {
        setSalaries(res)
      }
    } catch (error) {
      toast.error("حدث خطأ اثناء جلب البيانات")
    }
  };
  useEffect(() => {
    getAllSalaries()
  }, [])

//   warning
let [warnings, setWarnings] = useState([])

const getAllWarning = async () => {
  try {
    const response = await fetch(`${apiKey}/EmployeeWarning`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      cache: "no-store",
    });
    const data = await response.json();
    if (response.ok) {
      setWarnings(data)

    }
  } catch (error) {
    toast.error("حدث خطأ اثناء جلب البيانات")
    console.error("Error fetching all warning:", error);
  }
};
useEffect(() => {
  getAllWarning()
}, [])



    return (
        <AuthContext.Provider value={{ warnings, getAllWarning , login, Error, setError, setIsCheckOutTimeNull, isCheckOutTimeNull,getAllSalaries , salary, customers, getAllCustomers, Check, setCheck, getAllLeaveAdmin, leaveAdmin , employees , getAllEmployees}}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthContext;
