import {GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS} from "./actionTypes"
import axios from 'axios'

// Mens Data
const getMensRequestAction = () =>
{
    return {type:GET_PRODUCTS_REQUEST}
}
const getMensSuccessAction = (payload) =>
{
    return {type:GET_PRODUCTS_SUCCESS,payload}
}
const getMensDFailureAction = () =>
{
    return {type:GET_PRODUCTS_FAILURE}
}


export const menData = (param) => (dispatch) =>
{
  dispatch(getMensRequestAction());
    axios.get("http://localhost:8080/todos",param).then((res)=>
  {
    console.log(param)
    dispatch(getMensSuccessAction(res.data))
   

  }).catch((err)=>
  {
    dispatch(getMensDFailureAction())
  })
}




