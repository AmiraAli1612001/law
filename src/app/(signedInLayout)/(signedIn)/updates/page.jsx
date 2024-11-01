import ContractsTable from "@/components/pages/contracts/ContractsTable";
import ContractsWrapper from "@/components/pages/contracts/ContractsWrapper";
import UpdatesTable from "@/components/pages/updates/UpdatesTable";
import AddRecord from "@/components/shared/addRecord/AddRecord";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";

const Contracts = () => {
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LinkHeader title={"آخر التحديثات"} />
        {/* <AddRecord innerForm={true} recordType={"record"} title={"اضافة عقد"} /> */}
      </div>
      <div>
        <UpdatesTable />
      </div>
    </ScreenWrapper>
  );
};

export default Contracts;
