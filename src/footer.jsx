import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer(props) {
  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };
  return (
    <footer className="bg-[#5f728e]">
      <div className="container px-6 pb-6 mx-auto">
        <hr className=" border-[#9cadc7] mb-4"></hr>
        <div className="footer-flex">
          <div>
            <p className="copyright">Copyright 2024 YOGA RETREAT LTD</p>
          </div>
          <div className="icons">
            <a href="https://wa.me/+996552708069?text=I%20want%20to%20learn%20more%20about%20the%20Issyk-Kul%204-Day%20Yoga%20Retreat" className="whatsapp spin-animation">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/yogacipher/"
              className="instagram spin-animation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="https://www.facebook.com/imhereforyoga"
              className="facebook spin-animation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
