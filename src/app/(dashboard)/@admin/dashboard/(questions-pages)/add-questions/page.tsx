import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";
import QuestionsAddBulkHeader2 from "@/features/admin-dashboard/components/questions-pages/questions-add-bulk/question-add-bulk-header2";
import QuestionsAddBulkAnswers from "@/features/admin-dashboard/components/questions-pages/questions-add-bulk/questions-add-bulk-answers";
import QuestionsAddBulkInfo from "@/features/admin-dashboard/components/questions-pages/questions-add-bulk/questions-add-bulk-info";

export default function QuestionsAddBulkPage() {
  return (
    <>
      {/* Header */}
      <div className="sticky top-0 z-50">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas
          defaultTitle={"Exams"}
          title={"Create New Question"}
          href={""}
        />

        {/* Questions Edit Header 2*/}
        <QuestionsAddBulkHeader2 />
      </div>

      {/* Questions Edit informations and answers */}
      <div className="p-6">
        <QuestionsAddBulkInfo />
        <QuestionsAddBulkAnswers />
      </div>
    </>
  );
}
