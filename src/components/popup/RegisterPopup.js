import Popup from "reactjs-popup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { showErr } from "../../../__lib__/helpers/ErrHandler";
import { postData } from "../../../__lib__/helpers/HttpService";

const RegisterPopup = () => {
  const [disable, setDisable] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onError = (err) => showErr(err);
  const router = useRouter();

  const onSubmit = (data) => {
    setDisable(true);
    postData("/users/register", data, setDisable).then((res) => {
      if (res?.success) {
        toast.success(`${res.message}`);
        reset();
        router.push({
          pathname: "/login",
        });
      }
    });
  };

  return (
    <Popup
      trigger={
        <button className="btn btn-outline-secondary me-2"> Registion </button>
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
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required.",
                })}
                id="Name"
                placeholder="Enter your Name"
              />
            </div>
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
              <button
                type="type"
                className="login-btn"
                disabled={disable}
              >
                Registion
              </button>
            </div>
          </form>
        </div>
      )}
    </Popup>
  );
};

export default RegisterPopup;
