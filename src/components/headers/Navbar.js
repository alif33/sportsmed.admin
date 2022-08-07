import Link from 'next/link';
import SearchIcon from '../svg/SearchIcon';
import { useRouter } from "next/router";


const Navbar = () => {

    const router = useRouter();
    const navMenus = ['NFL', 'NBA', 'MLB', 'WATCH', 'PODCAST'];

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black _smd_navbar_border _smd_navbar">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="/images/icon/logo.png" alt="" />
                        </a>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {
                                navMenus.map((menu, index)=>{
                                    return(
                                        <li key={ index } className={`nav-item _smd_nav_item ${ router.pathname.split('/')[1] === menu.toLocaleLowerCase() ? 'active': '' }`}>
                                            <Link href={`/${ menu.toLocaleLowerCase() }`}>
                                                <a className="nav-link">{ menu }
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn  my-2 my-sm-0" type="submit"><SearchIcon /></button>
                        </form>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;