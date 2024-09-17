
const page = () => {
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <LinkHeader title={"ملف القضية"}/>
      <div>
        <IssuesTable/>
      </div>
    </ScreenWrapper>
  )
}

export default page