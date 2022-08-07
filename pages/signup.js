import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthLayout from "../src/components/AuthLayout";
import { useForm } from 'react-hook-form';
import { showErr } from "../__lib__/helpers/ErrHandler";
import { postData } from "../__lib__/helpers/HttpService";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Signup = () => {
  const [disable, setDisable] = useState(false);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onError = (err) => showErr(err);
  const router = useRouter();

  const onSubmit = (data) => {
    setDisable(true);
    postData('user/signup', data)
    .then(res=>{

        console.log(res);

        if(res?.exists){
            toast.error(`${res.message}`);
        }

        if(res?.success){
            reset();
            router.push({
                pathname: `register/${data.email}`,
            });
        }
    })
    .catch(err=>console.log(err))
  };


  return (
    <AuthLayout>
        <div className="_smd_login_card">
            <h3>Create your account</h3>
            <button>
                <Image height='30' width="30" src="/images/icon/google-icon.png" alt="" />
                <div className="text-center">Continue with Google</div>
            </button>
            <button>
                <Image height='30' width="30" src="/images/icon/apple.png" alt="" />
                <div className="text-center">Continue with Apple</div>
            </button>
            <button>
                <Image height='30' width="30" src="/images/icon/facebook-icon.png" alt="" />
                <div className="text-center">Continue with Facebook</div>
            </button>

            <div className="_smd_or_line">
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <form 
                className="w-100"
                onSubmit={ handleSubmit(onSubmit, onError) }
            >
                <div className="_smd_form_group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        {...register("email", {
                            required: "Email is required.",
                        })}
                    />
                </div>
                <button className="bg-black text-center justify-content-center  mt-3 mb-4"> Continue</button>
            </form>

            <Link href="/login">
                <a className="mt-1 mb-3">Already have an account? Login</a>
            </Link>
        </div>
    </AuthLayout>
  );



  // return (
  //   <>
  //     <Layout>
  //       <div id="login">
  //         <form 
  //           onSubmit={handleSubmit(onSubmit, onError)}
  //         >
  //           <h1 className="text-center text-white fs-1 mt-2">Signup</h1>
  //           <div>
  //             <label htmlFor="name">Name</label>
  //             <input
  //               {...register("name", {
  //                 required: "Name is required.",
  //               })}
  //               type="text"
  //               id="name"
  //               placeholder="Enter your name"
  //             />
  //           </div>
  //           <div>
  //             <label htmlFor="email">Email</label>
  //             <input
  //               {...register("email", {
  //                 required: "Email is required.",
  //               })}
  //               type="email"
  //               name="email"
  //               id="email"
  //               placeholder="Enter your Email"
  //             />
  //           </div>
  //           <div>
  //             <label htmlFor="password">Password</label>
  //             <input
  //               {...register("password", {
  //                 required: "Password is required.",
  //               })}
  //               type="password"
  //               name="password"
  //               id="password"
  //               placeholder="Enter Your password"
  //             />
  //           </div>
  //           <button disabled={disable} className="my-2">
  //             signup
  //           </button>
  //         </form>
  //       </div>
  //     </Layout>
  //   </>
  // );
};

export default Signup;
