import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';
import AuthLayout from '../src/components/AuthLayout';
import { showErr } from '../__lib__/helpers/ErrHandler';
import { postData } from '../__lib__/helpers/HttpService';

const Login = () => {

  const [ disable, setDisable ] = useState(false);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onError = err => showErr(err);
  const cookies = new Cookies();
  const router = useRouter();

  const onSubmit = data => {
      setDisable(true)
      postData('/user/login', data, setDisable)
      .then(res=>{
          if(res?.success)
          {  
              cookies.set("_info", JSON.stringify({
                  token: res.token,
                  user: res.user
              }), { path: '/' });
              reset();
              router.push({
                  pathname: '/'
              })
          }
      })
  }
  return (
    <AuthLayout>
        <div className="_smd_login_card">
            <h3>Log in to your account</h3>
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
              onSubmit={handleSubmit(onSubmit, onError)} 
              className="w-100"
            >
              <div className="_smd_form_group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email"
                    {...register("email",
                      {
                          required: 'Email is required.'
                      }
                    )}  
                    placeholder="Email Address" 
                  />
              </div>
              <div className="_smd_form_group">
                  <label htmlFor="email">Password</label>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    {...register("password",
                      {
                          required: 'Password is required.'
                      }
                    )} 
                  />
              </div>
              <button 
                className="bg-black text-center justify-content-center mt-3 mb-4"
                >LOGIN</button>
            </form>

            <Link href="/">
                <a>Forgot your password?</a>
            </Link>
            <Link href="/signup">
                <a className="mt-1 mb-2">Don’t have an account? Sign up</a>
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
  //           <h1 className="text-center text-white fs-1 mt-2">Login</h1>
  //           <div>
  //             <label htmlFor="email">Email</label>
  //             <input
  //               className='text-lowercase'
  //               {...register("email",
  //                 {
  //                     required: 'Email is required.'
  //                 }
  //               )}  
  //               type="email"
  //               id="email"
  //               placeholder="Enter your Email"
  //             />
  //           </div>
  //           <div>
  //             <label htmlFor="password">Password</label>
  //             <input
  //               type="password"
  //               id="password"
  //               {...register("password",
  //                 {
  //                     required: 'Password is required.'
  //                 }
  //               )}  
  //               placeholder="Enter Your password"
  //             />
  //           </div>
  //           <button className="my-2 mt-4">Login</button>
  //         </form>
  //       </div>
  //     </Layout>
  //   </>
  // );
};

export default Login;
