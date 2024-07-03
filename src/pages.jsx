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

import Table from "./img/photo_1.jpg";
import Table2 from "./img/photo_2.jpg";
import Table3 from "./img/photo_3.jpg";
import Table4 from "./img/photo_1_2024-01-16_15-53-01.jpg";
import Table5 from "./img/photo_2_2024-01-16_15-41-16.jpg";
import Table6 from "./img/photo_3_2024-01-16_15-53-01.jpg";
import Table7 from "./img/photo_4_2024-01-16_15-53-01.jpg";
import Table8 from "./img/photo_5_2024-01-16_15-53-01.jpg";
import Table9 from "./img/photo_6_2024-01-16_15-53-01.jpg";

import Chair from "./img/photo_1_2024-01-15_13-01-47.jpg";
import Chair2 from "./img/photo_2_2024-01-15_13-01-47.jpg";
import Chair3 from "./img/photo_3_2024-01-15_13-01-47.jpg";
import Chair4 from "./img/photo_4_2024-01-15_13-01-47.jpg";
import Chair5 from "./img/photo_5_2024-01-15_13-01-47.jpg";
import Chair6 from "./img/photo_6_2024-01-15_13-01-47.jpg";
import Chair7 from "./img/photo_7_2024-01-15_13-01-47.jpg";
import Chair8 from "./img/photo_8_2024-01-15_13-01-47.jpg";
import Chair9 from "./img/photo_9_2024-01-15_13-01-47.jpg";
import Chair10 from "./img/photo_10_2024-01-15_13-01-47.jpg";
import Chair11 from "./img/photo_1_2024-01-16_15-41-16.jpg";
import Chair12 from "./img/photo_2_2024-01-16_15-41-16.jpg";
import Chair13 from "./img/photo_3_2024-01-16_15-41-16.jpg";
import Chair14 from "./img/photo_4_2024-01-16_15-41-16.jpg";
import Chair15 from "./img/photo_5_2024-01-16_15-41-16.jpg";
import Chair16 from "./img/photo_6_2024-01-16_15-41-16.jpg";

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
  const furniture = [
    {
      img: Table,
      title: "The Dandy chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 11000,
      id: "f0",
    },
    {
      img: Table2,
      title: "Rustic Vase Set",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "chair",
      price: 110,
      id: "f1",
    },
    {
      img: Table3,
      title: "The Silky Vase",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "f2",
    },
    {
      img: Table4,
      title: "The Lucy Lamp",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "f3",
    },
    {
      img: Table9,
      title: "The Dandy chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "chair",
      price: 110,
      id: "f4",
    },
    {
      img: Table6,
      title: "Rustic Vase Set",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: 5,
    },
    {
      img: Table7,
      title: "table",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "f6",
    },
    {
      img: Table8,
      title: "table",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "chair",
      price: 110,
      id: "f7",
    },
  ];
  const chair = [
    {
      img: Chair,
      title: "Chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "c0",
    },
    {
      img: Chair2,
      title: "Chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "c1",
    },
    {
      img: Chair3,
      title: "Chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "c2",
    },
    {
      img: Chair4,
      title: "Chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "c3",
    },
    {
      img: Chair5,
      title: "Chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "c4",
    },
    {
      img: Chair7,
      title: "Chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "c5",
    },
    {
      img: Chair9,
      title: "Chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "c6",
    },
    {
      img: Chair11,
      title: "Chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "c7",
    },
    {
      img: Chair14,
      title: "Chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "c8",
    },
    {
      img: Chair15,
      title: "Chair",
      subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      view: "table",
      price: 110,
      id: "c9",
    },
  ];

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
        <Route
          path="/"
          element={
            <HomePage
              furnitureChairRef={furnitureChairRef}
              furnitureRef={furnitureRef}
              furniture={furniture}
              chair={chair}
            />
          }
        />
        <Route path="/:id" element={<ProductItem furniture={furniture} />} />
        <Route path="/chair/:id" element={<ProductChair chair={chair} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Page;
