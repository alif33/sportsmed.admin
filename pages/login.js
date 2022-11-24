import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "universal-cookie";
import { showErr } from "../__lib__/helpers/ErrHandler";
import { postData } from "../__lib__/helpers/HttpService";

export default function Login() {
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

  const onSubmit = async (data) => {
    setDisable(true);
    postData("/admin/signin", data, setDisable).then(res => {
      console.log(res);
      if (res?.success) {
        cookies.set(
          "_admin",
          JSON.stringify({
            token: res.token,
            user: res.user,
          }),
          { path: "/" }
        );
        // reset();
        router.push({
          pathname: "/",
        });
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="admin-login"
        style={{ backgroundImage: `url("../../images/admin-login-bg.jpg")` }}
      >
        <div className="admin-login-form">
          <form className="pt-3" onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="form-outline">
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
              <input
                {...register("email", {
                  required: "Email is required.",
                })}
                type="email"
                id="form2Example1"
                className="form-control"
              />
            </div>
            <div className="form-outline pt-1">
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required.",
                })}
                type="password"
                id="form2Example2"
                className="form-control"
              />
            </div>
            <div className="col text-center">
              <button type="submit" className="btn btn-primary  mt-2">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
