export interface IExamSubmissionResponse {
  id: string;
  examId: string;
  examTitle: string;
  score: number;
  subject: string;
  totalMarks: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  startedAt: string;
  submittedAt: string;
}
