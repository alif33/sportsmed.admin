import { Menu, } from "react-feather";

export default function Navbar({ toggle, setToggle }) {
  return (
    <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl d-xl-none">
      <div className="navbar-container d-flex content">
        <div className="bookmark-wrapper d-flex align-items-center">
          <ul className="nav navbar-nav d-xl-none">
            <li className="nav-item">
              <a
                onClick={() => setToggle((prev) => !prev)}
                className={`nav-link ${toggle ? " menu-toggle is-active" : "nav-link menu-toggle"
                  }`}
                href="#"
              >
                <Menu />
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav">
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link nav-link-style">
                <i className="ficon" data-feather="moon" />
              </a>
            </li>
          </ul>
        </div>
        {/* <ul className="nav navbar-nav align-items-center ms-auto">
          <li className="nav-item dropdown dropdown-user">
            <a
              className="nav-link dropdown-toggle dropdown-user-link"
              id="dropdown-user"
              href="#"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="user-nav d-sm-flex d-none">
                <span className="user-name fw-bolder">Deepak Chona</span>
                <span className="user-status">Admin</span>
              </div>
              <span className="avatar">
                <img
                  className="round"
                  src="/images/about/profile.png"

                  alt="avatar"
                  height={40}
                  width={40}
                />
              </span>
            </a>
      
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
