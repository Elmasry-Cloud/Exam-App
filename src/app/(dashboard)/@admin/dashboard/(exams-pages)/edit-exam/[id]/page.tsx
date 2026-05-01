import GetSingelExam from "@/features/admin-dashboard/apis/exams-pages/get-singel-exam.api";
import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";
import ExamsEditContent from "@/features/admin-dashboard/components/exams-pages/exams-edit/exams-edit-content";
import ExamsEditHeader2 from "@/features/admin-dashboard/components/exams-pages/exams-edit/exams-edit-header2";
import ExamsEditQuestions from "@/features/admin-dashboard/components/exams-pages/exams-edit/exams-edit-questions";
import ExamsViewQuestions from "@/features/admin-dashboard/components/exams-pages/exams-view/exams-view-questions";

export default async function ExamEditPage({
  params,
}: PageProps<"/dashboard/edit-exam/[id]">) {
  const { id } = await params;

  const examData = await GetSingelExam({ id });

  const exam = examData.payload.exam;

  // console.log(exam);

  return (
    <>
      {/* Header */}
      <div className="sticky z-50 top-0">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas
          defaultTitle={"Exams"}
          title={exam.title}
          titleEdit={"Edit"}
          href={"/dashboard/exam-list"}
        />

        {/* Exams Edit Header 2*/}
        <ExamsEditHeader2 exam={exam} formId="edit-exam" />
      </div>

      <div className="p-6">
        {/* Exams Edit Content */}
        <ExamsEditContent exam={exam} formId="edit-exam" />

        {/* Exams View Questions */}
        <ExamsEditQuestions examId={id} />

        {/* Exams View Questions */}
        {/* <ExamsViewQuestions examId={id} /> */}
      </div>
    </>
  );
}
