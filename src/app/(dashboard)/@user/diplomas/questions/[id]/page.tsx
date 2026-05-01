import { BreadcrumbBasicDiplomas } from "@/features/user-dashboard/components/diplomas/bread-crumb-diplomas";
import DiplomasHeader from "@/features/user-dashboard/components/diplomas/diplomas-header";
import QuestionsInfo from "@/features/user-dashboard/components/diplomas/questions-info";
import { CircleQuestionMark } from "lucide-react";

export default async function DiplomasQuestions({
  params,
  searchParams,
}: PageProps<"/diplomas/questions/[id]">) {
  const { id } = await params;
  const { title, diplomaId, diplomaTitle, examDuration } = await searchParams;
  // console.log(examDuration);
  return (
    <>
      <BreadcrumbBasicDiplomas
        href={`/diplomas/${diplomaId}`}
        text={diplomaTitle}
        titleExam={title}
      />
      <main className="p-6">
        <DiplomasHeader text={title} hrefBack={`/diplomas/${diplomaId}`}>
          <CircleQuestionMark size={45} />
        </DiplomasHeader>
        {/* <div>questionsPageId: {id}</div> */}
        <QuestionsInfo
          id={id}
          title={diplomaTitle}
          titleExam={title}
          examDuration={examDuration}
          diplomaId={diplomaId}
        />
      </main>
    </>
  );
}
