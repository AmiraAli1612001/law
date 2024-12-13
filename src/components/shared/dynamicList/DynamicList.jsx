import React, { useRef, useState } from "react";
import HRData from "@/fakeData/HRData.json";
import { useDispatch } from "react-redux";
import {
  toggleAddRecordPopup,
  toggleEditEmployee,
} from "@/globalState/Features/popupsSlice";
import PersonSelector from "@/components/shared/personSelector/PersonSelector";
import ListItem from "./ListItem";

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
