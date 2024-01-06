export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
export const updateCart = (state) => {
  //   calculate item price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //   calculate shipping price (if order is over $100 then free, else $10 shipping)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  //   calculate tax price (15%)
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
  //   calculate total price
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
