"use client";
import React, { useState } from "react";
import "./styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddRecordPopup } from "@/globalState/Features/popupsSlice";
import { toast } from "react-toastify";
const PersonSelector = ({
  last = false,
  data = [],
  personName = "",
  recordType,
  filterArr = [],
}) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  //   const { currentForm: register, currentErrors } = useSelector(
  //     (store) => store.formState
  //   );
  let register = useSelector((store) => store.formState.currentForm);
  const errors = useSelector((store) => store.formState.currentErrors);
  function handleAddPerson() {
    dispatch(toggleAddRecordPopup(recordType));
  }
  console.log(`select-${recordType}-${personName}`)
  if (errors?.[`select-${recordType}-${personName}`]?.message.length > 0) {
    toast.error(errors[`select-${recordType}-${personName}`]?.message);
  }
  if (typeof register != "function") {
    console.log(register)
    console.log("not fn")
    register = () => {};
  }
  return (
    <div className="w-full simple-input !flex-row person-selector">
      <select name="" id="">
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
      />
      {/* results list */}
      <select
        name=""
        id=""
        className="max-h-[100px]"
        {...register(`select-${recordType}-${personName}`, {
          required: "يجب ادخال البيانات",
        })}
      >
        <option value="" className="hidden">قائمة البحث</option>
        {data
          .filter((e) =>
            e.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .slice(0, 6)
          .map((client, i) => (
            <option key={i} value={client.id}>
              {client.name}
            </option>
          ))}
      </select>
      {last && (
        <button
          onClick={handleAddPerson}
          type="button"
          className="bg-textGreen hover:opacity-80 text-white transition-all  rounded py-2 px-4 font-medium whitespace-nowrap"
        >
         اضافة {personName} 
        </button>
      )}
    </div>
  );
};

export default PersonSelector;
