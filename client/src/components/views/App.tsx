import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import UploadProductPage from "./UploadProductPage/UploadProductPage";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="min-h-screen relative">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/upload" element={<UploadProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
