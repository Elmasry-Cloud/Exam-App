import getSingelQuestion from "@/features/admin-dashboard/apis/questions-pages/get-singel-que.api";
import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";
import QuestionsViewContent from "@/features/admin-dashboard/components/questions-pages/questions-view/questions-view-content";
import QuestionsViewHeader2 from "@/features/admin-dashboard/components/questions-pages/questions-view/questions-view-header2";

export default async function QuestionsViewPage({
  params,
}: PageProps<"/dashboard/view-questions/[id]">) {
  const { id } = await params;

  const questionData = await getSingelQuestion({ questionId: id });

  const question = questionData.payload.question;

  // console.log(questionData?.payload.question);
  // console.log(question);
  // console.log(questionData);

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 z-50">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas
          defaultTitle={"Exams"}
          title={question?.exam.title}
          // title3={"Questions"}
          titleEdit={"Questions"}
          titleQue={question?.text}
          href={"/dashboard/exam-list"}
        />

        {/* Questions View Header 2*/}
        <QuestionsViewHeader2 questionData={question} />
      </div>

      {/* Questions View Content */}
      <QuestionsViewContent questionData={question} />
    </>
  );
}
