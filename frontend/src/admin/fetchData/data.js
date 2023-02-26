import axios from "axios";

const baseURL = "https://smoggy-woolens-lamb.cyclic.app";
// https://smoggy-woolens-lamb.cyclic.app/product/get

// userby search
// https://smoggy-woolens-lamb.cyclic.app/user?email=sattam@gmail.com

export const alluser = async () => {
  try {
    return await axios.get(`${baseURL}/user`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    });
  } catch (err) {
    console.log(err);
  }
};
export const allProducts = async () => {
  try {
    return await axios.get(`${baseURL}/product/get`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// `https://smoggy-woolens-lamb.cyclic.app/product/update/${productId}`
export const updateProduct = async (id, payload) => {
  try {
    return await axios.patch(
      `${baseURL}/product/update/${id}`,
      { payload },
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};
export const singleProduct = async (id) => {
  try {
    return await axios.get(`${baseURL}/product/${id}`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    });
  } catch (err) {
    console.log(err);
  }
};
// https://smoggy-woolens-lamb.cyclic.app/product/delete/${product}`

export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`${baseURL}/product/delete/${id}`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// https://smoggy-woolens-lamb.cyclic.app/order/admin
export const allOrders = async () => {
  try {
    return await axios.get(`${baseURL}/order/admin`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// https://smoggy-woolens-lamb.cyclic.app/order/update?orderId=${orderId}
export const updateOrderStatus = async (id, status) => {
  try {
    return await axios.patch(
      `${baseURL}/order/update?orderId=${id}`,
      {
        orderStatus: status,
      },
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

// // https://smoggy-woolens-lamb.cyclic.app/user?email=sattam@gmail.com
// export const userBYName = async () => {
//   try {
//     return await axios.get(`${baseURL}/user?${}`, {
//       headers: {
//         Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const logOut = async () => {
  try {
    return await axios.post(
      `${baseURL}/user/logout`,
      {},
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};
