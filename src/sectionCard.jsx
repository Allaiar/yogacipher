import React from "react";

function SectionCard(props) {
  return (
    <div>
      <div class="container flex flex-col mx-auto bg-white">
        <div class="w-full draggable">
          <div class="container flex flex-col items-center gap-16 mx-auto my-16">
            <h1 className="text-[24px] text-color">Чем отличается наш бренд</h1>
            <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-center">
              <div class="flex flex-col items-start gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="bag-check-outline"></ion-icon>
                </p>
                <p class="text-[20px] text-color">
                  Мебель прямо от производителя{" "}
                </p>
                <p class="text-[16px] text-color">
                  Сделайте заказ до 15:00 и получите свой заказ на следующий
                  день в стандартной комплектации.
                </p>
              </div>
              <div class="flex flex-col items-start gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="construct-outline"></ion-icon>
                </p>
                <p class="text-[20px] text-color">10 лет опыта</p>
                <p class="text-[16px] text-color">
                  Товары ручной работы, изготовленные с настоящей страстью и
                  мастерством
                </p>
              </div>
              <div class="flex flex-col items-start gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="cash-outline"></ion-icon>
                </p>
                <p class="text-[20px] text-color">Непревзойденные цены</p>
                <p class="text-[16px] text-color">
                  За наши материалы и качество лучшей цены вы не найдете нигде.
                </p>
              </div>
              <div class="flex flex-col items-start gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="ribbon-outline"></ion-icon>
                </p>
                <p class="text-[20px] text-color">Гарантия</p>
                <p class="text-[16px] text-color">
                  Мы даем гарантию на мебель от 1го года
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
