// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { resetPopups } from "@/globalState/Features/popupsSlice";
// // const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// // import "react-quill/dist/quill.snow.css";

// const AddClient = () => {
//   const signUpForm = useForm();
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState,
//     setError,
//     reset,
//     trigger,
//   } = signUpForm;
//   let { errors, isSubmitted } = formState;
//   const dispatch = useDispatch();
//   async function handleSubmitSignUp(formData, e) {
//     // setGeneralError("");
//     // dispatch(openLoader("جاري التسجيل"));
//     toast.success("تم اضافة العميل بنجاح");
//     dispatch(resetPopups());
//     console.log(formData);
//     // const result = await fetchRegisterUser({
//     //   ...formData,
//     // });

//     // dispatch(closeLoader());
//   }
//   function handleKick() {
//     toast.error("تم انهاء خدمات العميل بنجاح");
//     dispatch(resetPopups());
//   }
//   return (
//     <form
//       method="POST"
//       onSubmit={handleSubmit(handleSubmitSignUp)}
//       action=""
//       noValidate
//       id="addIssueRecord"
//     >
//       {/* معلومات العميل */}

//       <div className="  main-section">
//         <h3 className="!min-w-full text-2xl py-2 mb-4 font-bold text-gray-800">
//           معلومات العميل
//         </h3>
//         <div className="small-inputs !grid-cols-3">
//           {/* name arabic ! */}
//           <div className="simple-input">
//             <label htmlFor="">الاسم الرباعي باللغة العربية</label>
//             <input
//               type="text"
//               name=""
//               id="arabicName"
//               {...register("arabicName", {
//                 required: "يجب إدخال الاسم الرباعي",

//                 validate: (value) => {
//                   console.log(value.split(" ").length);
//                   return (
//                     value.trim().split(" ").length > 3 ||
//                     "يجب إدخال الاسم الرباعي"
//                   );
//                 },
//               })}
//               placeholder=""
//             />
//             <p className="input-error">{errors.arabicName?.message}</p>
//           </div>

//           {/* email! */}
//           <div className="simple-input">
//             <label htmlFor="">البريد الالكتروني</label>
//             <input
//               type="email"
//               name=""
//               id="email"
//               {...register("email", {
//                 required: "يجب إدخال البريد الالكتروني",
//                 // validate: (value) => {
//                 //   console.log(value.split(" ").length);
//                 //   return (
//                 //     value.trim().split(" ").length > 3 ||
//                 //     "يجب إدخال البريد الالكتروني"
//                 //   );
//                 // },
//               })}
//               placeholder=""
//             />
//             <p className="input-error">{errors.email?.message}</p>
//           </div>
//           {/* phone ! */}
//           <div className="simple-input">
//             <label htmlFor="">رقم الهاتف</label>
//             <input
//               type="text"
//               name=""
//               id="phone"
//               {...register("phone", {
//                 required: "يجب إدخال رقم الهاتف",
//               })}
//               placeholder=""
//             />
//             <p className="input-error">{errors.phone?.message}</p>
//           </div>
//           {/* idNumber ! */}
//           <div className="simple-input">
//             <label htmlFor="">رقم الهوية</label>
//             <input
//               type="text"
//               name=""
//               id="idNumber"
//               {...register("idNumber", {
//                 required: "يجب إدخال رقم الهوية",
//               })}
//               placeholder=""
//             />
//             <p className="input-error">{errors.idNumber?.message}</p>
//           </div>
//           {/* idNumber end date ! */}
//           <div className="simple-input">
//             <label htmlFor="">تاريخ انتهاء الهوية</label>
//             <input
//               type="date"
//               name=""
//               id="idNumberEndDate"
//               {...register("idNumberEndDate", {
//                 required: "يجب ادخال تاريخ انتهاء الهوية",
//               })}
//               placeholder=""
//             />
//             <p className="input-error">{errors.idNumberEndDate?.message}</p>
//           </div>
//           {/* nationality !*/}
//           <div className="simple-input">
//             <label htmlFor="">الجنسية</label>
//             <input
//               type="text"
//               name=""
//               id="nationality"
//               {...register("nationality", {
//                 required: "يجب إدخال الجنسية",
//               })}
//               placeholder=""
//             />
//             <p className="input-error">{errors.nationality?.message}</p>
//           </div>
//           {/* gender !*/}
//           <div className="simple-input">
//             <label htmlFor="">الجنس</label>
//             <select
//               type="text"
//               name=""
//               id="gender"
//               {...register("gender", {
//                 required: "يجب اختيار الجنس",
//               })}
//               placeholder=""
//             >
//               <option value="male">ذكر</option>
//               <option value="female">انثى</option>
//             </select>
//             <p className="input-error">{errors.gender?.message}</p>
//           </div>
//           {/* social status !*/}
//           <div className="simple-input">
//             <label htmlFor="">الحالة الاجتماعية</label>
//             <select
//               type="text"
//               name=""
//               id="socialStatus"
//               {...register("socialStatus", {
//                 required: "يجب اختيار الحالة الاجتماعية",
//               })}
//               placeholder=""
//             >
//               <option value="single">اعزب\عزباء</option>
//               <option value="married">متزوج\ة</option>
//               <option value="divorced">مطلق\ة</option>
//             </select>
//             <p className="input-error">{errors.socialStatus?.message}</p>
//           </div>
//           {/* workPlace !*/}
//           <div className="simple-input">
//             <label htmlFor="">موقع العمل</label>
//             <input
//               type="text"
//               name=""
//               id="workPlace"
//               {...register("workPlace", {
//                 required: "يجب إدخال موقع العمل",
//               })}
//               placeholder=""
//             />
//             <p className="input-error">{errors.workPlace?.message}</p>
//           </div>
//           {/* residenceJob !*/}
//           <div className="simple-input">
//             <label htmlFor="">محل الإقامة</label>
//             <input
//               type="text"
//               name=""
//               id="residenceJob"
//               {...register("residenceJob", {
//                 required: "يجب محل الإقامة",
//               })}
//               placeholder=""
//             />
//             <p className="input-error">{errors.residenceJob?.message}</p>
//           </div>
//         </div>
//       </div>
//       {/* extraInfo !*/}
//       <div className="main-section simple-input !min-w-full flex-1 flex flex-col">
//         <label htmlFor="">معلومات اضافية</label>
//         <textarea
//           type="text"
//           name=""
//           id="extraInfo"
//           {...register("extraInfo", {
//             // required: "يجب إدخال الاسم الرباعي بالعربي",
//           })}
//           placeholder=""
//           className="flex-1"
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         className="text-white text-xl p-4 w-full bg-textGreen rounded-lg hover:bg-opacity-80 transition-all"
//       >
//         اضافة
//       </button>
//     </form>
//   );
// };

// export default AddClient;
