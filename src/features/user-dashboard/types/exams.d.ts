export interface IExamsRes {
  data: IExamData[];
  metadata: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface IExamData {
  id: string;
  title: string;
  description: string;
  image: string | null;
  duration: string;
  questionsCount: number;
  diplomaId: string;
  diploma: {
    id: string;
    title: string;
  };
  createdAt: string;
  updatedAt: string;
  immutable: boolean;
}
