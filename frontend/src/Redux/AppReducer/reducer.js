import {GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS,GET_WOMEN_FAILURE,GET_WOMEN_REQUEST,GET_WOMEN_SUCCESS,GET_CHILD_FAILURE,GET_CHILD_REQUEST,GET_CHILD_SUCCESS } from "./actionTypes"


export const initialState = {
    Products : [] ,
    Womens_product:[],
    Child_product:[],
    isLoading : false ,
    isError : false 
}

const reducer = (state = initialState,action) =>
{
    const {type,payload} = action
    switch(type)
    {
        case GET_PRODUCTS_REQUEST :
            return{
                ...state ,
                isLoading : true
            }
        case GET_PRODUCTS_SUCCESS :
            return {
                ...state ,
                isLoading : false ,
                Products : payload ,
                isError : false 
            }
        case GET_PRODUCTS_FAILURE :
            return {
                ...state ,
                isLoading : false ,
                isError : true 
       
            }
            case GET_WOMEN_REQUEST :
            return{
                ...state ,
                isLoading : true
            }
        case GET_WOMEN_SUCCESS :
            return {
                ...state ,
                isLoading : false ,
                Womens_product : payload ,
                isError : false 
            }
        case GET_WOMEN_FAILURE :
            return {
                ...state ,
                isLoading : false ,
                isError : true 
       

            }
            case GET_CHILD_REQUEST :
            return{
                ...state ,
                isLoading : true
            }
        case GET_CHILD_SUCCESS :
            return {
                ...state ,
                isLoading : false ,
                Child_product : payload ,
                isError : false 
            }
        case GET_CHILD_FAILURE :
            return {
                ...state ,
                isLoading : false ,
                isError : true 
       
            }
        default :
            return state
    }
}
 export { reducer }