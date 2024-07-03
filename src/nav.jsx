import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShopCart from "./shopCart";
import "./style.css";
function Nav({ furniture, scrollToComponent, scrollToComponentChair }) {
  const location = useLocation();
  const { itemInCart } = useSelector((state) => state.cart);
  const [cart, setCart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const contactButtonRef = useRef(null);
  const modalRef = useRef(null);
  
  const handleModalOpen = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
    const rect = contactButtonRef.current.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.pageYOffset,
      left: rect.left + window.pageXOffset,
    });
  };

  const handleModalClose = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleModalClose);
    return () => {
      window.removeEventListener("click", handleModalClose);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isModalOpen]);
  const handleCartClick = () => {
    if (itemInCart.length === 0) {
      toast.info("Корзина пуста. Добавьте товары в корзину.");
    } else {
      setCart(true);
    }
  };

  const closeMenu = () => {
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle.checked) {
      menuToggle.checked = false;
    }
  };
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className="nav">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="nav-flex">
        <div className="md:flex hidden w-[30px]"></div>
        <div className="max-md:flex hidden">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="bg-white md:flex md:space-x-4 mt-1 max-[768px]:space-y-2 menu items-center">
            <li className="nav-list-item">
              <Link to="/about">О магазине</Link>
            </li>
            <li className="nav-list-item cursor-pointer">
              <p onClick={scrollToComponent}>Столы</p>
            </li>
            <li className="nav-list-item cursor-pointer">
              <p onClick={scrollToComponentChair}>Стулья</p>
            </li>
            <li className="nav-list-item">
              <button onClick={handleModalOpen} ref={contactButtonRef}>
                Контакты
              </button>
            </li>
            <li className="nav-list-item">
              <Link to="/deliveryInfo">Доставка и сборка</Link>
            </li>
            <div className="w-full"></div>
          </ul>
        </div>
        <div className="logo">
          <Link to="/">
            <h1 className="logo-title">AJAR</h1>
            <p className="logo-subtitle">MEBEL</p>
          </Link>
        </div>
        <div>
          <div
            onClick={handleCartClick}
            className="cursor-pointer text-3xl relative text-black bg-transparent focus:outline-none"
          >
            <ion-icon name="cart-outline"></ion-icon>
            {itemInCart.length > 0 && (
              <span className="count">{itemInCart.length}</span>
            )}
          </div>
        </div>
        {cart && <ShopCart furniture={furniture} setCart={setCart} />}
      </div>
      <div className="br"></div>
      <ul className="justify-center gap-x-8 py-4 nuv-list md:flex hidden">
        <li className="nav-list-item">
          <Link to="/about">О магазине</Link>
        </li>
        <li className="nav-list-item cursor-pointer">
          <p onClick={scrollToComponent}>Столы</p>
        </li>
        <li className="nav-list-item cursor-pointer">
          <p onClick={scrollToComponentChair}>Стулья</p>
        </li>
        <li className="nav-list-item">
          <button onClick={(e) => handleModalOpen(e)} ref={contactButtonRef}>
            Контакты
          </button>
        </li>
        <li ref={modalRef} className="nav-list-item">
          <Link to="/deliveryInfo">Доставка и сборка</Link>
        </li>
      </ul>
      {isModalOpen && (
        <div
          className="fixed z-50"
          style={{ top: modalPosition.top, left: modalPosition.left }}
        >
          <div className="bg-gray-100 px-3 py-1 rounded-br-xl  rounded-bl-xl rounded-tr-xl">
            <div>
              <div className="flex items-center">
                <p className="text-[#2a254b] font-[700]">Гульмиза</p>
                <p className="mt-1 ml-1">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </p>
              </div>
              <a
                href="https://wa.me/+996707178620/"
                className="text-gray-700 transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                +996707178620
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
