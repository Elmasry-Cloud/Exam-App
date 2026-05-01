import DiplomasEditContent from "@/features/admin-dashboard/components/diplomas-pages/diplomas-edit-add/diplomas-edit-content";
import DiplomasEditHeader2 from "@/features/admin-dashboard/components/diplomas-pages/diplomas-edit-add/diplomas-edit-header2";
import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";
import GetSingelDiploma from "@/features/user-dashboard/apis/diplomas-apis/singel-diploma.api";

export default async function DiplomasEditPage({
  params,
}: PageProps<"/dashboard/edit-diploma/[id]">) {
  const { id } = await params;

  const diploma = GetSingelDiploma({ id });

  // console.log(id);
  // console.log(description);

  return (
    <>
      {/* Header */}
      <div className="sticky z-50">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas
          defaultTitle={"Diplomas"}
          title={`Edit Diploma`}
          href={"/dashboard"}
        />

        {/* Header2 DiplomasEdit*/}
        <DiplomasEditHeader2 formId="diploma-form-edit" />
      </div>

      {/* Content */}
      <DiplomasEditContent
        formId="diploma-form-edit"
        diplomaId={id}
        diplomaData={diploma}
      />
    </>
  );
}
