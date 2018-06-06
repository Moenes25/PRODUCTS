const productReducer = (state = {
  products: [],
 }, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'DELETE_PRODUCT':
      return {
        products: state.products.filter((product) =>
          product._id !== action.payload),
      };
    default:
  }
  return state;
 };
 
 export default productReducer;