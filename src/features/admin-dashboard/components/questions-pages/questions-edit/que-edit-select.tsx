import getAllExams from "@/features/admin-dashboard/apis/exams-pages/get-all-exams.api";
import { IExamData } from "@/features/user-dashboard/types/exams";
import { IQuestion } from "@/features/user-dashboard/types/questions-exam";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/shared/components/ui/combobox";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export function SelectExamQuestionsCombobox({
  exam,
  questionExamTitle,
}: {
  exam: IExamData[];
  questionExamTitle: string;
}) {
  // console.log(questionExamTitle);
  return (
    <Combobox items={frameworks} defaultInputValue={questionExamTitle}>
      <ComboboxInput placeholder="Select exam" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {exam.map((item) => (
            <ComboboxItem key={item.id} value={item.title}>
              {item.title}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
