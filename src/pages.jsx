import React, { useRef } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
import DeliveryInfo from "./deliveryInfo";
import About from "./about";
import Privacy from "./privacy";
import HomePage from "./homePage";
import PayInfo from "./payInfo";
import ProductItem from "./productItem";
import ProductChair from "./productChair";
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
      <Nav
        scrollToComponentChair={scrollToComponentChair}
        scrollToComponent={scrollToComponent}
      />
      <Routes>
        <Route path="/payInfo" element={<PayInfo />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/deliveryInfo" element={<DeliveryInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<HomePage furnitureRef={furnitureRef} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Page;
