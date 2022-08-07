import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import Cookies from "universal-cookie";
// <<<<<<< HEAD:src/components/popup/LoginPopup.js
import Layout from "../Layout";
import { showErr } from "../../../__lib__/helpers/ErrHandler";
import { postData } from "../../../__lib__/helpers/HttpService";
// =======
// import { showErr } from "../__lib__/helpers/ErrHandler";
// import { postData } from "../__lib__/helpers/HttpService";
// >>>>>>> afb97bf94423e8125b5aeac39442cc7aacaf4afc:components/LoginPopup.js

const LoginPopup = () => {
  const [disable, setDisable] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onError = (err) => showErr(err);
  const cookies = new Cookies();
  const router = useRouter();

  const onSubmit = (data) => {
    setDisable(true);
    postData("/users/login", data, setDisable).then((res) => {
      if (res?.success) {
        cookies.set(
          "_info",
          JSON.stringify({
            token: res.token,
            user: res.user,
          }),
          { path: "/" }
        );
        reset();
        router.push({
          pathname: "/",
        });
        close();
      }
    });
  };
  return (
    <Popup
      trigger={
        <button className="btn btn-outline-secondary me-2"> Login </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="login-form px-1"
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required.",
                })}
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                {...register("password", {
                  required: "Password is required.",
                })}
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="text-center">
              <button type="type" className="login-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </Popup>
  );
};

export default LoginPopup;
