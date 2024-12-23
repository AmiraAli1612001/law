import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { resetPopups } from "@/globalState/Features/popupsSlice";
import { togglePreviousClientPopup } from "@/globalState/Features/smallPopupsSlice";
import { useContext } from "react";
import AuthContext from "@/context/Auth";
import { closeLoader, openLoader } from "@/globalState/Features/tempDataSlice";
import { useRouter } from "next/router";
import { closeAddFormRecord } from "@/globalState/Features/formStateSlice";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";

const AddClient = () => {
  const { addRecord } = useSelector((store) => store.formState?.addRecord);
  const disptach = useDispatch();
  let [id, setID] = useState(window.localStorage.getItem("employeeDetailsID") ? window.localStorage.getItem("employeeDetailsID") : null)
  useEffect(() => {
    setID(window.localStorage.getItem("employeeDetailsID"))
  }, [])
  console.log("😢😢😢😢", id)
  const signUpForm = useForm();
  const {
    register,
    handleSubmit,
    control,
    formState,
    setError,
    reset,
    trigger,
  } = signUpForm;
  let { errors, isSubmitted } = formState;
  const dispatch = useDispatch();

  function handleKick() {
    toast.error("تم انهاء خدمات العميل بنجاح");
    // dispatch(resetPopups());
  }
  // ***************************************************************************************************************************
  let [fullNameArabic, setFullNameArabic] = useState("")
  let [fullNameEnglish, setFullNameEnglish] = useState("")
  let [jobTitle, setJobTitle] = useState("")

  let [hiringDate, setHiringDate] = useState("")
  let [email, setEmail] = useState("")
  let [phoneNumber, setPhoneNumber] = useState("")
  let [nationalId, setNationalId] = useState("")
  let [nationalIdExpiryDate, setNationalIdExpiryDate] = useState("")
  let [nationality, setNationality] = useState("")
  let [gender, setGender] = useState("")
  let [maritalStatus, setMaritalStatus] = useState("")
  let [workLocation, setWorkLocation] = useState("")
  let [residence, setResidence] = useState("")
  let [additionalInfo, setAdditionalInfo] = useState("")
  let [data, setData] = useState({})



  const apiKey = process.env.NEXT_PUBLIC_DEV;
  let { getAllEmployees } = useContext(AuthContext)

  const getEmployee = async () => {
    try {
      const response = await fetch(`${apiKey}/Employee/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
      });

      if (response.ok) {
        const employee = await response.json();
        setData(employee)
        setFullNameArabic(data?.fullNameArabic)
        setFullNameEnglish(data?.fullNameEnglish)
        setEmail(data?.email)
        setPhoneNumber(data?.phoneNumber)
        setNationalId(data?.nationalId)
        setHiringDate(data?.hiringDate)
        setNationality(data?.nationality)
        setJobTitle(data?.jobTitle)
        setGender(data?.gender)
      } else {
        toast.error("حدث خطأ ما");
      }
    } catch (error) {
      console.error("Error adding client:", error);
      toast.error("حدث خطأ أثناء الإضافة");
    }
  };



  const EditEmployee = async () => {
    try {
      const response = await fetch(`${apiKey}/Employee/${data.employeeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          fullNameEnglish: fullNameEnglish,
          fullNameArabic: fullNameArabic,
          email: email,
          phoneNumber: phoneNumber,
          nationalId: nationalId,
          hiringDate: hiringDate,
          nationality: nationality,
          gender: gender,
          jobTitle: jobTitle,
          departmentId: 0,         // Static or dynamic as needed
          residenceProfessionId: 0, // Static or dynamic as needed
          employeeStatusId: 0,     // Static or dynamic as needed
          isActive: true,          // Static or dynamic as needed
          workingHours: 40,        // Static or dynamic as needed
          loanCount: 0,            // Static or dynamic as needed
          password: "123456",      // Static or dynamic as needed (consider hashing)
          isLock: true,
        }),
      });

      if (!response.ok) {
        toast.error("حدث خطأ عند التحديث")
      } else {
        toast.success("تم تعديل العميل بنجاح");
        getAllEmployees()
      }

      // dispatch(togglePreviousClientPopup("تعد"));
    } catch (error) {
      console.log(`حدث خطأ: ${error.message}`);
    }
  };


  useEffect(() => {
    getEmployee()
  }, [])
  async function handleSubmitSignUp(formData, e) {
    e.preventDefault()
    // setGeneralError("");
    dispatch(openLoader("جاري التسجيل"));
    // toast.success("تم اضافة العميل بنجاح");
    await EditEmployee()
    disptach(closeAddFormRecord())
    dispatch(closeLoader());

    // dispatch(resetPopups());
    console.log(formData);
    // const result = await fetchRegisterUser({
    //   ...formData,
    // });

  }
  return (
    <form
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault()
        await EditEmployee()
      }}
      action=""
      noValidate
      id="addIssueRecord"
    >
      {/* معلومات العميل */}

      <div className="  main-section">
        <h3 className="!min-w-full text-2xl py-2 mb-4 font-bold text-gray-800">
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

              defaultValue={data?.fullNameArabic}
              onChange={(e) => {
                setFullNameArabic(e.target.value)
              }}
              placeholder=""
            />
            <p className="input-error">{errors.arabicName?.message}</p>
          </div>
          <div className="simple-input">
            <label htmlFor="">الاسم الرباعي باللغة الانجليزية</label>
            <input
              type="text"
              name=""
              id="arabicName"
              onChange={(e) => {
                setFullNameEnglish(e.target.value)
              }}
              defaultValue={data?.fullNameEnglish}

              placeholder=""
            />
            <p className="input-error">{errors.arabicName?.message}</p>
          </div>

          {/* email! */}
          <div className="simple-input">
            <label htmlFor="">البريد الالكتروني</label>
            <input
              type="email"
              name=""
              id="email"
              defaultValue={data?.email}

              placeholder=""
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <p className="input-error">{errors.email?.message}</p>
          </div>
          {/* phone ! */}
          <div className="simple-input">
            <label htmlFor="">رقم الهاتف</label>
            <input
              defaultValue={data?.phoneNumber}

              type="text"
              name=""
              id="phone"

              placeholder=""
              onChange={(e) => {
                setPhoneNumber(e.target.value)
              }}
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

              defaultValue={data?.nationalId}

              placeholder=""
              onChange={(e) => {
                setNationalId(e.target.value)
              }}
            />
            <p className="input-error">{errors.idNumber?.message}</p>
          </div>
          {/* idNumber end date ! */}
          <div className="simple-input">
            <label htmlFor="">تاريخ انتهاء الهوية</label>
            <input
              type="date"
              name=""
              defaultValue={data?.nationalIdExpiryDate}

              id="idNumberEndDate"


              placeholder=""
              onChangeCapture={(e) => {
                setHiringDate(e.target.value)
              }}
            />
            <p className="input-error">{errors.idNumberEndDate?.message}</p>
          </div>
          {/* nationality !*/}
          <div className="simple-input">
            <label htmlFor="">الجنسية</label>
            <input
              type="text"
              name=""
              defaultValue={data?.nationality}

              id="nationality"

              placeholder=""
              onChange={(e) => {
                setNationality(e.target.value)
              }}
            />
            <p className="input-error">{errors.nationality?.message}</p>
          </div>
          {/* gender !*/}
          <div className="simple-input">
            <label htmlFor="">الجنس</label>
            <select
              defaultValue={data?.gender}

              type="text"
              name=""
              id="gender"

              placeholder=""
              onChange={(e) => {
                setGender(e.target.value)
              }}
            >
              <option value="male">ذكر</option>
              <option value="female">انثى</option>
            </select>
            <p className="input-error">{errors.gender?.message}</p>
          </div>
          {/* social status !*/}
          <div className="simple-input">
            <label htmlFor="">الحالة الاجتماعية</label>
            <select
              type="text"
              name=""
              defaultValue={data?.maritalStatus}

              id="socialStatus"

              placeholder=""
              onChange={(e) => {
                setMaritalStatus(e.target.value)
              }}
            >
              <option value="single">اعزب\عزباء</option>
              <option value="married">متزوج\ة</option>
              <option value="divorced">مطلق\ة</option>
            </select>
            <p className="input-error">{errors.socialStatus?.message}</p>
          </div>

        </div>
      </div>
      <div className="simple-input">
        <label htmlFor="">الحالة</label>
        <input
          type="text"
          name=""
          defaultValue={data?.employeeStatusName}


          placeholder=""
          onChange={(e) => {
            setNationality(e.target.value)
          }}
        />
        <p className="input-error">{errors.nationality?.message}</p>
      </div>
      <div className="simple-input">
        <label htmlFor="">قسم</label>
        <input
          type="text"
          name=""
          defaultValue={data?.departmentName}

          id="nationality"

          placeholder=""
        // onChange={(e) => {
        //   setNationality(e.target.value)
        // }}
        />
        <p className="input-error">{errors.nationality?.message}</p>
      </div>
      <button
        type="submit"
        className="text-white text-xl p-4 w-full bg-textGreen rounded-lg mt-4 hover:bg-opacity-80 transition-all"
      >
        تعديل
      </button>
    </form>
  );
};

export default AddClient;
