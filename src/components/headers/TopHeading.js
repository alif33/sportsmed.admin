import Link from 'next/link';

const TopHeading = () => {
    return (
        <div className="_smd_top_heading bg-black py-1 align-items-center align-items-lg-start container-fluid pe-3">
            <div className="_smd_top_heading_section _smd_top_social _smd_border-right ">
                <ul className='text-center'>
                    <li><Link href="/">
                        <img src="/images/icon/facebook.png" alt="" />
                    </Link></li>

                    <li><Link href="/"><img src="/images/icon/instragram.png" alt="" /></Link></li>

                    <li><Link href="/"><img src="/images/icon/twtter.png" alt="" /></Link></li>
                </ul>
            </div>
            <div className="_smd_top_heading_section _smd_top_middle">
                <ul className='text-center text-lg-start my-1 my-md-0'>
                    <li><Link href="/">
                        <a>chonasportsmed@gmail.com</a>
                    </Link></li>
                </ul>
            </div>
            <div className="_smd_top_heading_section  _smd_top_reg">
                <ul>
                    <li className="_smd_border-right pe-2"><Link href="/login">
                        <a>Login</a>
                    </Link></li>

                    <li className="_smd_border-right pe-2"><Link href="/signup">
                        Signup
                    </Link></li>

                    <li className='d-flex align-items-center dropdown'>
                        <div className="dropdown-btn"><img src="/images/icon/arrow-down.png" alt="" />En</div>
                        <ul className="dropdown-items">
                            <li>bn</li>
                            <li>en</li>
                        </ul></li>
                </ul>
            </div>
        </div>
    );
};

export default TopHeading;