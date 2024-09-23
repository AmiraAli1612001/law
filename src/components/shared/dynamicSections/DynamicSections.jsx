import React, { useRef, useState } from "react";

const DynamicSections = () => {
  const currentNumber = useRef(0);
  const [sections, setSections] = useState([
    { id: 0, value: "mohammed ahmed mahmoud" },
  ]);
  function addSection() {
    setSections([...sections, { id: currentNumber.current + 1, value: "" }]);
    currentNumber.current++;
  }
  function setSectionData(id, data) {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, value: data } : section
      )
    );
  }
  function removeSection(section) {
    setSections(sections.filter((p) => p.id !== section.id));
  }
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">البنود</h3>
      {sections.map((section, index) => (
        <div key={index} className="flex justify-between items-center ">
          <div className="flex-1">
            <h4>
              {title} <span>{index + 1}</span>
            </h4>
            <div className="flex rounded  overflow-hidden">
              {index === sections.length - 1 && (
                <button
                  onClick={addSection}
                  className="bg-textGreen text-white p-2 h-auto font-medium"
                >
                  اضافة <br /> بند
                </button>
              )}
              <div className="flex-1 h-auto [&>div]:rounded-t flex min-h-[100px] flex-col">
                {/* <Comp
                  title={title}
                  textarea={{ value: section.value, onChange: setSectionData }}
                /> */}
                <input type="text" placeholder={`عنوان ${title}`} />
                <textarea
                  value={section.value}
                  onChange={(e) => setSectionData(section.id, e.target.value)}
                  className="w-full  min-h-[100px]"
                  name=""
                  placeholder={`محتوى ${title}`}
                  id=""
                ></textarea>
              </div>
              {index == sections.length - 1 && sections.length > 1 && (
                <button
                  onClick={() => removeSection(section)}
                  className="bg-red-500 text-white p-2 h-auto font-medium"
                >
                  حذف
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicSections;
