import React from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
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

    console.log(formData);
    // const result = await fetchRegisterUser({
    //   ...formData,
    // });

    // dispatch(closeLoader());
  }
  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitSignUp)}
      action=""
      noValidate
      id="addIssueRecord"
    >
      <div className="small-inputs">
        {/* name arabic ! */}
        <div className="input">
          <label htmlFor="">الاسم</label>
          <input
            type="text"
            name=""
            id="arabicName"
            {...register("arabicName", {
              required: "يجب كتابة الاسم الرباعي",

              validate: (value) => {
                console.log(value.split(" ").length);
                return value.trim().split(" ").length > 3 || "يجب كتابة الاسم الرباعي";
              },
            })}
            placeholder=""
          />
          <p className="input-error">{errors.arabicName?.message}</p>
        </div>
        {/* phone ! */}
        <div className="input">
          <label htmlFor="">رقم الهاتف</label>
          <input
            type="text"
            name=""
            id="phone"
            {...register("phone", {
              required: "يجب كتابة رقم الهاتف",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.phone?.message}</p>
        </div>
        {/* idNumber ! */}
        <div className="input">
          <label htmlFor="">رقم الهوية</label>
          <input
            type="text"
            name=""
            id="idNumber"
            {...register("idNumber", {
              required: "يجب كتابة رقم الهوية",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.idNumber?.message}</p>
        </div>
        {/* hiringDate !*/}
        <div className="input">
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
        {/* jobTitle !*/}
        <div className="input">
          <label htmlFor="">الوظيفة</label>
          <input
            type="text"
            name=""
            id="jobTitle"
            {...register("jobTitle", {
              required: "يجب كتابة نوع الوظيفة",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.jobTitle?.message}</p>
        </div>
        {/* salary !*/}
        <div className="input">
          <label htmlFor="">الراتب</label>
          <input
            type="text"
            name=""
            id="salary"
            {...register("salary", {
              required: "يجب كتابة الراتب",
            })}
            placeholder=""
          />
          <p className="input-error">{errors.salary?.message}</p>
        </div>
      </div>
      {/* extraInfo !*/}
      <div className="input !min-w-full flex-1 flex flex-col">
        <label htmlFor="">معلومات اضافية</label>
        <textarea
          type="text"
          name=""
          id="extraInfo"
          {...register("extraInfo", {
            // required: "يجب كتابة الاسم الرباعي بالعربي",
          })}
          placeholder=""
          className="flex-1"
        ></textarea>
        {/* <div dir="ltr" className="flex-1">
          <div id="toolbar-container">
            <span class="ql-formats">
              <select class="ql-font"></select>
              <select class="ql-size"></select>
            </span>
            <span class="ql-formats">
              <button class="ql-bold"></button>
              <button class="ql-italic"></button>
              <button class="ql-underline"></button>
              <button class="ql-strike"></button>
            </span>
            <span class="ql-formats">
              <select class="ql-color"></select>
              <select class="ql-background"></select>
            </span>
            <span class="ql-formats">
              <button class="ql-script" value="sub"></button>
              <button class="ql-script" value="super"></button>
            </span>
            <span class="ql-formats">
              <button class="ql-header" value="1"></button>
              <button class="ql-header" value="2"></button>
              <button class="ql-blockquote"></button>
              <button class="ql-code-block"></button>
            </span>
            <span class="ql-formats">
              <button class="ql-list" value="ordered"></button>
              <button class="ql-list" value="bullet"></button>
              <button class="ql-indent" value="-1"></button>
              <button class="ql-indent" value="+1"></button>
            </span>
            <span class="ql-formats">
              <button class="ql-direction" value="rtl"></button>
              <select class="ql-align"></select>
            </span>
            <span class="ql-formats">
              <button class="ql-link"></button>
              <button class="ql-image"></button>
              <button class="ql-video"></button>
            </span>
            <span class="ql-formats">
              <button class="ql-clean"></button>
            </span>
          </div>
          <ReactQuill
            modules={{ toolbar: "#toolbar-container" }}
            theme="snow"
          />
        </div> */}
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
