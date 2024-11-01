import { Button, message } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase/firebaseConfig";
import handelApi from "../../../apis/handelApi";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "trinhdangtuan020803@gmail.com",
});

const SocialLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handelLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        const user = result.user;
        if (user) {
          const data = {
            name: user.displayName,
            email: user.email,
          };

          const api = `/auth/google-login`;
          try {
            const res = await handelApi(api, data, "post");
            console.log(res);
            message.success(res.message); // Sửa thành message.success
          } catch (error) {
            console.log(error);
            message.error(error.message); // Có thể cải thiện thông báo lỗi
          }
        } else {
          console.log("Cannot login with Google");
        }
      }
    } catch (error) {
      console.log(error);
      message.error("An error occurred during Google login."); // Thông báo lỗi người dùng
    } finally {
      setIsLoading(false); // Đặt lại trạng thái loading
    }
  };

  return (
    <Button
      loading={isLoading}
      onClick={handelLoginWithGoogle}
      style={{ width: "100%" }}
      icon={
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/color/48/google-logo.png"
          alt="google-logo"
        />
      }
    >
      Google
    </Button>
  );
};

export default SocialLogin;
