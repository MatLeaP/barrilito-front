import axios from "axios";
const category_route = "http://localhost:8080/api/category";
const product_route = "http://localhost:8080/api/product";


export const getAllCategories= () => async(dispatch) => {
    try {
        const response = await axios.get(`${category_route}/list`)
        dispatch({
            type: "GET ALL CATEGORIES",
            payload : response.data
        });
    } catch (error) {
        console.error("Error fetching categories: ", error.message);
    }
}

export const getAllProducts= () => async (dispatch) => {
    try{
        const response = await axios.get(`${product_route}/list`)
        dispatch({
            type:"GET ALL PRODUCTS",
            payload:response.data
        });
    } catch (error){
        console.error("Error fetching products: ", error.message);
    }
}

export const addToCart = (product) => async (dispatch) => {
    dispatch({
        type: "ADD_TO_CART",
        payload: product
    });
}