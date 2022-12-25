export const orderReducer = (state = [], actions) => {
  switch (actions.type) {
    case "FETCH_ORDER_DATA": {
      state = actions.payload;
      return state;
    }
    case "REMOVE_ORDER": {
      return state;
    }
    default: {
      return state;
    }
  }
};
