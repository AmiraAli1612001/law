import React from "react";

const ContractRow = ({
  data: { id, date, title, firstParty, secondParty, status },
}) => {
  // console.log(data)
  // const cellStyles =;
  return (
    <div className="shadow">
      <div
        className={`[&>div]:flex-1 [&>div>p:nth-child(1)]:text-xs [&>div>p]:font-semibold flex flex-col lg:flex-row gap-1 issueRow shadow rounded-lg`}
      >
        <button
          className={`p-4 h-full flex items-center justify-center bg-[#FAF9F4] bg-textGreen cursor-pointer order-12 lg:order-none`}
          onClick={(e) => {
            // console.log(e.target.parentElement.parentElement);
            e.target.parentElement.nextElementSibling.classList.toggle(
              "issueInnerDetailsWrapper"
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none"
          >
            <rect width="24" height="24" fill="none" />
            <path
              d="M12 6L12 18M12 18L17 13M12 18L7 13"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
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
      <div className="issueInnerDetailsWrapper overflow-hidden py-4">
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
      </div>
    </div>
  );
};

export default ContractRow;
