import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./sign_up";
import SignIn from "./sign_in";
import Dashboard from "./dashboard";
import Teachers from "./teachers";
import Students from "./students";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </Router>
  );
}
