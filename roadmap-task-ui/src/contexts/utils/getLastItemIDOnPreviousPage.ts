import { numOfItemsRequiredPerPage } from '../constants/numOfItemsRequiredPerPage';

export const getLastItemIDOnPreviousPage = (actualPageNumber: number) => numOfItemsRequiredPerPage * (actualPageNumber - 1);
