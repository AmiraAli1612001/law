import HRTable from "@/components/pages/hr/HRTable";
import AddRecord from "@/components/shared/addRecord/AddRecord";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";

const HR = () => {
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LinkHeader title={"ادارة الموارد البشرية"} />
        <AddRecord recordType={2} title={"اضافة موظف"} />
      </div>
      <div>
        <HRTable />
      </div>
    </ScreenWrapper>
  );
};

export default HR;
