import React from "react";

function HeaderDown({ scrollToComponent }) {
  return (
    <div className="faq-section px-28 pt-28 pb-14 bg-[#5f728e] border-gray-300 text-white">
      <h2 className="text-2xl font-bold mb-4 italic">FAQ:</h2>
      <ul className="space-y-4 italic">
        <li>
          <strong>Do I need to be experienced in yoga?</strong>
          <p>
            No, this retreat is suitable for all levels, from beginners to
            advanced practitioners.
          </p>
        </li>
        <li>
          <strong>What should I bring?</strong>
          <p>
            Yoga mat, comfortable clothing, swimsuit, sunscreen, hat, journal,
            and warm clothes for cooler evenings.
          </p>
        </li>
      </ul>
      <div className="registration-info mt-6 p-4 bg-[#8195b2] border border-gray-300 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Register Now:</h3>
        <p>
          Reserve your spot today and embark on a journey of self-discovery and
          relaxation. For more information and to register, contact us at{" "}
          <strong className="font-bold text-xl">
            <a href="tel:+996552708069">+996552708069</a>
          </strong>
          <span className="mx-1">or email us at</span>
          <strong className="font-bold text-xl">
            <a href="mailto:Yogasifer@gmail.com" className="underline">
              anna_ustinova@yahoo.com
            </a>
          </strong>
          .
        </p>
      </div>
    </div>
  );
}

export default HeaderDown;
