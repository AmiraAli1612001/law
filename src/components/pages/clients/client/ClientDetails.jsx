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
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";

const AddClient = () => {
  const { addRecord } = useSelector((store) => store.formState?.addRecord);
  const disptach = useDispatch();
  let [id, setID] = useState(window.localStorage.getItem("clientID") ? window.localStorage.getItem("clientID") : null)
  useEffect(() => {
    setID(window.localStorage.getItem("clientID"))
  }, [])
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
  const [fullNameArabic, setFullNameArabic] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [nationalIdExpiryDate, setNationalIdExpiryDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [residence, setResidence] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [data, setData] = useState({});
  const apiKey = process.env.NEXT_PUBLIC_DEV;
  const { getAllCustomers } = useContext(AuthContext);

  const getClient = async () => {
    try {
      const response = await fetch(`${apiKey}/Customer/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
      });

      if (response.ok) {
        const customer = await response.json();
        setData(customer);  // Update state with fetched customer data
        setFullNameArabic(customer?.fullNameArabic);
        setEmail(customer?.email);
        setPhoneNumber(customer?.phoneNumber);
        setNationalId(customer?.nationalId);
        setNationalIdExpiryDate(customer?.nationalIdExpiryDate);
        setGender(customer?.gender);
        setMaritalStatus(customer?.maritalStatus);
        setWorkLocation(customer?.workLocation);
        setResidence(customer?.residence);
        setAdditionalInfo(customer?.additionalInfo);
      } else {
        toast.error("حدث خطأ في جلب بيانات العميل");
      }
    } catch (error) {
      console.error("Error fetching client:", error);
      toast.error("حدث خطأ أثناء جلب البيانات");
    }
  };
  const EditCustomer = async () => {
    try {
      const response = await fetch(`${apiKey}/Customer/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          fullNameArabic,
          email,
          phoneNumber,
          nationalId,
          nationalIdExpiryDate,
          nationality,
          gender,
          maritalStatus,
          workLocation,
          residence,
          additionalInfo,
        }),
      });


    } catch (error) {
      console.error("Error updating customer:", error);
      toast.error("حدث خطأ أثناء التعديل");
    }
  };

  useEffect(() => {
    getClient();  // Fetch client data on component mount
  }, []);

  const handleSubmitSignUp = async (formData, e) => {
    dispatch(openLoader("جاري التسجيل"));
    await EditCustomer();
    dispatch(closeLoader());
    getAllCustomers();
    toast.success("تم تعديل العميل بنجاح");

  }


  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitSignUp)}
      action=""
      noValidate
      id="addIssueRecord"
    >
      {/* معلومات العميل */}

      <div className="  main-section">
        <h3 className="!min-w-full text-2xl py-2 mb-4 font-bold text-gray-800">
          معلومات العميل
        </h3>
        <div className="small-inputs !grid-cols-3">
          {/* name arabic ! */}
          <div className="simple-input">
            <label htmlFor="">الاسم الرباعي باللغة العربية</label>
            <input
              type="text"
              name=""
              id="arabicName"
              // {...register("arabicName", {
              //   required: "يجب إدخال الاسم الرباعي",
              //   validate: (value) => {
              //     console.log(value.split(" ").length);
              //     return (
              //       value.trim().split(" ").length > 3 ||
              //       "يجب إدخال الاسم الرباعي"
              //     );

              //   },
              // })}
              defaultValue={data?.fullNameArabic}
              onChange={(e) => {
                setFullNameArabic(e.target.value)

              }}
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
              // {...register("email", {
              //   required: "يجب إدخال البريد الالكتروني",
              //   // validate: (value) => {
              //   //   console.log(value.split(" ").length);
              //   //   return (
              //   //     value.trim().split(" ").length > 3 ||
              //   //     "يجب إدخال البريد الالكتروني"
              //   //   );
              //   // },
              // })}
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
            // {...register("phone", {
            //   required: "يجب إدخال رقم الهاتف",
            // })}
            // placeholder=""
            // onChange={(e) => {
            //   setPhoneNumber(e.target.value)
            // }}
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
              // {...register("idNumber", {
              //   required: "يجب إدخال رقم الهوية",
              // })}
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
              // {...register("idNumberEndDate", {
              //   required: "يجب ادخال تاريخ انتهاء الهوية",
              // })}

              placeholder=""
              onChange={(e) => {
                setNationalIdExpiryDate(e.target.value)
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
              // {...register("nationality", {
              //   required: "يجب إدخال الجنسية",
              // })}
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
              // {...register("gender", {
              //   required: "يجب اختيار الجنس",
              // })}
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
              // {...register("socialStatus", {
              //   required: "يجب اختيار الحالة الاجتماعية",
              // })}
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
          {/* workPlace !*/}
          <div className="simple-input">
            <label htmlFor="">موقع العمل</label>
            <input
              type="text"
              name=""
              id="workPlace"
              // {...register("workPlace", {
              //   required: "يجب إدخال موقع العمل",
              // })}
              defaultValue={data?.workLocation}

              placeholder=""
              onChange={(e) => {
                setWorkLocation(e.target.value)
              }}
            />
            <p className="input-error">{errors.workPlace?.message}</p>
          </div>
          {/* residenceJob !*/}
          <div className="simple-input">
            <label htmlFor="">محل الإقامة</label>
            <input
              type="text"
              name=""
              id="residenceJob"
              // {...register("residenceJob", {
              //   required: "يجب محل الإقامة",
              // })}
              defaultValue={data?.residence}

              placeholder=""
              onChange={(e) => {
                setResidence(e.target.value)
              }}
            />
            <p className="input-error">{errors.residenceJob?.message}</p>
          </div>
        </div>
      </div>
      {/* extraInfo !*/}
      <div className="main-section simple-input !min-w-full flex-1 flex flex-col">
        <label htmlFor="">معلومات اضافية</label>
        <textarea
          type="text"
          name=""
          defaultValue={data?.additionalInfo}

          id="extraInfo"
          // {...register("extraInfo", {
          //   // required: "يجب إدخال الاسم الرباعي بالعربي",
          // })}
          placeholder=""
          onChange={(e) => {
            setAdditionalInfo(e.target.value)
          }}
          className="flex-1"
        ></textarea>
      </div>
      <button
        type="submit"
        onClick={() => {
          EditCustomer()
        }}
        className="text-white text-xl p-4 w-full bg-textGreen rounded-lg mt-4 hover:bg-opacity-80 transition-all"
      >
        تعديل
      </button>
    </form>
  );
};

export default AddClient;
