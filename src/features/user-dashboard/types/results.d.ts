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

export interface IAnalyticsItem {
  questionId: string;
  questionText: string;
  selectedAnswer: IAnswer;
  isCorrect: boolean;
  correctAnswer: IAnswer;
}

export interface IExamSubmissionData {
  submission: ISubmission;
  analytics: IAnalyticsItem[];
}

export interface ISubmission {
  id: string;
  userId: string;
  examId: string;
  examTitle: string;
  exam: IExamInfo;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  startedAt: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}
