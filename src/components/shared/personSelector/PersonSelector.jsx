"use client";
import React, { useState } from "react";
import "./styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddRecordPopup } from "@/globalState/Features/popupsSlice";
import { toast } from "react-toastify";
const PersonSelector = ({
  defaultValue = "",
  last = false,
  data = [
    { id: 0, name: "mohammed ahmed mahmoud" },
    {
      id: 1,
      name: "mohammed ibrahim ahmed",
    },
    { id: 2, name: "mohammed ibrahim" },
    { id: 3, name: "ahmed ibrahim" },
    { id: 4, name: "ahmed mohammed" },
    { id: 5, name: "mohammed ahmed" },
    { id: 6, name: "mohammed abdallah" },
  ],
  // personName = "",
  // recordType,
  filterArr = [
    {
      name: "الاسم",
      value: "name",
    },
    {
      name: "الرقم",
      value: "id",
    },
    {
      name: "رقم الهاتف",
      value: "phone",
    },
  ],
}) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  //   const { currentForm: register, currentErrors } = useSelector(
  //     (store) => store.formState
  //   );
  let register = useSelector((store) => store.formState.currentForm);
  const errors = useSelector((store) => store.formState.currentErrors);
  // function handleAddPerson() {
  //   dispatch(toggleAddRecordPopup(recordType));
  // }
  // console.log(`select-${recordType}-${personName}`);
  // if (errors?.[`select-${recordType}-${personName}`]?.message.length > 0) {
  //   toast.error(errors[`select-${recordType}-${personName}`]?.message);
  // }
  if (typeof register != "function") {
    console.log(register);
    console.log("not fn");
    register = () => {};
  }
  return (
    <div className="w-full simple-input !flex-row person-selector">
      <select name="" id="" className="flex-1">
        <option value="" className="hidden">
          طريقة التحديد
        </option>
        {filterArr.map((filter, i) => (
          <option key={i} value={filter.value}>
            {filter.name}
          </option>
        ))}
      </select>
      {/* search input */}
      <input
        type="text"
        name=""
        id=""
        placeholder="ابحث هنا"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="!bg-white flex-1"
      />
      {/* results list */}
      <select
        name=""
        id=""
        className="max-h-[100px] text-textGreen flex-1"
        // {...register(`select-${recordType}-${personName}`, {
        //   required: "يجب ادخال البيانات",
        // })}
      >
        {inputValue.length == 0 && (
          <option value="" className="hidden text-black">
            قائمة البحث
          </option>
        )}
        {data
          .filter((e) =>
          {
            if(e.name){
              return e.name.toLowerCase().includes(inputValue.toLowerCase())
            }else{
              return e.toLowerCase().includes(inputValue.toLowerCase())
            }
          }
          )
          // .slice(0, 6)
          .map((client, i) => (
            <option className="text-textGreen" key={i} value={client?.id??i}>
              {client?.name??client}
            </option>
          ))}
      </select>
      {/* {last && (
        <button
          onClick={handleAddPerson}
          type="button"
          className="bg-textGreen hover:opacity-80 text-white transition-all  rounded py-2 px-4 font-medium whitespace-nowrap"
        >
          اضافة {personName}
        </button>
      )} */}
    </div>
  );
};

export default PersonSelector;
