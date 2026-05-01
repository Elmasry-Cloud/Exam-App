import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";
import ExamsAddContent from "@/features/admin-dashboard/components/exams-pages/exams-add/exams-add-content";
import ExamsAddHeader2 from "@/features/admin-dashboard/components/exams-pages/exams-add/exams-add-header2";

export default function AddExamPage() {
  return (
    <>
      {/* Header */}
      <div className="sticky z-50 top-0">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas
          defaultTitle={"Exams"}
          title={"Create New Exam"}
          href={"/dashboard/exam-list"}
        />

        {/* Exams Add Header 2*/}
        <ExamsAddHeader2 formId="add-edit-exam" />
      </div>

      <div className="p-6">
        {/* Exams Add Content */}
        <ExamsAddContent formId="add-edit-exam" />

        {/* Exams Add Questions */}
        {/* <ExamsEditQuestions /> */}
      </div>
    </>
  );
}
