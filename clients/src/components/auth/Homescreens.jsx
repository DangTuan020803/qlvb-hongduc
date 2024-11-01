import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { removeAuth } from "../../reduxs/reducers/authReducer";
import handelApi from "../../apis/handelApi";

const Homescreens = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(removeAuth({}));
  };
  const getProducts = async () => {
    const api = `/storage/products`;
    try {
      const res = await handelApi(api);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onClick={getProducts}>Logout</Button>
    </div>
  );
};

export default Homescreens;
