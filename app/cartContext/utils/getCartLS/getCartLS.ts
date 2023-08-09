export const getCartLS = () => {
  const cartItemsLSJSON = localStorage.getItem("cartItems");
  return cartItemsLSJSON ? JSON.parse(cartItemsLSJSON) : [];
};
