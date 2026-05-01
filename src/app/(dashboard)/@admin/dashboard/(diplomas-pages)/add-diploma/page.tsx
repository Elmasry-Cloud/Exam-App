import DiplomasAddContent from "@/features/admin-dashboard/components/diplomas-pages/diplomas-edit-add/diplomas-add-content";
import DiplomasEditHeader2 from "@/features/admin-dashboard/components/diplomas-pages/diplomas-edit-add/diplomas-edit-header2";
import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";

export default function DiplomasAddPage() {
  return (
    <>
      {/* Header */}
      <div className="sticky z-50 top-0">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas
          defaultTitle={"Diplomas"}
          title={`Add New Diploma`}
          href={"/dashboard"}
        />

        {/* Header2 Add Diplomas*/}
        <DiplomasEditHeader2 formId="diploma-form" />
      </div>

      {/* Content */}
      <DiplomasAddContent formId="diploma-form" />
    </>
  );
}
