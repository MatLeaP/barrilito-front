const initialState = { 
  allCategories :[],
  allProducts : [],
  cart : JSON.parse(localStorage.getItem("cart_barrilito")) || [],
  isLoggedIn :false,
  isAdmin : false,
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
          localStorage.setItem("cart_barrilito", JSON.stringify(updatedCart));
          return {
            ...state,
            cart: updatedCart
          };

        case "LOGIN" :
          const { role, userName } = action.payload;
          const isAdmin = role === "ADMIN";
          return {
            ... state,
            isLoggedIn : true,
            isAdmin,
            userName : userName,
            role : role
          }

    default:
      return state;
    };
};

export default rootReducer;
