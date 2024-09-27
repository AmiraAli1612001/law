import ContractDetails from "@/components/pages/contracts/contractDetails/ContractDetails";
import "./issue.css";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import contractsData from "@/fakeData/contractsData.json";

const Issue = ({ params: { token } }) => {
  const contractData = contractsData.find((issue) => issue.id == token);
  const { title, date, status } = contractData;
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <LinkHeader to={`/issues/${token}`} title={`ملف القضية رقم ${token}`} />
      <div className="flex flex-col gap-4">
        {/*start  */}
        <div
          className={`bg-bgGreen font-medium flex gap-6 p-4 items-center issue-details-header rounded-lg relative`}
        >
          <div className="row-data-content">
            <p className="">{title}</p>
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
        <ContractDetails id={token} contractData={contractData} />
        {/*end  */}
      </div>
    </ScreenWrapper>
  );
};

export default Issue;
