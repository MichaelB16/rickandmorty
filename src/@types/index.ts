export interface IInfoPagination {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

export interface IPagination {
  page: number;
  total: number;
  count: number;
  rowsPerPage: number;
  rowsNumber: number;
}
