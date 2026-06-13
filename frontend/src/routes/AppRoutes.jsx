import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Reports from "../pages/Reports";
import Navbar from "../components/Navbar";
import History from "../pages/History";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Analyzer from "../pages/Analyzer";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/history" element={<History />} />
        <Route path="/dashboard/reports" element={<Reports />} />
        <Route path="/dashboard/analyzer" element={<Analyzer />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;