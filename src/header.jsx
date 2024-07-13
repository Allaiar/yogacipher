import React from "react";
import "./style.css";

function Header({ scrollToComponent }) {
  return (
    <header
      id="up"
      className="bg-center bg-fixed bg-no-repeat bg-cover h-screen relative"
    >
      <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center">
        <div className="mx-2 text-center">
          <h1 className="text-gray-100 font-extrabold text-4xl xs:text-7xl md:text-9xl">
            <span className="text-white">Issyk-Kul</span> 4-Day Yoga Retreat
          </h1>
          <div className="inline-flex">
            <a href="https://wa.me/+996552708069?text=I%20want%20to%20learn%20more%20about%20the%20Issyk-Kul%204-Day%20Yoga%20Retreat">
              <button className="p-[2vw] my-14 mx-2 bg-transparent border-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-slate-300 rounded hover:text-slate-700 hover:bg-slate-200 font-bold text-slate-300 shadow-md transition duration-500 md:text-6xl">
                Register Now
              </button>
            </a>
          </div>
          <p onClick={scrollToComponent} className=" cursor-pointer bounce text-center text-white text-6xl ">
          <ion-icon name="chevron-down-outline"></ion-icon>
          </p>
        </div>
      </div>
    </header>
  );
}
export default Header;
