import "./App.css";
import SignInPage from "./components/SignInPage";
import Dashboard from "./components/Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
