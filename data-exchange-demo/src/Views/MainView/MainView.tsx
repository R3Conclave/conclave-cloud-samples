import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import conclaveLogo from "../../Assets/Asset_1.svg";
import "./MainView.scss";

const MainView: React.FC = () => {
  const [dateYear] = useState(new Date().getFullYear());
  const history = useNavigate();
  const location = useLocation();

  return (
    <>
      <section className="main-section">
        <nav className="navbar-section">
          <div>
            <h1>Data Exchange</h1>
            <ul className="nav-list">
              <li>
                <svg
                  className={`link-icon ${
                    location.pathname === "/transaction" ? "active" : ""
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
                  />
                </svg>
                <Link
                  className={`link ${
                    location.pathname === "/transaction" ? "active" : ""
                  }`}
                  to={"/transaction"}
                >
                  transactions
                </Link>
              </li>
              <div className="navigation-divider"></div>
              <li>
                <svg
                  className={`link-icon ${
                    location.pathname === "/reports" ? "active" : ""
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M7,20H9V14H7V20M11,20H13V12H11V20M15,20H17V16H15V20Z"
                  />
                </svg>
                <Link
                  className={`link ${
                    location.pathname === "/reports" ? "active" : ""
                  }`}
                  to={"/reports"}
                >
                  reports
                </Link>
              </li>
              <div className="navigation-divider"></div>

              <li>
                <svg
                  className={`link-icon ${
                    location.pathname === "/enclave" ? "active" : ""
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"
                  />
                </svg>
                <Link
                  className={`link ${
                    location.pathname === "/enclave" ? "active" : ""
                  }`}
                  to={"/enclave"}
                >
                  enclave
                </Link>
              </li>
            </ul>
          </div>
          <section className="copyright-information">
            <img className="conclave-logo" src={conclaveLogo} alt="logo" />
            <p className="copyright-date">
              <small>&#169; {dateYear} R3. All rights reserved.</small>
            </p>
          </section>
        </nav>

        <section className="data-section">
          <div className="user-info">
            <div>
              <svg
                className="user-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                />
              </svg>
              <h2>{sessionStorage.getItem("user")}</h2>
            </div>
            <button
              className="logout-button"
              onClick={() => {
                sessionStorage.removeItem("user");
                history("/");
              }}
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z"
                />
              </svg>
            </button>
          </div>
          <section className="data-container">
            <Outlet />
          </section>
        </section>
      </section>
    </>
  );
};
export default MainView;
