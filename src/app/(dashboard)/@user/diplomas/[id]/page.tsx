import SingelDiplomaExams from "@/features/user-dashboard/components/diplomas/singel-diploma-content";

export default async function SingelDiploma({
  params,
}: PageProps<"/diplomas/[id]">) {
  const { id } = await params;

  return (
    <>
      {/* <Suspense fallback={<SkilitonExams />}> */}
      {/* <Suspense fallback={<SkilitonSingelDiploma />}> */}
      <SingelDiplomaExams diplomaId={id} />
      {/* </Suspense> */}
    </>
  );
}
