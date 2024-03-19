import axios from "axios";
const category_route = "http://localhost:8080/api/v1/category";
const product_route = "http://localhost:8080/api/v1/product";
const auth_route = "http://localhost:8080/api/v1/auth";

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

export const register = (payload) => async (dispatch) => {
    try{
        const response = await axios.post(`${auth_route}/register`, payload);
        localStorage.setItem("token", response.data.token);
        return dispatch({
            type: "LOGIN",
            payload: {
                role: response.data.role,
                userName: response.data.userName
            }
        })
    }catch(error){
        alert('Username or password is incorrect!')
    }
}

export const login = (payload) => async (dispatch) => {
    try {
        let response = await axios.post(`${auth_route}/login)`, payload, {
            headers: { "Content-Type" : "aplicattion/json"},
        });
        localStorage.setItem("token", response.data.token)
        return dispatch({
            type : "LOGIN",
            payload : {
                role: response.data.role,
                userName: response.data.userName
            }
        })
    } catch (error) {
        alert(error.response)
    }
}