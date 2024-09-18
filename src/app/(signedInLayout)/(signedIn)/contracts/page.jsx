import ContractsTable from "@/components/contracts/ContractsTable";
import AddRecord from "@/components/shared/addRecord/AddRecord";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";

const Contracts = () => {
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LinkHeader title={"العقود"} />
        <AddRecord recordType={2} title={"اضافة عقد"} />
      </div>
      <div>
        <ContractsTable />
      </div>
    </ScreenWrapper>
  );
};

export default Contracts;
