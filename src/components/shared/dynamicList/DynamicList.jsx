import React, { useRef, useState } from "react";
import HRData from "@/fakeData/HRData.json";
import { useDispatch } from "react-redux";
import {
  toggleAddRecordPopup,
  toggleEditEmployee,
} from "@/globalState/Features/popupsSlice";
import PersonSelector from "@/components/shared/personSelector/PersonSelector";
const ListItem = ({
  children,
  last = false,
  removeListItem,
  addListItem,
  index,
  item,
  length,
  multi,
  recordType,
  btnTitle,
}) => {
  const [nameInput, setNameInput] = useState("");
  const dispatch = useDispatch();

  function handleAddPerson() {
    dispatch(toggleAddRecordPopup(recordType));
  }

  return (
    <div className="flex justify-between items-center ">
      <div className="flex-1 simple-input">
        <div className="flex  overflow-hidden gap-2">
          <div className="bg-contract rounded p-2 text-lg font-bold flex justify-center items-center">
            <span>{index + 1}</span>
          </div>
          {children}
          {/* add btn */}
          {last && btnTitle && recordType && (
            <button
              onClick={handleAddPerson}
              type="button"
              className="bg-textGreen hover:opacity-80 text-white transition-all  rounded py-2 px-4 font-medium whitespace-nowrap"
            >
              {btnTitle}
            </button>
          )}
          {/* add item btn */}
          {multi && last && (
            <button
              type="button"
              onClick={addListItem}
              className="bg-textGreen hover:opacity-80 text-white transition-all  rounded p-2 font-medium whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                ></path>
              </svg>
            </button>
          )}
          {(index > 0 || length > 1) && (
            <button
              type="button"
              onClick={() => removeListItem(item)}
              className="bg-red-500 text-white rounded aspect-square w-max p-2 h-auto font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M19 12.998H5v-2h14z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
const DynamicList = ({
  children,
  multi = true,
  add = false,
  title,
  recordType,
  btnTitle,
  className,
}) => {
  const currentNumber = useRef(0);
  const [nameInput, setNameInput] = useState("");
  const [listItems, setListItems] = useState([
    { id: 0, value: "mohammed ahmed mahmoud" },
  ]);
  function addListItem() {
    setListItems([...listItems, { id: ++currentNumber.current, value: "" }]);
    // currentNumber.current++;
  }
  function setListItemData(id, data) {
    setListItems(
      listItems.map((item) =>
        item.id === id ? { ...item, value: data } : item
      )
    );
  }
  function removeListItem(item) {
    setListItems(listItems.filter((p) => p.id !== item.id));
  }
  return (
    <div className={`${className ?? " "} flex flex-col gap-2`}>
      <h3 className="text-lg font-semibold">{title || ""}</h3>
      {listItems.map((item, index) => (
        <ListItem
          length={listItems.length}
          key={index}
          add={add}
          recordType={recordType}
          btnTitle={btnTitle}
          multi={multi}
          item={item}
          last={index == listItems.length - 1}
          removeListItem={removeListItem}
          addListItem={addListItem}
          index={index}
        >
          {children}
        </ListItem>
      ))}
    </div>
  );
};

export default DynamicList;
