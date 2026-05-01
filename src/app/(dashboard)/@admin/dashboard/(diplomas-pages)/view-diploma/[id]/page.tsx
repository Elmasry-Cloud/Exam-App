import { AdminBreadcrumbDiplomas } from "@/features/admin-dashboard/components/diplomas-pages/diplomas-list-page/admin-breadcrumb-diplomas";
import DiplomasViewHeader2 from "@/features/admin-dashboard/components/diplomas-pages/diplomas-view/diplomas-view-header2";
import DiplomasViewContent from "@/features/admin-dashboard/components/diplomas-pages/diplomas-view/diplomas-view-content";
import GetSingelDiploma from "@/features/user-dashboard/apis/diplomas-apis/singel-diploma.api";

export default async function DiplomasViewPage({
  params,
}: PageProps<"/dashboard/view-diploma/[id]">) {
  const { id } = await params;
  // console.log(id);
  const data = await GetSingelDiploma({ id });
  const diploma = data?.payload.diploma;
  // console.log(diploma);
  return (
    <>
      <div className="sticky z-50">
        {/* AdminBreadcrumb Diplomas*/}
        <AdminBreadcrumbDiplomas
          defaultTitle={"Diplomas"}
          title={diploma?.title}
          href={"/dashboard"}
        />

        {/* Header Diplomas View 2 */}
        <DiplomasViewHeader2 diplomaTitle={diploma?.title} diplomaId={id} />
      </div>

      {/* Diplomas View Content */}
      <DiplomasViewContent diploma={diploma} />
    </>
  );
}
