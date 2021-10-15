import { numOfItemsRequiredPerPage } from '../constants/numOfItemsRequiredPerPage';

export const getNumOfItemsRequired = (actualPageNumber: number) => numOfItemsRequiredPerPage * actualPageNumber;
