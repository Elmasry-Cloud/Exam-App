export interface IErrorRes {
  status: false;
  code: number;
  message: string;
  errors?: Array<{
    path: string;
    message: string;
  }>;
}
export interface ISuccessRes<T> {
  status: true;
  code: number;
  message?: string;
  payload: T;
}

export type ApiRes<T> = IErrorRes | ISuccessRes<T>;
