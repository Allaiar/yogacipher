import React, { useState } from "react";
import { setItemInCart } from "./redux/cart/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./style.css";
import { Link } from "react-router-dom";
function Chair({ chair }) {
  const dispatch = useDispatch();
  const { itemInCart } = useSelector((state) => state.cart);
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const addInCart = () => {
    const isAlreadyInCart = itemInCart.some((item) => item.id === chair.id);
    if (!isAlreadyInCart) {
      dispatch(setItemInCart(chair));
      setShowAddedToCart(true);
      setTimeout(() => {
        setShowAddedToCart(false);
      }, 2000);
    } else {
      toast.info("Товар уже в корзине");
    }
  };
  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };
  return (
    <div>
      <div className="max-xl:px-4 px-1 max-xl:py-4 overflow-hidden">
        <a href="#">
          <Link onClick={handleScrollToTop} to={`/chair/${chair.id}`}>
            <img
              className="object-cover w-full h-80"
              src={chair.img}
              alt="img"
            />
          </Link>
        </a>
        <div>
          <div className="mt-2">
            <h1 className="chair-title">{chair.title}</h1>
          </div>
          <Link to={`/chair/${chair.id}`}>
            <div>
              <p className="max-xl:pr-6 pr-6 text-[#2A254B]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                aperiam.
              </p>
            </div>
          </Link>
          <div className="price flex justify-between items-end -mt-1">
            <Link to={`/chair/${chair.id}`}>
              <div className="price">
                <p className="text-lg ">{chair.price}</p>
                <p className="text-lg">сом</p>
              </div>
            </Link>
            <button
              onClick={() => addInCart()}
              className="text-lg font-semibold text-white cart-button"
            >
              +
            </button>
            <CSSTransition
              in={showAddedToCart}
              timeout={200}
              classNames="fade-in"
              unmountOnExit
            >
              <div className="added-to-cart">Добавлено в корзину</div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chair;
    