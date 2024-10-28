import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { resetPopups } from "@/globalState/Features/popupsSlice";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";

const AddEmployee = () => {
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
  async function handleSubmitSignUp(formData, e) {
    // setGeneralError("");
    // dispatch(openLoader("جاري التسجيل"));
    toast.success("تم اضافة الموظف بنجاح");
    dispatch(resetPopups());
    console.log(formData);
    // const result = await fetchRegisterUser({
    //   ...formData,
    // });

    // dispatch(closeLoader());
  }
  function handleKick() {
    toast.error("تم انهاء خدمات الموظف بنجاح");
    dispatch(resetPopups());
  }
  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitSignUp)}
      action=""
      noValidate
      id="addIssueRecord"
    >
      {/* معلومات الموظف */}
      <h3 className="small-inputs-title !min-w-full text-2xl p-2 mb-6">
        معلومات الموظف
      </h3>
      <div className="small-inputs">
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
          <input
            type="text"
            name=""
            id="jobTitle"
            {...register("jobTitle", {
              required: "يجب إدخال نوع الوظيفة",
            })}
            placeholder=""
          />
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
          >
            <option value="male">ذكر</option>
            <option value="female">انثى</option>
          </select>
          <p className="input-error">{errors.gender?.message}</p>
        </div>
      </div>
      <button
        type="submit"
        className="text-white text-xl p-4 w-full bg-textGreen"
      >
        اضافة
      </button>
    </form>
  );
};

export default AddEmployee;
