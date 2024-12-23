"use client";
// import IssueDetails from "@/components/pages/issues/issue/IssueDetails";
import "./issue.css";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
// import issuesData from "@/fakeData/issuesData.json";
import EmployeeDetails from "@/components/pages/hr/employeeDetails/EmployeeDetails";
import { toast } from "react-toastify";
import deleteRecordAPI from "@/helperFunctions/apiHelpers/delete";

const Employee = ({ params: { token } }) => {
  // const issueData = issuesData.find((issue) => issue.id == token);
  // const { type, date, status } = issueData;
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <LinkHeader
        title={"ادارة الموارد البشرية"}
        to={`/hr`}
        to2={`/hr/${token}`}
        title2={`الموظف رقم ${token}`}
      />
      <div className="flex flex-col gap-4">
        {/*start  */}
        <div
          className={`bg-bgGreen font-medium flex gap-6 p-4 items-center issue-details-header rounded-lg relative`}
        >
          <div className="row-data-content">
            <p className="">محمداحمد</p>
          </div>
          -
          <div className="row-data-content">
            <p className="">محامي</p>
          </div>
          -
          <div className="row-data-content flex gap-2 items-center">
            <span className="text-mainRed font-bold">7</span>
            <span>من</span>
            <span className="text-textGreen font-bold">21 يوم أجازة</span>
          </div>
          <div className="row-data-content ms-auto">
            <button
              className="bg-red-500 bg-opacity-90  hover:bg-opacity-55 transition-all text-white px-4 py-2 rounded text-sm"
              // onClick={() => dispatch(toggleAddRecordPopup("record"))}
              onClick={() => {
                if (token == 1) {
                  toast.error("cannot delete admin (id = 1)");
                  return;
                }
                deleteRecordAPI(`/api/Employee/${token}`)
              }}
            >
              حذف
            </button>
          </div>
        </div>
        
        <EmployeeDetails id={token} issueData={[]} />
        {/*end  */}
      </div>
    </ScreenWrapper>
  );
};

export default Employee;
