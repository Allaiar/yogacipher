import React from "react";
import rightimg from "./img/photo_5_2024-01-16_15-53-01.jpg";
import "./style.css"

function Header({ scrollToComponent }) {
  return (
    <header className="header lg:flex justify-center lg:mt-12">
      <div className="header-left flex flex-col justify-between p-[6vw]">
        <div className="flex flex-col gap-y-8 items-start">
          <h1 className="header-title lg:w-[35vw]">
            Индивидуальный дизайн в каждой детали – ваш дом с нами
          </h1>
          <button
            onClick={scrollToComponent}
            className="header-button text-[16px] py-[16px] px-[32px] hidden lg:flex"
          >
            Посмотреть коллекцию
          </button>
        </div>
        <div>
          <p className="header-text font-sans lg:w-[40vw] mt-16">
            Погрузитесь в уют и тепло дерева с нашей коллекцией. Мы предлагаем
            индивидуальный дизайн в каждой детали, создавая мебель, которая
            привносит уникальность в ваш дом. Откройте новую эру стиля с нами.
          </p>
          <button
            onClick={scrollToComponent}
            className="header-button text-[16px] py-[16px] px-[32px] hidden max-lg:flex w-[100%] text-center justify-center mt-10"
          >
            Посмотреть коллекцию
          </button>
        </div>
      </div>
      <div className="header-right hidden lg:flex">
        <img src={rightimg} alt="img" className="w-[40vw]" />
      </div>
    </header>
  );
}
export default Header;
