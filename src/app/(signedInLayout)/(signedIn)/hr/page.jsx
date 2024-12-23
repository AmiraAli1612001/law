import HRTable from "@/components/pages/hr/HRTable";
import HRWrapper from "@/components/pages/hr/HRWrapper";
import AddRecord from "@/components/shared/addRecord/AddRecord";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";

const HR = () => {
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LinkHeader title={"ادارة الموارد البشرية"} />
        {/* <AddRecord recordType={"addEmployee"} title={"اضافة موظف"} /> */}
      </div>
      <div>
        <HRWrapper />
      </div>
    </ScreenWrapper>
  );
};

export default HR;
