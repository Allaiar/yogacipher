import React from "react";
import { useParams, Link } from "react-router-dom";
import { setItemInCart } from "./redux/cart/cartSlice";
import { useDispatch } from "react-redux";

function ProductItem({ chair }) {
  const { id } = useParams();
  const chairItem = chair.find(item => item.id === id);
  const dispatch = useDispatch();

  const addInCart = () => {
    dispatch(setItemInCart(chairItem));
  };

  if (!chairItem) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl bg-white p-8 rounded-md shadow-lg">
        <Link
          to="/"
          className="text-gray-600 hover:text-gray-800 mb-4 inline-block"
        >
          <ion-icon
            name="chevron-back-outline"
            class="text-xl align-middle"
          ></ion-icon>
          <span className="align-middle ml-2">Back</span>
        </Link>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={chairItem.img}
              alt={chairItem.title}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">{chairItem.title}</h1>
              <p className="text-lg mb-6">{chairItem.subtext}</p>
              <div className="flex items-end mb-6">
                <p className="text-4xl font-bold text-[#2A254B]">
                  {chairItem.price}
                </p>
                <span className="text-lg font-bold text-[#2A254B] ml-1">
                  сом
                </span>
              </div>
            </div>
            <button
              onClick={() => addInCart()}
              className="bg-[#2A254B] hover:bg-[#2a254be3] text-white px-6 py-3 rounded-md"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
