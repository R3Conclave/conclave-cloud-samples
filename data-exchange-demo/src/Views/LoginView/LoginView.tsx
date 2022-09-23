import React from "react";
import { useNavigate } from "react-router";
import logo2 from "../../Assets/Conclave_logo_master_b&r.svg";
import "./LoginView.scss";

const USER1 = "BARCLAYS";
const USER2 = "LLOYDS";
const USER3 = "HSBC";

const LoginView: React.FC = () => {
  const history = useNavigate();

  const handleLogin = (user: string) => {
    sessionStorage.setItem("user", `${user}`);

    history("/transaction");
  };

  return (
    <section className="login-view">
      <section className="login-section">
        <section className="header-section">
          <h1>DATA EXCHANGE DEMO</h1>
          <div className="line"></div>
        </section>
        <section className="buttons-section">
          <button
            onClick={() => {
              handleLogin(USER1);
            }}
          >
            {USER1}
          </button>
          <button
            onClick={() => {
              handleLogin(USER2);
            }}
          >
            {USER2}
          </button>
          <button
            onClick={() => {
              handleLogin(USER3);
            }}
          >
            {USER3}
          </button>
        </section>
      </section>
      <img className="conclave-logo" src={logo2} alt="logo" />
    </section>
  );
};

export default LoginView;
