import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { resetPopups } from "@/globalState/Features/popupsSlice";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";

const EmployeeContract = () => {
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
      className="flex flex-col gap-4"
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
        {/* idNumber end date ! */}
        <div className="simple-input">
          <label htmlFor="">تاريخ انتهاء الهوية</label>
          <input
            type="date"
            name=""
            id="idNumberEndDate"
            {...register("idNumberEndDate", {
              required: "يجب ادخال تاريخ انتهاء الهوية",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.idNumberEndDate?.message}</p>
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
        {/* passport end date !*/}
        <div className="simple-input">
          <label htmlFor="">تاريخ انتهاء الجواز</label>
          <input
            type="date"
            name=""
            id="passportEndDate"
            {...register("passportEndDate", {
              required: "يجب ادخال تاريخ انتهاء الجواز",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.passportEndDate?.message}</p>
        </div>
        {/* social status !*/}
        <div className="simple-input">
          <label htmlFor="">الحالة الاجتماعية</label>
          <select
            type="text"
            name=""
            id="socialStatus"
            {...register("socialStatus", {
              required: "يجب اختيار الحالة الاجتماعية",
            })}
            placeholder=""
          >
            <option value="single">اعزب\عزباء</option>
            <option value="married">متزوج\ة</option>
            <option value="divorced">مطلق\ة</option>
          </select>
          <p className="input-error">{errors.socialStatus?.message}</p>
        </div>
        {/* drivingLicence !*/}
        <div className="simple-input">
          <label htmlFor="">رخصة القيادة</label>
          <select
            type="checkbox"
            name=""
            id="drivingLicence"
            {...register("drivingLicence", {
              required: "هل تم الحصول على رخصة القيادة",
            })}
            placeholder=""
          >
            <option value="no">لا</option>
            <option value="yes">نعم</option>
          </select>
          <p className="input-error">{errors.drivingLicence?.message}</p>
        </div>
        {/* drivingLicence end date !*/}
        <div className="simple-input">
          <label htmlFor="">تاريخ انتهاء رخصة القيادة</label>
          <input
            type="date"
            name=""
            id="drivingLicenceEndDate"
            {...register("drivingLicenceEndDate", {
              required: "يجب ادخال تاريخ انتهاء رخصة القيادة",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.drivingLicenceEndDate?.message}</p>
        </div>
        {/* lawyerLicence !*/}
        <div className="simple-input">
          <label htmlFor="">رخصة المحاماة</label>
          <select
            type="checkbox"
            name=""
            id="lawyerLicence"
            {...register("lawyerLicence", {
              required: "هل تم الحصول على رخصة المحاماة",
            })}
            placeholder=""
          >
            <option value="no">لا</option>
            <option value="yes">نعم</option>
          </select>
          <p className="input-error">{errors.lawyerLicence?.message}</p>
        </div>
        {/* lawyerLicence end date !*/}
        <div className="simple-input">
          <label htmlFor="">تاريخ انتهاء رخصة المحاماة</label>
          <input
            type="date"
            name=""
            id="lawyerLicenceEndDate"
            {...register("lawyerLicenceEndDate", {
              required: "يجب ادخال تاريخ انتهاء رخصة المحاماة",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.lawyerLicenceEndDate?.message}</p>
        </div>
        {/* workPlace !*/}
        <div className="simple-input">
          <label htmlFor="">موقع العمل</label>
          <input
            type="text"
            name=""
            id="workPlace"
            {...register("workPlace", {
              required: "يجب إدخال موقع العمل",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.workPlace?.message}</p>
        </div>
        {/* department !*/}
        <div className="simple-input">
          <label htmlFor="">القسم</label>
          <input
            type="text"
            name=""
            id="department"
            {...register("department", {
              required: "يجب إدخال القسم",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.department?.message}</p>
        </div>
        {/* residenceJob !*/}
        <div className="simple-input">
          <label htmlFor="">المهنة في الإقامة</label>
          <input
            type="text"
            name=""
            id="residenceJob"
            {...register("residenceJob", {
              required: "يجب إدخال المهنة في الإقامة",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.residenceJob?.message}</p>
        </div>
        {/* medicalInsurance !*/}
        <div className="simple-input">
          <label htmlFor="">التأمين الطبي</label>
          <input
            type="text"
            name=""
            id="medicalInsurance"
            {...register("medicalInsurance", {
              required: "يجب إدخال تفاصيل التأمين الطبي",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.medicalInsurance?.message}</p>
        </div>
        {/* medicalInsuranceEndDate !*/}
        <div className="simple-input">
          <label htmlFor="">تاريخ انتهاء التأمين الطبي</label>
          <input
            type="text"
            name=""
            id="medicalInsuranceEndDate"
            {...register("medicalInsuranceEndDate", {
              required: "يجب إدخال تاريخ انتهاء التأمين الطبي",
            })}
            placeholder=""
          />
          <p className="input-error">
            {errors.medicalInsuranceEndDate?.message}
          </p>
        </div>
        {/* employeeStatus !*/}
        <div className="simple-input">
          <label htmlFor="">حالة الموظف</label>
          <select
            type="text"
            name=""
            id="employeeStatus"
            {...register("employeeStatus", {
              required: "يجب إدخال حالة الموظف",
            })}
            placeholder=""
          >
            <option value="">علي راس العمل</option>
            <option value="">إجازة</option>
            <option value="">إنهاء خدمات</option>
            <option value="">متدرب</option>
          </select>
          <p className="input-error">{errors.employeeStatus?.message}</p>
        </div>
      </div>
      <hr />
      {/* experience !*/}
      <div className="simple-input !min-w-full flex-1 flex flex-col">
        <label htmlFor="" className="!text-2xl">
          الخبرة السابقة
        </label>
        <textarea
          type="text"
          name=""
          id="experience"
          {...register("experience", {
            required: "يجب إدخال الخبرة السابقة",
          })}
          placeholder=""
          className="flex-1"
        ></textarea>
        <p className="input-error">{errors.experience?.message}</p>
      </div>
      <hr />
      {/* تفاصيل عقد الموظف !*/}
      <h3 className="small-inputs-title !min-w-full font-bold text-[#333] text-2xl p-2 mb-6">
        تفاصيل عقد الموظف
      </h3>
      <div className="small-inputs">
        {/* الراتب الأساسي!*/}
        <div className="simple-input">
          <label htmlFor="">الراتب الأساسي</label>
          <input
            type="text"
            name=""
            id="salary"
            {...register("salary", {
              required: "يجب إدخال الراتب الأساسي",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.salary?.message}</p>
        </div>
        {/* بدل السكن !*/}
        <div className="simple-input">
          <label htmlFor="">بدل السكن</label>
          <input
            type="text"
            name=""
            id="housingExchange"
            {...register("housingExchange", {
              required: "يجب إدخال بدل السكن",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.housingExchange?.message}</p>
        </div>
        {/* بدل النقل !*/}
        <div className="simple-input">
          <label htmlFor="">بدل النقل</label>
          <input
            type="text"
            name=""
            id="transportExchange"
            {...register("transportExchange", {
              required: "يجب إدخال بدل النقل",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.transportExchange?.message}</p>
        </div>
        {/* بدل الاتصال !*/}
        <div className="simple-input">
          <label htmlFor="">بدل الاتصال</label>
          <input
            type="text"
            name=""
            id="contactExchange"
            {...register("contactExchange", {
              required: "يجب إدخال بدل الاتصال",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.contactExchange?.message}</p>
        </div>
        {/* الحساب البنكي */}
        <div className="simple-input">
          <label htmlFor="">الحساب البنكي</label>
          <input
            type="text"
            name=""
            id="bankAccount"
            {...register("bankAccount", {
              required: "يجب إدخال بيانات الحساب البنكي",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.bankAccount?.message}</p>
        </div>
        {/* بدلات أخرى */}
        <div className="simple-input">
          <label htmlFor="">بدلات أخرى</label>
          <input
            type="text"
            name=""
            id="otherExchanges"
            {...register("otherExchanges", {
              required: "يجب إدخال بدلات أخرى",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.otherExchanges?.message}</p>
        </div>
        {/* مرفقات العقد */}
        <div className="simple-input">
          <label htmlFor="">مرفقات العقد</label>
          <input
            type="file"
            name=""
            id="contractAttachments"
            {...register("contractAttachments", {
              // required: "يجب إدخال مرفقات العقد",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.contractAttachments?.message}</p>
        </div>
      </div>
      <hr />
      {/* مباشرة الموظف!*/}
      <h3 className="small-inputs-title text-[#333] font-bold !min-w-full text-2xl p-2 mb-6">
        تفاصيل مباشرة الموظف
      </h3>
      <div className="small-inputs">
        {/* تاريخ المباشرة!*/}
        <div className="simple-input">
          <label htmlFor="">تاريخ المباشرة</label>
          <input
            type="text"
            name=""
            id="contractDate"
            {...register("contractDate", {
              required: "يجب إدخال تاريخ المباشرة",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.contractDate?.message}</p>
        </div>
        {/* حالة الموظف !*/}
        <div className="simple-input">
          <label htmlFor="">حالة الموظف</label>
          <input
            type="text"
            name=""
            id="statusAfterContract"
            {...register("statusAfterContract", {
              required: "يجب إدخال حالة الموظف",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.statusAfterContract?.message}</p>
        </div>
        {/* العودة من الإجازة !*/}
        <div className="simple-input">
          <label htmlFor="">تسجيل العودة من الإجازة</label>
          <select
            type="text"
            name=""
            id="transportExchange"
            {...register("transportExchange", {
              // required: "يجب إدخال العودة من الإجازة",
            })}
            placeholder=""
          >
            <option value="true">نعم</option>
            <option value="false">لا</option>
          </select>
          <p className="input-error">{errors.transportExchange?.message}</p>
        </div>
      </div>
      <hr />
      {/* إنهاء خدمات الموظف */}
      <div className="simple-input !min-w-full flex-1 flex flex-col !gap-0">
        {/* العودة من الإجازة !*/}
        <div className="simple-input">
          <label htmlFor="">إنهاء خدمات الموظف</label>
          <div className="flex gap-4">
            <data value="">
              <select
                type="text"
                name=""
                id="endContract"
                {...register("endContract", {
                  // required: "يجب إدخال العودة من الإجازة",
                })}
                placeholder=""
              >
                {/* استقالة/فصل بموجب مادة 80/انتهاء عقد/إنهاء عقد برضا الطرفين */}
                <option value="true">استقالة</option>
                <option value="true">انتهاء عقد</option>
                <option value="false">فصل بموجب مادة 80</option>
                <option value="false">انهاء عقد برضا الطرفين</option>
              </select>
              <p className="input-error">{errors.endContract?.message}</p>
            </data>
            <div className="">
              <button
                onClick={handleKick}
                type="button"
                className="text-white py-2 px-6 h-full bg-mainRed font-bold rounded-lg"
              >
                تأكيد
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* extraInfo !*/}
      <div className="simple-input !min-w-full flex-1 flex flex-col">
        <label htmlFor="">معلومات اضافية</label>
        <textarea
          type="text"
          name=""
          id="extraInfo"
          {...register("extraInfo", {
            // required: "يجب إدخال الاسم الرباعي بالعربي",
          })}
          placeholder=""
          className="flex-1"
        ></textarea>
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

export default EmployeeContract;
