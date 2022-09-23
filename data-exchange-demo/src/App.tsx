import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainView from "./Views/MainView/MainView";
import ProtectedRoute from "./Routes/ProtectedRoutes";
import LoginView from "./Views/LoginView/LoginView";
import TransactionView from "./Views/TransactionView/TransactionView";
import ReportsView from "./Views/ReportsView/ReportsView";
import EnclaveView from "./Views/EnclaveView/EnclaveView";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<MainView />}>
              <Route path="/transaction" element={<TransactionView />} />
              <Route path="/reports" element={<ReportsView />} />
              <Route path="/enclave" element={<EnclaveView />} />
            </Route>
          </Route>
          <Route path="/" element={<LoginView />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
