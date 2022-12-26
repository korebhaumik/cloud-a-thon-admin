export const orderReducer = (state = [], actions) => {
  switch (actions.type) {
    case "FETCH_ORDER_DATA": {
      state = actions.payload;
      return state;
    }
    case "REMOVE_ORDER": {
      const orderId = actions.payload;
      let temp = state;
      state = temp.filter((order) => {
        return order.orderId != orderId;
      });
      return state;
    }
    default: {
      return state;
    }
  }
};
