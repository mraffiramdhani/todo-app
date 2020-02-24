import {GetItem} from '../../config/api';

export const getItem = () => {
  return {
    type: 'GET_ITEM',
    payload: GetItem(),
  };
};
