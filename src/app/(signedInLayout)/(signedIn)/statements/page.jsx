// import AddRecord from "@/components/shared/addRecord/AddRecord";
import StatementsEle from "@/components/pages/statements/StatementsEle";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import SectionSwiper from "@/components/shared/sectionSwiper/SectionSwiper";

const Statements = () => {
  
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <LinkHeader to={"/statements"} title={"البنود"} />
        {/* <AddRecord recordType={"addIssue"} title={"اضافة قضية"} /> */}
      </div>
      <div>
        <StatementsEle/>
        {/* <IssuesTable /> */}
      </div>
    </ScreenWrapper>
  );
};

export default Statements;
