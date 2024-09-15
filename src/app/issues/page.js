import IssuesTable from "@/components/issues/IssuesTable"
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader"

const Issues = () => {
  return (
    <div className="flex-1 p-4">
      <LinkHeader title={"القضايا"}/>
      <div>
        <IssuesTable/>
      </div>
    </div>
  )
}

export default Issues