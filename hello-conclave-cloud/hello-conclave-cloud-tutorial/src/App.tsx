import React, { useState } from "react";
import "./App.scss";
import logo1 from "./Assets/Conclave_logo_master.w&r_Conclave_logo_b&r.svg";
import conclaveConfig from "./ConclaveCloud";

function App() {
  const [dateYear] = useState(new Date().getFullYear());
  const [input, setInput] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [infoText, setInfoText] = useState<string>("Enter a name to say hello");

  const sendMessage = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInfoText("Invoking function...");
    try {
      let response: any = "";

      // Add Function Call here.
      response = await conclaveConfig.functions.call(
        "sayHello",
        "60C5AEFCE46A44163467EC82C204AB5207B780A45527A65A6580886AECAC49D4",
        [input]
      );
      //

      setMessage(response ? response.return : "");
      setInput("");
      setInfoText("Enter a name to say hello");
      return response;
    } catch (error) {
      setInput("");
      setInfoText("Something went wrong");
      throw error;
    }
  };

  return (
    <main>
      <header className="header">
        <img src={logo1} className="conclave-logo" alt="logo" />
        <h1>Hello Conclave Cloud</h1>
      </header>
      <section className="main-container">
        <ul className="messages-section">
          {message.length === 0 ? (
            <li className="say-hello">{infoText}</li>
          ) : (
            <li className="message">{message}</li>
          )}
        </ul>
        <form className="input-section" onSubmit={sendMessage}>
          <input
            className="input"
            type="text"
            placeholder="Enter Name"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />

          <button className="submit-button" type="submit">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M8,7.71V11.05L15.14,12L8,12.95V16.29L18,12L8,7.71Z"
              />
            </svg>
          </button>
        </form>
      </section>
      <p className="copyright">
        <small>&#169; {dateYear} R3. All rights reserved.</small>
      </p>
    </main>
  );
}

export default App;
