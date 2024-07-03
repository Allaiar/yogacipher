import React from "react";
import "./style.css"

function HeaderDown({ scrollToComponent }) {
  return (
    <header className="header min-[716px]:flex justify-center mt-20">
      <div className="flex flex-col md:justify-between p-[8vw]">
        <div className="flex flex-col gap-y-2 items-start">
          <h1 className="headerdown-title lg:w-[35vw]">
            Из студии в Лондоне в глобальный бренд с более чем 400 магазинами
          </h1>
          <p className="headerdown-text lg:w-[40vw]">
            Когда мы основали Avion, идея была проста. Создавать мебель высокого
            качества, доступную и доступную для массового рынка.
          </p>
          <p className="headerdown-text lg:w-[40vw]">
            Ручная работа и мебель с любовью — это то, чем мы живем, дышим и
            дизайнируем, чтобы наш бутик в Челси стал центром лондонского
            дизайнерского сообщества.
          </p>
        </div>
        <div>
          <button
            onClick={scrollToComponent}
            className="headerdown-button text-[16px] py-[16px] px-[32px] text-center justify-center mt-10"
          >
            Показать коллекцию
          </button>
        </div>
      </div>
      <div className="header-right relative top-[1px] lg:flex hidden">
        <img src='https://colodu.club/uploads/posts/2022-10/1667207616_16-colodu-club-p-mebel-v-chechne-dizain-vkontakte-16.jpg' alt="img" className="w-[80vw]" />
      </div>
    </header>
  );
}

export default HeaderDown;
