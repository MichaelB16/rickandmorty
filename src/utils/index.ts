import type { IInfoPagination, IPagination } from 'src/@types';

export const configPagination = (
  pagination: IInfoPagination = {} as IInfoPagination,
): IPagination => {
  return {
    total: Math.ceil(pagination?.count / 20),
    count: pagination?.count,
    page: pagination?.next - 1,
    rowsPerPage: 20,
    rowsNumber: 20,
  };
};
