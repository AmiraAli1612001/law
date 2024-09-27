import AddRecord from "@/components/shared/addRecord/AddRecord";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";

const Issues = () => {
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LinkHeader title={"القضايا"} />
        <AddRecord recordType={1} title={"اضافة قضية"} />
      </div>
      <div>
        {/* <IssuesTable /> */}
      </div>
    </ScreenWrapper>
  );
};

export default Issues;
