import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import LoginPopup from "./popup/LoginPopup";
import RegisterPopup from "./popup/RegisterPopup";
const Navbar = () => {
  const router = useRouter();
  const cookie = new Cookies();

  const toggle = () => {
    if (document.querySelector(".Navbar").style.display === "block") {
      document.querySelector(".Navbar").style.display = "none";
    } else {
      document.querySelector(".Navbar").style.display = "block";
    }
  };

  const _info = cookie.get("_info");

  const handleLogout = () => {
    cookie.remove("_info", {path: "/"});
    toast.success("Logout success");
    router.push("/");
  };

  
  return (
    <>
      <div className="container-fluid" style={{ background: "black" }}>
        <div className="">
          <header className="d-flex flex-wrap align-items-center justify-content-between justify-content-md-around py-2 ">
            <div className="NavLogoWarpper ">
              <div className="navLogo cursor-pointer">
                <Link href="/">
                  <img src="/images/logo.jpg" alt="logo" />
                </Link>
              </div>
              <div className="navLogoTitle">
                <div className="navlogoSocial-wrapper">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fab fa-tiktok"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                  <p>Data-Driven Injury Analysis</p>
                  <p>Deepak Chona, MD</p>
                </div>
              </div>
            </div>
            <div className="MenuIcon">
              <i onClick={toggle} className="fa-solid fa-bars"></i>
            </div>
            <div className="Navbar">
              <ul className="nav col-md-8 d-flex mb-2 justify-content-center mb-md-0 text-white flex-dirction-row">
                <div className="navSearchBar">
                  <input type="text" placeholder="Search" />
                  <button>Search</button>
                </div>
                <div className="d-flex linkBox">
                  <li>
                    <Link href="/nfl" className="nav-link  text-white">
                      NFL
                    </Link>
                  </li>
                  <li>
                    <Link href="/nba" className="nav-link  text-white">
                      NBA
                    </Link>
                  </li>
                  <li>
                    <Link href="/mlb" className="nav-link  text-white">
                      MLB
                    </Link>
                  </li>
                  <li>
                    <Link href="/watch" className="nav-link px-2 text-white">
                      Watch
                    </Link>
                  </li>
                  <li>
                    <Link href="/podcast" className="nav-link px-2 text-white">
                      Podcast
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="nav-link px-2 text-white">
                      About
                    </Link>
                  </li>
                </div>
              </ul>
              <div className="col-md-4 ">
                {_info?.token ? (
                  <div className="d-flex align-items-center nabBtn">
                    <Link href="/user/dashboard">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-2"
                      >
                        Dashboard
                      </button>
                    </Link>

                    <button
                      onClick={() => handleLogout()}
                      type="button"
                      className="btn btn-outline-secondary me-2"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <div className="d-flex  align-items-center nabBtn">
                    <LoginPopup />
                    <RegisterPopup />
                  </div>
                )}
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;
