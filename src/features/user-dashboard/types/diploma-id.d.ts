export interface ISingelDiplomaIdRes {
  diploma: {
    createdAt: string;
    description: string;
    exams: IExam[];
    id: string;
    image: string | null;
    immutable: boolean;
    title: string;
    updatedAt: string;
  };
}

export interface IExam {
  createdAt: string;
  description: string;
  duration: string;
  id: string;
  image: string | null;
  questionsCount: number;
  title: string;
}
