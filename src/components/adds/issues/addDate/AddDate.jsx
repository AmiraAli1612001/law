"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { resetPopups } from "@/globalState/Features/popupsSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DynamicList from "@/components/shared/dynamicList/DynamicList";
import {
  setCurrentErrors,
  setCurrentForm,
} from "@/globalState/Features/formStateSlice";
import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import HRData from "@/fakeData/HRData.json";

const AddDate = () => {
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const currentForm = useSelector((store) => store.formState.currentForm);
  const {
    register,
    handleSubmit,
    control,
    formState,
    setError,
    // reset,
    trigger,
  } = signUpForm;
  let { errors, isSubmitted } = formState;
  async function handleSubmitSignUp(formData, e) {
    // setGeneralError("");
    // dispatch(openLoader("جاري التسجيل"));

    console.log(currentForm);
    // const result = await fetchRegisterUser({
    //   ...formData,
    // });

    // dispatch(closeLoader());
  }
  const sessionsFilterArr = [
    {
      name: "اسم العميل",
      value: "phone",
    },
    {
      name: "رقم العميل",
      value: "id",
    },
    {
      name: "هاتف العميل",
      value: "phone",
    },
  ];
  useEffect(() => {
    dispatch(setCurrentForm(register));
    dispatch(setCurrentErrors(errors));
  }, [register, errors]);
  return (

    //   <section style={sectionStyles}>
    //     <h3>تسجيل التواريخ</h3>
    //     <table className="simple-table">
    //       <thead>
    //         <tr className="[&>th]:!w-[20%]">
    //           <th>تاريخ النقد</th>
    //           <th>الاستئناف</th>
    //           <th>الاعتراض</th>
    //           <th>الحكم</th>
    //           <th>والانتهاء</th>
    //           <th></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr className="[&>td>input]:!w-fit [&>td>input]:!inline-block [&>td]:!w-[20%]">
    //           <td>
    //             <input
    //               className="!w-fit"
    //               type="date"
    //               defaultValue={"2024-10-10"}
    //             />
    //           </td>
    //           <td>
    //             <input type="text" defaultValue={"علي عبدالله"} />
    //           </td>
    //           <td>
    //             <input type="text" defaultValue={"يزيد عبدالله الحربي"} />
    //           </td>
    //           <td>
    //             <input type="text" defaultValue={"غير محدد"} />
    //           </td>
    //           <td>
    //             <input type="text" defaultValue={"08:45:00"} />
    //           </td>
    //           <td>
    //             <button
    //               onClick={() => toast.success("تمت الاضافة بنجاح")}
    //               className="bg-textGreen block w-full bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center"
    //             >
    //               اضافة
    //             </button>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </section>
    // </div>
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitSignUp)}
      action=""
      noValidate
      id="addIssueRecord"
      className="py-4"
    >
      <div className="small-inputs main-section ">
        {/* reason ! */}
        <div className="simple-input">
          <label htmlFor="">نوع الموعد</label>
          <select
            type="text"
            name=""
            id="contractName"
            {...register("contractName", {
              required: "يجب اختيار نوع الموعد",
            })}
            placeholder=""
          >
            <option className="hidden" value="">
              اختر نوع الموعد
            </option>
            <option value="قرار موظف">موعد انتهاء المدة الاعتراضية للاستئناف</option>
            <option value="قرار عميل">مشاورة</option>
          </select>
          <p className="input-error">{errors.contractName?.message}</p>
        </div>
        {/* call category ! */}
        <div className="simple-input">
          <label htmlFor="">النوع</label>
          <select
            type="text"
            name=""
            id="issueCallCategory"
            // {...register("contractName", {
            //   required: "يجب اختيار نوع الموعد",
            // })}
            placeholder=""
          >
            <option value="" className="hidden">
              اختر تصنيف الموعد
            </option>
            <option value="وكيل">اعتراض</option>
            <option value="عميل">استئناف</option>
            <option value="عميل">نقض</option>
            <option value="عميل">التماس</option>
            <option value="عميل">تقديم مذكرات</option>
          </select>

          <p className="input-error">{errors.contractName?.message}</p>
        </div>
        {/* Time ! */}
        <div className="simple-input">
          <label htmlFor="">الوقت</label>
          <input
            type="time"
            name=""
            id="issueCallTime"
            // {...register("contractName", {
            //   required: "يجب اختيار نوع الموعد",
            // })}
            // placeholder="ادخل العنوان"
          />

          <p className="input-error">{errors.contractName?.message}</p>
        </div>
        {/* duration ! */}
        {/* <div className="simple-input">
          <label htmlFor="">المدة</label>
          <input
            type="text"
            name=""
            id="issueCallDuration"
            
          />

        </div> */}
        
        {/* contract Date ! */}
        <div className="simple-input">
          <label htmlFor="">تاريخ الموعد</label>
          <input
            type="date"
            name=""
            defaultValue={new Date().toISOString().split("T")[0]}
            id="contractDate"
            {...register("contractDate", {
              // required: "يجب كتابة الاسم الرباعي بالعربي",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.contractDate?.message}</p>
        </div>
        {/* issue attachment ! */}
        {/* <div className="simple-input">
          <label htmlFor="">الارتباط بالقضية</label>
          <select
            type="text"
            name=""
            id="issueCallCategory"
            // {...register("contractName", {
            //   required: "يجب اختيار نوع الموعد",
            // })}
            placeholder=""
          >
            <option value="">مرتبطة</option>
            <option value="">غير مرتبطة</option>
          </select>

          <p className="input-error">{errors.contractName?.message}</p>
        </div> */}
      </div>


      {/* employees */}
      <div className="input  main-section">
        {/* <Parties /> */}
        <DynamicList title={"الموظف المستقبل"} btnTitle={"اضافة موظف"} recordType={"addEmployee"}>
          <PersonSelector />
        </DynamicList>
      </div>
      {/* name arabic ! arabicName*/}
      <div className="simple-input !min-w-full flex-1 main-section">
        <h3 className="text-lg font-semibold">التفاصيل</h3>

        <textarea className="text-lg" name="" id=""></textarea>
        <p className="input-error">{errors.arabicName?.message}</p>
      </div>

      {/* clauses */}
      {/* <div className="input !min-w-full">
        <DynamicList
          title={"البنود"}

        >
          <textarea name="" id=""></textarea>
        </DynamicList>
      </div> */}
      <button className="text-white text-xl mt-4 p-4 w-full bg-textGreen rounded">
        اضافة
      </button>
    </form>
  );
};

export default AddDate;
