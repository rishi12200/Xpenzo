import "./App.css";
import SignInPage from "./components/SignInPage";
import Dashboard from "./components/Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newUser" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
