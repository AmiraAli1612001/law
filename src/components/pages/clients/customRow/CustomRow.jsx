"use client"
import Link from "next/link";
import React from "react";
import "./contractRow.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setContract } from "@/globalState/Features/tempDataSlice";
import { toggleAddRecordPopup, toggleEditEmployee } from "@/globalState/Features/popupsSlice";
const CustomRow = ({ data, swipe }) => {
  const { id, fullNameArabic, phoneNumber, email, addDate } = data;
  /**
    *  {
       "id": 1,
       "fullNameArabic": "string 1",
       "email": "string",
       "phoneNumber": "string",
       "nationalId": "string",
       "nationalIdExpiryDate": "2024-12-07T06:39:28.504",
       "nationality": "string",
       "gender": "string",
       "maritalStatus": "string",
       "workLocation": "string",
       "residence": "string",
       "additionalInfo": "string",
       "addDate": "2024-12-07T06:39:31.8742059"
     }
    */
  const router = useRouter()
  const dispatch = useDispatch()
  return (
    <div className="">
      <div
        className={`bg-bgGreen flex gap-2 p-4 items-center contract-row custom-row rounded-lg relative`}
      >
        <div className={`w-[10%]`}>
          <p>الرقم</p>
          <p className="text-2xl row-data-content">{id}</p>
        </div>
        <div>
          <p>الاسم</p>
          <p className="row-data-content">{fullNameArabic}</p>
        </div>
        <div>
          <p>رقم الهاتف</p>
          <p className="row-data-content">{phoneNumber}</p>
        </div>
        <div>
          <p>البريد الالكتروني</p>
          <p className="row-data-content">{email}</p>
        </div>
        <div>
          <p>تاريخ الاضافة</p>
          <p className="row-data-content">{new Date(addDate.slice(0, 10))}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Link
            className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all text-white px-4 py-2 rounded text-sm"
            onClick={(e) => {
              e.preventDefault()
              dispatch(setContract(data))
              router.push(`/clients/${id}`)
            }}
            href={`/clients/${id}`}
          // onClick={() => swipe(1)}
          >
            التفاصيل
          </Link>
          <button
            className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all text-white px-4 py-2 rounded text-sm"
            onClick={() => dispatch(toggleAddRecordPopup("addClient"))}
          >
            تعديل
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="shadow">
      <div
        className={`[&>div]:flex-1 [&>div>p:nth-child(1)]:text-xs [&>div>p]:font-semibold flex flex-col lg:flex-row gap-1 issueRow shadow rounded-lg`}
      >
        <div className={` bg-[#FAF9F4]`}>
          <p>رقم العقد</p>
          <p className="text-2xl row-data-content">{id}</p>
        </div>
        <div>
          <p>تاريخ العقد</p>
          <p>{date}</p>
        </div>
        <div>
          <p>نوع العقد</p>
          <p className="row-data-content">{title}</p>
        </div>
        <div>
          <p>الطرف الاول</p>
          <p className="row-data-content">{firstParty}</p>
        </div>
        <div>
          <p>الطرف الثاني</p>
          <p className="row-data-content">{secondParty}</p>
        </div>
        <div>
          <p>الحالة</p>
          <p className="row-data-content">{status}</p>
        </div>
      </div>
      {/* <div className="issueInnerDetailsWrapper overflow-hidden py-4">
        <h4 className="text-textGreen font-medium text-2xl">اخر التحديثات</h4>
        <div className="flex gap-4">
          <div className="border-textGreen border [&>*]:p-4 rounded">
            <section className="!pb-0">
              <h3 className="text-textGreen font-medium text-lg">غير نهائي</h3>
            </section>
            <ul className="issueInnerDetails flex flex-col gap-1">
              <li>
                <p>رقك الصك</p>
                <p>10100110</p>
              </li>
              <li>
                <p>صفة الحكم</p>
                <p>حكم منهي للخصومة</p>
              </li>
            </ul>
            <section className="flex justify-between gap-4 border-t border-gray-400">
              <div className="flex items-center gap-1 text-xs">
                <p>تاريخ اصدار الحكم</p>
                <p>01/01/2022</p>
              </div>

              <h5 className="text-textGreen font-medium">الدرجة الاولي</h5>
            </section>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CustomRow;
