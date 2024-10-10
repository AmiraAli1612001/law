"use client"
import IssueDetails from "@/components/pages/issues/issue/IssueDetails";
import "./issue.css";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import issuesData from "@/fakeData/issuesData.json";
import { toast } from "react-toastify";

const Issue = ({ params: { token } }) => {
  const issueData = issuesData.find((issue) => issue.id == token);
  const { type, date, status } = issueData;

  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <LinkHeader to={`/issues/${token}`} title={`ملف القضية رقم ${token}`} />
      <div className="flex flex-col gap-4">
        {/*start  */}
        <div
          className={`bg-bgGreen font-medium flex gap-6 p-4 items-center issue-details-header rounded-lg relative`}
        >
          <div className="row-data-content">
            <p className="">{type}</p>
          </div>
          <div className="row-data-content">
            <p className="">{status}</p>
          </div>
          <div className="row-data-content">
            <p className="" dir="ltr">
              {date}
            </p>
          </div>
          <div className="row-data-content ms-auto">
            <button
              onClick={() => toast.success("تم الحفظ بنجاح")}
              className="bg-textGreen bg-opacity-90 hover:bg-opacity-55 transition-all text-white px-4 py-2 rounded text-sm"
            >
              حفظ
            </button>
          </div>
        </div>
        <IssueDetails id={token} issueData={issueData} />
        {/*end  */}
      </div>
    </ScreenWrapper>
  );
};

export default Issue;
