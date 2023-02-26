import {GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS,GET_WOMEN_FAILURE,GET_WOMEN_REQUEST,GET_WOMEN_SUCCESS,GET_CHILD_FAILURE,GET_CHILD_REQUEST,GET_CHILD_SUCCESS} from "./actionTypes"
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
const getWomensRequestAction = () =>
{
    return {type:GET_WOMEN_REQUEST}
}
const getWomensSuccessAction = (payload) =>
{
    return {type:GET_WOMEN_SUCCESS,payload}
}
const getWomensDFailureAction = () =>
{
    return {type:GET_WOMEN_FAILURE}
}
const getChildRequestAction = () =>
{
    return {type:GET_CHILD_REQUEST}
}
const getChildSuccessAction = (payload) =>
{
    return {type:GET_CHILD_SUCCESS,payload}
}
const getChildFailureAction = () =>
{
    return {type:GET_CHILD_FAILURE}
}

// export const menData = (param) => (dispatch) =>
// {
//   dispatch(getMensRequestAction());
//     axios.get(`http://localhost:8080/product/get?${param}`).then((res)=>
//   {
//     // console.log(res.data,"in action")
   
//     dispatch(getMensSuccessAction(res.data.products))
   

//   }).catch((err)=>
//   {
//     dispatch(getMensDFailureAction())
//   })
// }

export const menData = (paramObj) => (dispatch) => {
  dispatch(getMensRequestAction());
  axios.get("https://smoggy-woolens-lamb.cyclic.app/product/get?category=men", { params: paramObj.params })
    .then((res) => {
     
      dispatch(getMensSuccessAction(res.data.products));
    })
    .catch((err) => {
      dispatch(getMensDFailureAction());
    });
};


// export const menData  = (params) => (dispatch) => {
//   dispatch(getWomensRequestAction());
//   axios.get("http://localhost:8080/product/get", { params })
//     .then((res) => {
//       dispatch(getWomensSuccessAction(res.data.products));
//       // console.log(res.data.products);
//     })
//     .catch((err) => {
//       dispatch(getWomensDFailureAction());
//     });
// }


// Women
export const womenData = (param) => (dispatch) =>
{
  dispatch(getWomensRequestAction());
  //http://localhost:8080/product/get?category=women
    axios.get("https://smoggy-woolens-lamb.cyclic.app/product/get?category=women",{ params: param.params }).then((res)=>
  {
    // console.log(res.data.products)
    dispatch(getWomensSuccessAction(res.data.products))
  //  console.log(res.data)

  }).catch((err)=>
  {
    dispatch(getWomensDFailureAction())
  })
}
// 
export const childData = (param) => (dispatch) =>
{
  dispatch(getChildRequestAction());
  axios.get("https://smoggy-woolens-lamb.cyclic.app/product/get?category=kids",{ params: param.params }).then((res)=>
  {
    
    dispatch(getChildSuccessAction(res.data.products))
  //  console.log(res.data)

  }).catch((err)=>
  {
    dispatch(getChildFailureAction())
  })
}



