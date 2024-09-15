import IssuesTable from "@/components/issues/IssuesTable"
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader"
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper"

const Issues = () => {
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <LinkHeader title={"القضايا"}/>
      <div>
        <IssuesTable/>
      </div>
    </ScreenWrapper>
  )
}

export default Issues