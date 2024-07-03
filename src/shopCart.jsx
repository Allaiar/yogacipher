import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "./cartItems";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

function ShopCart({ setCart }) {
  const { itemInCart } = useSelector((state) => state.cart);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const calculateTotal = () => {
    if (!itemInCart || itemInCart.length === 0) return 0;

    const totalPrice = itemInCart.reduce(
      (total, item) => total + item.price,
      0
    );
    const deliveryCost = 200;

    return totalPrice + deliveryCost;
  };

  const handleWhatsAppOrder = () => {
    if (!itemInCart || itemInCart.length === 0) {
      // Cart is empty, do not proceed with the order
      toast.info("Корзина пуста. Добавьте товары перед оформлением доставки.");    }

    const phoneNumber = "+996707178620";
    let message = "Здравствуйте, я хочу заказать следующие товары: \n";

    itemInCart.forEach((item) => {
      message += `${item.title}: ${item.subtext} - Цена: ${item.price} сом\n`;
    });

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="overlay">
      <div className="cart-container">
        <div className="flex flex-col gap-[2vh]">
          <div className="flex justify-between">
          <button onClick={() => setCart(false)} className="back-button">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
          <Link to="/" onClick={() => setCart(false)} className="add-more-link">
            Добавить еще
          </Link>
          </div>
          <div className="cart-items">
            {itemInCart && itemInCart.length > 0 ? (
              itemInCart.map((el) => <CartItems key={el.id} item={el} />)
            ) : (
              <p key="empty-cart" className="empty-cart-text">
                Корзина пуста
              </p>
            )}
          </div>
        </div>
                <div className="cart-content">
          <div className="cart-summary">
            <div className="more-info">
              <div className="total-amount">
                <p className="cart-subtext">Сумма:</p>
                <div className="flex items-center">
                  <p className="cart-count">
                    {itemInCart && itemInCart.length > 0
                      ? itemInCart.reduce(
                          (total, item) => total + item.price,
                          0
                        )
                      : 0}
                  </p>
                  <p className="cart-count ml-1">сом</p>
                </div>
              </div>
            <hr className="my-2" />
              <div className="delivery-info">
                <p className="cart-subtext">Доставка по городу:</p>
                <div className="flex items-center">
                  <p className="cart-count">200</p>
                  <p className="cart-count ml-1">сом</p>
                </div>
              </div>
            </div>
            <hr className="my-2" />
            <div className="total-info">
              <p className="cart-subtext">Итого:</p>
              <div className="flex items-center">
                <p className="cart-count">{calculateTotal()} сом</p>
              </div>
            </div>
          </div>
          <h1 className="text-[1.5vw] -mb-1 text-[#777155]">
            Перейдите на Whatsapp для оформления доставки
          </h1>
          <button
            onClick={handleWhatsAppOrder}
            disabled={!itemInCart || itemInCart.length === 0}
            className={`checkout-btn mt-2 py-[1vw] rounded-[1vw] text-[2vmin] ${
              (!itemInCart || itemInCart.length === 0) && "disabled"
            }`}
          >
            Оформить доставку
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;
