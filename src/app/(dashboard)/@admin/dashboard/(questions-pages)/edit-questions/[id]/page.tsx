import getAllExams from "@/features/admin-dashboard/apis/exams-pages/get-all-exams.api";
import getSingelQuestion from "@/features/admin-dashboard/apis/questions-pages/get-singel-que.api";
import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";
import QuestionsEditAnswers from "@/features/admin-dashboard/components/questions-pages/questions-edit/questions-edit-answers";
import QuestionsEditHeader2 from "@/features/admin-dashboard/components/questions-pages/questions-edit/questions-edit-header2";
import QuestionsEditInfo from "@/features/admin-dashboard/components/questions-pages/questions-edit/questions-edit-info";

export default async function QuestionsEditAddPage({
  params,
}: PageProps<"/dashboard/edit-questions/[id]">) {
  const { id } = await params;

  const questionData = await getSingelQuestion({ questionId: id });

  const question = questionData.payload.question;

  const exams = await getAllExams({
    pageParam: 1,
    limit: 100,
  });

  const exam = exams.payload.data;

  console.log(question);
  return (
    <>
      {/* Header */}
      <div className="sticky top-0 z-50">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas
          defaultTitle={"Exams"}
          title={"Edit  Question"}
          href={"/dashboard/exam-list"}
        />

        {/* Questions Edit Header 2*/}
        <QuestionsEditHeader2 />
      </div>

      {/* Questions Edit informations and answers */}
      <div className="p-6">
        <QuestionsEditInfo question={question} exam={exam} questionId={id} />
      </div>
    </>
  );
}
