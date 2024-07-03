import React from "react";
import { useDispatch } from "react-redux";

import { deleteItemInCart } from "./redux/cart/cartSlice";

function CartItems({ item }) {
  const dispatch = useDispatch();

  const deleteItem = (item) => {
    dispatch(deleteItemInCart(item));
  };
  return (
    <div className="flex mb-[1vw] rounded-[1vw] bg-white p-[1vw] shadow-md pr-4">
      <img
        style={{ width: "11vw", height: "100%" }} 
        src={item.img}
        alt="product-image"
        className="object-cover rounded-md"
      />
      <div className="ml-4 flex w-full justify-between">
        <div className="mt-0">
          <h1 className="cart-title">{item.title}</h1>
          <p className="text-[#726e8d] cart-text w-[90%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="justify-between space-y-6 mt-0 sm:block space-x-6">
          <div className="flex space-x-8 items-center">
            <div className="price text-[2.3vw]">
              <p className="">{item.price}</p>
              <p>сом</p>
            </div>
            <button onClick={() => deleteItem(item.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-[4vw] font-medium delete cursor-pointer text-slate-400 duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
