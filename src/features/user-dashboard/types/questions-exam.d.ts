export interface IExamQuestions {
  questions: IQuestion[];
}

export interface IQuestion {
  id: string;
  text: string;
  examId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  answers: IAnswer[];
  exam: {
    id: string;
    title: string;
  };
}

export interface IAnswer {
  id: string;
  text: string;
  isCorrect: boolean;
}
