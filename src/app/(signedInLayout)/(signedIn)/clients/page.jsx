import ContractsTable from "@/components/pages/contracts/ContractsTable";
import ContractsWrapper from "@/components/pages/contracts/ContractsWrapper";
import AddRecord from "@/components/shared/addRecord/AddRecord";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";

const Clients = () => {
  // t
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LinkHeader title={"العملاء"} />
        <AddRecord innerForm={true} recordType={"addClient"} title={"اضافة عميل"} />
      </div>
      <div>
        <ContractsWrapper />
      </div>
    </ScreenWrapper>
  );
};

export default Clients;
