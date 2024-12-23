// import AddRecord from "@/components/shared/addRecord/AddRecord";
import AgenciesEle from "@/components/pages/agencies/AgenciesEle";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";

const Agencies = () => {
  
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LinkHeader to={"/statements"} title={"الوكالات"} />
        {/* <AddRecord recordType={"addIssue"} title={"اضافة قضية"} /> */}
      </div>
      <div>
        <AgenciesEle/>
      </div>
    </ScreenWrapper>
  );
};

export default Agencies;
