import { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    });
  }, []);


  return (
    <>
      <div
        className={`pace-done vertical-layout vertical-menu-modern navbar-floating footer-static ${windowWidth >= 1200 ? "menu-expanded" : ""
          }  ${toggle ? "menu-open menu-expanded" : " menu-hide"}`}
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Navbar toggle={toggle} setToggle={setToggle} />

        <Sidebar toggle={toggle} setToggle={setToggle} />
        <div className="app-content content ">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper container-xxl p-0">
            {children}
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}