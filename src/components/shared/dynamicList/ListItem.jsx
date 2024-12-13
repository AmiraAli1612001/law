import { toggleAddRecordPopup } from '@/globalState/Features/popupsSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

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
            {/* remove item */}
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

export default ListItem