export interface IDiplomaRes {
  data: IDiplomaData[];
  metadata: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface IDiplomaData {
  id: string;
  title: string;
  description: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  immutable: boolean;
}
