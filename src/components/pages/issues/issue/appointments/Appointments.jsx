import React from "react";

const Appointments = ({ defendant, prosecutor }) => {
  const sectionStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };
  return (
    <div className="flex flex-col gap-4">
      <section style={sectionStyles}>
        <h3>موعد انتهاء المدة الاعتراضية للاستئناف</h3>
        <table className="simple-table">
          <tbody>
            <tr>
              <td className="w-[200px]">
                <input
                  className="!w-full"
                  type="date"
                  defaultValue={"2024-10-10"}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
        اضائف
      </button>
      <section style={sectionStyles}>
        <h3>تسجيل التواريخ</h3>
        <table className="simple-table">
          <thead>
            <tr>
              <th>تاريخ النقد</th>
              <th>الاستئناف</th>
              <th>الاعتراض</th>
              <th>الحكم</th>
              <th>والانتهاء</th>
            </tr>
          </thead>
          <tbody>
            <tr className="[&>td>input]:!w-fit">
              <td>
                <input
                  className="!w-[150px]"
                  type="date"
                  defaultValue={"2024-10-10"}
                />
              </td>
              <td>
                <input type="text" defaultValue={"علي عبدالله"} />
              </td>
              <td>
                <input type="text" defaultValue={"يزيد عبدالله الحربي"} />
              </td>
              <td>
                <input type="text" defaultValue={"غير محدد"} />
              </td>
              <td>
                <input type="text" defaultValue={"08:45:00"} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <button className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm text-center">
        اضائف
      </button>
    </div>
  );
};

export default Appointments;
