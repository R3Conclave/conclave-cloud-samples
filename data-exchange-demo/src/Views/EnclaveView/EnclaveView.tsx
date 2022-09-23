import React, { useState } from "react";
import "./EnclaveView.scss";

const EnclaveView: React.FC = () => {
  const [isSecure, setIsSecure] = useState<boolean>(true);
  return (
    <>
      <section className="reports-options">
        <div className="wrapper-header">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"
            />
          </svg>
          <h3 className="reports-header">ENCLAVE ATTESTATION</h3>
        </div>
      </section>
      <section className="attestation-report">
        <div className="wrapper-header attestation">
          <div className="attestion-info">
            <p>
              <span className="attestation-label">Auditor</span> <br /> Enclave
              Auditors Corp
            </p>
            <p>
              <span className="attestation-label">Host </span>
              <br />
              Enclave Host Ltd.
            </p>
            <p>
              <span className="attestation-label">Vendor </span>
              <br />
              Enclave Solutions
            </p>
            <p>
              <span className="attestation-label">Version </span>
              <br />
              1.0.0
            </p>
          </div>
          <div className="attestion-description">
            <svg
              viewBox="0 0 24 24"
              className={isSecure ? "secure" : "unsecure"}
            >
              <path
                fill="currentColor"
                d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"
              />
            </svg>
            <h4 className={isSecure ? "secure" : "unsecure"}>
              {isSecure ? "Connection Secure" : "Connection Unsecure"}
            </h4>
            <p>
              <span className="attestation-label">Title </span>
              <br /> Transaction Risk Analytics Enclave
            </p>
            <p>
              <span className="attestation-label">Purpose </span>
              <br /> This enlcave calculates and returns risk analytics based on
              provided data from clients.
            </p>
          </div>
        </div>
        <div className="enclave-info">
          <pre>
            <code>
              Code Hash:
              EF55275A618CBD746C6B2E3B6358A53B928B8AA7AE753371A9458AB4E0EC5E53{" "}
              {`\n`}
              Hardware: false | Type: MOCK {`\n`}
              Product ID: 1 {`\n`}
              Revocation Level: 0 {`\n`}
              Code signing key hash:
              000000000000000000000000000000000000000000000000
            </code>
          </pre>
        </div>
      </section>
    </>
  );
};
export default EnclaveView;
