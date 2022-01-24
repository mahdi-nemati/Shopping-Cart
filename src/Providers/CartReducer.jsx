const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity++;
        updatedCart[index] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    // increment quantity
    case "increment":
      const updatedInc = [...state.cart];
      const indexOfItem = updatedInc.findIndex(
        (item) => item.id === action.payload.id
      );
      const selectedInc = { ...updatedInc[indexOfItem] };
      selectedInc.quantity++;
      updatedInc[indexOfItem] = selectedInc;
      return { ...state, cart: updatedInc };
    // decrement
    case "decrement":
      const updatedDec = [...state.cart];
      const indexOfItemDec = updatedDec.findIndex(
        (item) => item.id === action.payload.id
      );
      const selectedDec = { ...updatedDec[indexOfItemDec] };
      if (selectedDec.quantity === 1) {
        const filterDec = updatedDec.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, cart: filterDec };
      }
      selectedDec.quantity--;
      updatedDec[indexOfItemDec] = selectedDec;
      return { ...state, cart: updatedDec };
    default:
      return state;
  }
};
export default CartReducer;
