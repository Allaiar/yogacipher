import React, { useRef } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import HomePage from "./homePage";
import "animate.css";

function Page() {
  const navigate = useNavigate();
  const furnitureRef = useRef(null);
  const furnitureChairRef = useRef(null);

  const scrollToComponentChair = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      furnitureChairRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToComponent = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      furnitureRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <Routes>
        <Route path="/" element={<HomePage furnitureRef={furnitureRef} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Page;
