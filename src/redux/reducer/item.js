const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const item = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEM_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'GET_ITEM_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case 'GET_ITEM_FULFILLED':
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    default:
      return state;
  }
};

export default item;
