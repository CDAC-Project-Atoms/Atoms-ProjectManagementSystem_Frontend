
import api from "@/Api/api";
import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
} from "./actionTypes";

export const createPayment = ({planType,jwt}) => async (dispatch) => {
  console.log("create payment reqData ", jwt,planType);
  try {
    dispatch({
      type: CREATE_PAYMENT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };

    const { data } = await api.post(
      `/api/payments/${planType}`,
     
      config
    );
    console.log("datta", data);
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error",error)
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
