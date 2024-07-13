import React from 'react';

function productItem(props) {
    return (
        <div className="flex bg-white">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto my-16">
            <h1 className="text-[24px] text-color">
              What makes our retreat reputation
            </h1>
            <div className="grid w-full grid-cols-3 grid-rows-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-center">
              <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="bonfire-outline"></ion-icon>
                </p>
                <p className="text-[20px] text-color">Accommodation:</p>
                <p className="text-[16px] text-color">
                  Relax in comfortable accommodations with stunning lake views.
                  Shared comfortable dormitories for 2 persons, all designed to
                  provide a peaceful and restful stay.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="nutrition-outline"></ion-icon>
                </p>
                <p className="text-[20px] text-color">Dining:</p>
                <p className="text-[16px] text-color">
                  Enjoy delicious, healthy meals made with fresh, local
                  ingredients. Our menu caters to various dietary needs,
                  ensuring everyone is nourished and energized.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="flower-outline"></ion-icon>
                </p>
                <p className="text-[20px] text-color">
                  Activities and Excursions:
                </p>
                <p className="text-[16px] text-color">
                  Beyond yoga, immerse yourself in the local culture and
                  adventure with options such as swimming and exploring the
                  surrounding area.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="cash-outline"></ion-icon>
                </p>
                <p className="text-[20px] text-color">Pricing and Packages:</p>
                <p className="text-[16px] text-color">
                  - Early Bird Special: 15900 KG SOMS (Book by August 1) -
                  Regular Price: 18200 KG SOMS - Included: Accommodation, meals
                  (breakfast, lunch, dinner), all yoga sessions, transportation.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="people-outline"></ion-icon>
                </p>
                <p className="text-[20px] text-color">Testimonials:</p>
                <p className="text-[16px] text-color">
                  - Stunning Location: Enjoy yoga on the serene shores of
                  Issyk-Kul Lake, surrounded by nature's beauty. - Diverse Yoga
                  Styles: Explore different yoga styles and breathing techniques
                  tailored to all levels. - Holistic Experience: Combine
                  physical practice with meditation, relaxation, and personal
                  growth.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
                <p className="text-[38px] h-[38px]">
                  <ion-icon name="cash-outline"></ion-icon>
                </p>
                <p className="text-[20px] text-color">Retreat Highlights:</p>
                <p className="text-[16px] text-color">
                  "This retreat was life-changing! The location, the yoga
                  sessions, and Anna's guidance were all perfect." - Sarah, past
                  yoga participant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default productItem;