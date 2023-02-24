import {GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes"


export const initialState = {
    Products : [] ,
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
        default :
            return state
    }
}
 export { reducer }