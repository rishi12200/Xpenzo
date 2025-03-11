import "./App.css";
import SignInPage from "./components/SignInPage";
import Dashboard from "./components/Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newUser" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
