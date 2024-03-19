import axios from "axios";
const category_route = "http://localhost:8080/api/v1/category";
const product_route = "http://localhost:8080/api/v1/product";
<<<<<<< HEAD
const auth_route = "http://localhost:8080/api/v1/auth/register";

=======
const auth_route = "http://localhost:8080/api/v1/auth";
>>>>>>> c644ad745c0429bcd80187e14d82e7ef7722d25a

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

export const addToCart = (product) => (dispatch) => {
    dispatch({
        type: "ADD_TO_CART",
        payload: product
    });
}

export const register = (payload) => async (dispatch) => {
<<<<<<< HEAD
    try {
        console.log(payload);
        const response = await axios.post(`${auth_route}`, payload);
        console.log("chau");
        console.log("Response from server:", response);
=======
    try{
        const response = await axios.post(`${auth_route}/register`, payload);
>>>>>>> c644ad745c0429bcd80187e14d82e7ef7722d25a
        localStorage.setItem("token", response.data.token);
        return dispatch({
            type: "LOGIN",
            payload: {
<<<<<<< HEAD
                role: response.data.user.roles,
                userName: response.data.user.userName
            }
        });
    } catch (error) {
        console.error("Error during registration:", error);
    }
};
=======
                role: response.data.user.roles[0],
                userName: response.data.user.userName
            }
        })
    }catch(error){
        alert('Username or password is incorrect!')
    }
}
>>>>>>> c644ad745c0429bcd80187e14d82e7ef7722d25a
