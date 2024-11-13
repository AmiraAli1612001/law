"use client";
import ContractDetails from "@/components/pages/contracts/contractDetails/ContractDetails";
import "./issue.css";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import contractsData from "@/fakeData/contractsData.json";
import { toggleAddRecordPopup, toggleEditEmployee } from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";

const Issue = ({ params: { token } }) => {
  const dispatch = useDispatch()
  const contractData = contractsData.find((issue) => issue.id == token);
  const { id, title, date, status } = contractData;
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <LinkHeader
        title={`العقود`}
        to={`/contracts`}
        title2={`ملف العقد رقم ${token}`}
        to2={`/contracts/${token}`}
      />
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
          <div className="row-data-content ms-auto">
            <button
              className="bg-mainRed bg-opacity-90 hover:bg-opacity-55 transition-all  text-white px-4 py-2 rounded text-sm"
              onClick={() => dispatch(toggleAddRecordPopup("record"))}
            >
              حذف
            </button>
          </div>
        </div>
        <ContractDetails id={token} contractData={contractData} />
        {/*end  */}
      </div>
    </ScreenWrapper>
  );
};

export default Issue;
