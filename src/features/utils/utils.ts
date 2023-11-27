export const filterArrayOfObjects = <T extends object>(
  array: T[],
  key: keyof T,
  term: string
) =>
  array.filter((item) =>
    String(item[key])
      .toLocaleLowerCase()
      .trim()
      .includes(term.toLocaleLowerCase().trim())
  );

export const sliceRowsPerPage = <T>(
  array: T[],
  rowsPerPage: number,
  page: number
) =>
  rowsPerPage > 0
    ? array.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : array;
