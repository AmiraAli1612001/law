import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { resetPopups } from "@/globalState/Features/popupsSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "@/context/Auth";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";

const AddEmployee = () => {
  const signUpForm = useForm();
  // const {
  //   user: { token },
  // } = useSelector((state) => state.auth);


  const dispatch = useDispatch();
  async function handleSubmitSignUp(formData, e) {
    e.preventDefault();  // Prevent default form submission
    await addEmployee();  // Await the API call to ensure it's completed
  }

  function handleKick() {
    toast.error("تم انهاء خدمات الموظف بنجاح");
    dispatch(resetPopups());
  }

  // ***************************************************************************************************************************
  let [fullNameArabic, setFullNameArabic] = useState("")
  let [fullNameEnglish, setFullNameEnglish] = useState("")
  let [email, setEmail] = useState("")
  let [phoneNumber, setPhoneNumber] = useState("")
  let [nationalId, setNationalId] = useState("")
  let [hiringDate, setHiringDate] = useState("")
  let [jobTitle, setJobTitle] = useState("")
  let [nationality, setNationality] = useState("")
  let [gender, setGender] = useState("")
  let [departmentId, setDepartmentId] = useState("")
  let [residenceProfessionId, setResidenceProfessionId] = useState("")
  let [employeeStatusId, setEmployeeStatusId] = useState("")
  let [isActive, setIsActive] = useState("")
  let [workingHours, setWorkingHours] = useState("")
  let [loanCount, setloanCount] = useState("")
  let [password, setPassword] = useState("")
  let [isLock, setIsLock] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm();

  const apiKey = process.env.NEXT_PUBLIC_DEV;
  let { getAllEmployees } = useContext(AuthContext)

  const addEmployee = async () => {
    try {
      const response = await fetch(`${apiKey}/Employee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
        body: JSON.stringify({

          fullNameArabic,
          fullNameEnglish,
          email,
          phoneNumber,
          nationalId,
          hiringDate,
          nationality,
          jobTitle,
          gender,
          departmentId: 1,
          residenceProfessionId: 1,
          employeeStatusId: 1,
          isActive: true,
          workingHours: 0,
          loanCount: 0,
          password: "123456"


        }),
      });

      if (response.ok) {
        toast.success("تم اضافة العميل بنجاح")
        getAllEmployees()
        //  dispatch(togglePreviousemployee());
      }

    }
    catch (error) {
      toast.error("حدث خطأ ما");

    }
  };
  return (
    <form
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault()
        await addEmployee()
      }}
      action=""
      noValidate
      id="addIssueRecord"
      className="main-section max-h-fit"
    >
      {/* معلومات الموظف */}
      <div className="">
        <h3 className="small-inputs-title !min-w-full text-2xl py-2 mb-6">
          معلومات الموظف
        </h3>
        <div className="small-inputs !grid-cols-3">
          {/* name arabic ! */}
          <div className="simple-input">
            <label htmlFor="">الاسم الرباعي باللغة العربية</label>
            <input
              type="text"
              name=""
              id="arabicName"
              {...register("arabicName", {
                required: "يجب إدخال الاسم الرباعي",

                validate: (value) => {
                  console.log(value.split(" ").length);
                  return (
                    value.trim().split(" ").length > 3 ||
                    "يجب إدخال الاسم الرباعي"
                  );
                },
              })}
              placeholder=""
              onChange={(e) => {
                setFullNameArabic(e.target.value)
              }}
            />
            <p className="input-error">{errors.arabicName?.message}</p>
          </div>
          {/* name english ! */}
          <div className="simple-input">
            <label htmlFor="">الاسم الرباعي باللغة الانجليزية</label>
            <input
              type="text"
              name=""
              id="englishName"
              {...register("englishName", {
                required: "يجب إدخال الاسم الرباعي باللغة الانجليزية",

                validate: (value) => {
                  console.log(value.split(" ").length);
                  return (
                    value.trim().split(" ").length > 3 ||
                    "يجب إدخال الاسم الرباعي باللغة الانجليزية"
                  );
                },
              })}
              onChange={(e) => {
                setFullNameEnglish(e.target.value)
              }}
              placeholder=""
            />
            <p className="input-error">{errors.englishName?.message}</p>
          </div>
          {/* email! */}
          <div className="simple-input">
            <label htmlFor="">البريد الالكتروني</label>
            <input
              type="email"
              name=""
              id="email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              {...register("email", {
                required: "يجب إدخال البريد الالكتروني",
                // validate: (value) => {
                //   console.log(value.split(" ").length);
                //   return (
                //     value.trim().split(" ").length > 3 ||
                //     "يجب إدخال البريد الالكتروني"
                //   );
                // },
              })}
              placeholder=""
            />
            <p className="input-error">{errors.email?.message}</p>
          </div>
          {/* phone ! */}
          <div className="simple-input">
            <label htmlFor="">رقم الهاتف</label>
            <input
              type="text"
              name=""
              id="phone"
              onChange={(e) => {
                setPhoneNumber(e.target.value)
              }}
              {...register("phone", {
                required: "يجب إدخال رقم الهاتف",
              })}
              placeholder=""
            />
            <p className="input-error">{errors.phone?.message}</p>
          </div>
          {/* idNumber ! */}
          <div className="simple-input">
            <label htmlFor="">رقم الهوية</label>
            <input
              type="text"
              name=""
              id="idNumber"
              onChange={(e) => {
                setNationalId(e.target.value)
              }}
              {...register("idNumber", {
                required: "يجب إدخال رقم الهوية",
              })}
              placeholder=""
            />
            <p className="input-error">{errors.idNumber?.message}</p>
          </div>
          {/* hiringDate !*/}
          <div className="simple-input">
            <label htmlFor="">تاريخ التعيين</label>
            <input
              onChangeCapture={(e) => {
                setHiringDate(e.target.value)
              }}
              type="date"
              name=""
              id="hiringDate"
              {...register("hiringDate", {
                required: "يجب ادخال تاريخ التعيين",
              })}
              placeholder=""
            />
            <p className="input-error">{errors.hiringDate?.message}</p>
          </div>
          {/* nationality !*/}
          <div className="simple-input">
            <label htmlFor="">الجنسية</label>
            <input
              type="text"
              name=""
              id="nationality"
              onChange={(e) => {
                setNationality(e.target.value)
              }}
              {...register("nationality", {
                required: "يجب إدخال الجنسية",
              })}
              placeholder=""
            />
            <p className="input-error">{errors.nationality?.message}</p>
          </div>
          {/* jobTitle !*/}
          <div className="simple-input">
            <label htmlFor="">الوظيفة</label>
            <select
              type="text"
              name=""
              id="jobTitle"
              onChange={(e) => {
                setJobTitle(e.target.value)
              }}
              {...register("jobTitle", {
                required: "يجب إدخال نوع الوظيفة",
              })}
              placeholder=""
            >
              <option value="" className="hidden">
                اختر الوظيفة
              </option>
              <option value="موظف">محامي 1</option>
              <option value="موظف متفرع">محامي 2</option>
            </select>
            <p className="input-error">{errors.jobTitle?.message}</p>
          </div>
          {/* gender !*/}
          <div className="simple-input">
            <label htmlFor="">الجنس</label>
            <select
              type="text"
              name=""
              id="gender"
              {...register("gender", {
                required: "يجب اختيار الجنس",
              })}
              placeholder=""
              onChange={(e) => {
                setNationality(e.target.value)
              }}
            >
              <option value="male">ذكر</option>
              <option value="female">انثى</option>
            </select>
            <p className="input-error">{errors.gender?.message}</p>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-white hover:bg-opacity-85 text-xl px-4 py-2 w-full bg-textGreen"
      >
        اضافة
      </button>
    </form>
  );
};

export default AddEmployee;
