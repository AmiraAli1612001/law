import IssueDetails from "@/components/pages/issues/issue/IssueDetails";
import "./session.css";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import issuesData from "@/fakeData/issuesData.json";
import SessionDetails from "@/components/pages/issues/issue/sessions/sessionDetails/SessionDetails";

const Session = ({ params: { token, sessionToken } }) => {
  const issueData = issuesData.find((issue) => issue.id == token);
  const { type, date, status } = issueData;
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <LinkHeader
        title={`ملف القضية رقم ${token}`}
        to={`/issues/${token}`}
        title2={`ملف الجلسة رقم ${sessionToken}`}
        to2={`/issues/${token}/sessions/${sessionToken}`}
      />
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
        </div>
        <SessionDetails id={token} sessionData={issueData} />
        {/*end  */}
      </div>
    </ScreenWrapper>
  );
};

export default Session;
