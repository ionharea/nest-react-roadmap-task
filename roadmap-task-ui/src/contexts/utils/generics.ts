//TODO: Might be a good idea to move these functions to somewhere else, as they are generic utility functions
export type Falsy = false | 0 | '' | null | undefined;

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export const unique = <T>(element: T, index: number, array: T[]) => array.indexOf(element) === index;

export const notFalsy = <T, K extends T | Falsy>(itm: K): itm is Exclude<K, Falsy> => !!itm;

export const copyAndSort = <T extends Record<string, unknown>>(
  itms: T[],
  columnKey: string,
  isSortedDescending?: boolean,
): T[] => {
  const key = columnKey as keyof T;
  return itms.slice().sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
};

export const mapAll = <T, K>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => K | Promise<K>,
  thisArg?: any,
) => {
  return Promise.all(array.map(callbackfn, thisArg));
};

export const mapAllSettled = <T, K>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => K | Promise<K>,
  thisArg?: any,
) => {
  return Promise.allSettled(array.map(callbackfn, thisArg));
};

export const mapRace = <T, K>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => K | Promise<K>,
  thisArg?: any,
) => {
  return Promise.race(array.map(callbackfn, thisArg));
};

export const hasAtLeast = <T extends readonly unknown[]>(array: T, numOfElements: number) =>
  array.length >= numOfElements;
export const hasAtMost = <T extends readonly unknown[]>(array: T, numOfElements: number) =>
  array.length <= numOfElements;
export const hasExactly = <T extends readonly unknown[]>(array: T, numOfElements: number) =>
  array.length === numOfElements;
