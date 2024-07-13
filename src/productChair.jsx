import React from "react";

function productChair(props) {
  return (
    <div>
      <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
        <p className="text-[38px] h-[38px]">
          <ion-icon name="people-outline"></ion-icon>
        </p>
        <p className="text-[20px] text-color">Testimonials:</p>
        <p className="text-[16px] text-color">
          - Stunning Location: Enjoy yoga on the serene shores of Issyk-Kul
          Lake, surrounded by nature's beauty. - Diverse Yoga Styles: Explore
          different yoga styles and breathing techniques tailored to all levels.
          - Holistic Experience: Combine physical practice with meditation,
          relaxation, and personal growth.
        </p>
      </div>
      <div className="flex flex-col items-start gap-3 px-8 py-10 bg-white shadow-main">
        <p className="text-[38px] h-[38px]">
          <ion-icon name="cash-outline"></ion-icon>
        </p>
        <p className="text-[20px] text-color">Retreat Highlights:</p>
        <p className="text-[16px] text-color">
          "This retreat was life-changing! The location, the yoga sessions, and
          Anna's guidance were all perfect." - Sarah, past yoga participant
        </p>
      </div>
    </div>
  );
}

export default productChair;
