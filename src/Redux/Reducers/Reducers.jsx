const initialState = { 
  allCategories :[],
  allProducts : [],
  cart : JSON.parse(localStorage.getItem("cart_barrilito")) || [],
  isLogged: false,
  userName : ""
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
      case "GET ALL CATEGORIES":
        return {
          ...state,
          allCategories: action.payload,
        };
      case "GET ALL PRODUCTS":
        return {
          ...state,
          allProducts: action.payload
        };
        case "ADD_TO_CART":
          const updatedCart = [...state.cart, action.payload];
          const newState = {
            ...state,
            cart: updatedCart
          };
          localStorage.setItem("cart_barrilito", JSON.stringify(newState.cart));
          return newState;

          case "LOGIN":
            const {role, userName} = action.payload;
            const isAdmin = role === "ADMIN";
            return {
              ...state,
              isLogged : true,
              isAdmin,
              userName : userName
            }

    default:
      return state;
    };
};

export default rootReducer;
