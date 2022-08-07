import Link from 'next/link';
import AuthLayout from "../../src/components/AuthLayout";

const ForgetPassword = () => {
    return (
        <AuthLayout>
            <div className="_smd_login_card">
                <h3>Reset Your Password</h3>

                {/* <div className="w-100 text-start mb-2 ">
                    <Link href="/">
                        <a className="d-flex align-items-center justify-content-start"><Image height='24' width="24" src="/images/icon/chevron-left.png" alt="" />Back</a>
                    </Link>
                </div> */}
            </div>

            <h6 className="my-2 text-center forget-password-desc" >Enter your email adress below and we’ll send you a link with instructions</h6>

            <div className="_smd_login_card">
                <form className="w-100">

                    <div className="_smd_form_group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="emai"
                            placeholder="Email Address"
                        />
                    </div>

                    <button className="bg-black text-center justify-content-center  mt-3 mb-4"> Submit</button>
                </form>
                <Link href="/">
                    <a className="mt-1 mb-2">Remember your password? Login</a>
                </Link>
                <h6 className="my-1 text-center forget-password-desc" ><a href="/">Need Help | FAQ</a></h6>
            </div>
        </AuthLayout>
    );
};

export default ForgetPassword;