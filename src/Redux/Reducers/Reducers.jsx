const initialState = { 
  allCategories :[],
  allProducts : []
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

    default:
      return state;
    };
};

export default rootReducer;
