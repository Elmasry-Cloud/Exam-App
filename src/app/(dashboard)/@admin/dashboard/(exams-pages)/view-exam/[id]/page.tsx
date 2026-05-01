import GetSingelExam from "@/features/admin-dashboard/apis/exams-pages/get-singel-exam.api";
import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";
import ExamsViewContent from "@/features/admin-dashboard/components/exams-pages/exams-view/exams-view-content";
import ExamsViewHeader2 from "@/features/admin-dashboard/components/exams-pages/exams-view/exams-view-header2";
import ExamsViewQuestions from "@/features/admin-dashboard/components/exams-pages/exams-view/exams-view-questions";

export default async function ExamViewPage({
  params,
}: PageProps<"/dashboard/view-exam/[id]">) {
  const { id } = await params;
  // console.log(id);
  const data = await GetSingelExam({ id });
  const exam = data?.payload.exam;

  // const questionsData = await getQuestionsSingelExam({ examId: id });
  // const questions = questionsData?.payload.questions;
  // console.log(exam);
  // console.log(questions);
  return (
    <>
      {/* Header */}
      <div className="sticky z-50 top-0">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas
          defaultTitle={"Exams"}
          title={exam.title}
          href={"/dashboard/exam-list"}
        />

        {/* Exams View Header 2*/}
        <ExamsViewHeader2 examData={exam} />
      </div>

      {/*  Exams View Content */}
      <ExamsViewContent examData={exam} />

      {/* Exams View Questions */}
      <ExamsViewQuestions examId={id} />
    </>
  );
}
