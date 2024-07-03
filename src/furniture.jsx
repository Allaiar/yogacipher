import React, { useState } from "react";
import FurnitureItem from "./furnitureItem";
import Chair from "./chair";
import "./style.css"
import "animate.css";

function Furniture({ furniture, chair, furnitureChairRef }) {
  const [showAll, setShowAll] = useState(false);
  const [showAllChairs, setShowAllChairs] = useState(false);
  const itemsToShow = showAll ? furniture : furniture.slice(0, 4);
  const itemsToShowChairs = showAllChairs ? chair : chair.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const toggleShowAllChairs = () => {
    setShowAllChairs(!showAllChairs);
  };

  return (
    <div>
      <div className="grid-container animate__animated animate__fadeIn">
        <div>
          <h1 className="text-[46px] italic text-[#2a254b] max-lg:ml-4">
            Столы
          </h1>
          <div className="grid">
            {itemsToShow.map((el) => (
              <FurnitureItem key={el.id} furniture={el} />
            ))}
          </div>
        </div>
        {!showAll ? (
          <div className="flex justify-center mt-4 mb-[7vw]">
            <button
              onClick={toggleShowAll}
              className="headerdown-button text-[16px] py-[16px] px-[32px] text-center justify-center mt-10"
            >
              View collection
            </button>
          </div>
        ) : (
          <div>
            {" "}
            <div className="flex justify-center -mt-4">
              <button
                onClick={() => {
                  toggleShowAll();
                }}
                className="headerdown-button text-[16px] py-[16px] px-[32px] text-center justify-center mt-10"
              >
                Clouse collection
              </button>
            </div>
          </div>
        )}
        <div ref={furnitureChairRef}>
          <h1 className="text-[46px] italic text-[#2a254b] max-lg:ml-4">
            Стулья
          </h1>
          <div className="grid">
          {itemsToShowChairs.map((el) => (
              <Chair key={el.id} chair={el} />
            ))}
          </div>
          {!showAllChairs ? (
            <div className="flex justify-center mt-4 mb-[7vw]">
              <button
                onClick={toggleShowAllChairs}
                className="headerdown-button text-[16px] py-[16px] px-[32px] text-center justify-center mt-10"
              >
                View collection
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <div className="flex justify-center -mt-4">
                <button
                  onClick={() => {
                    toggleShowAllChairs();
                  }}
                  className="headerdown-button text-[16px] py-[16px] px-[32px] text-center justify-center mt-10"
                >
                  Clouse collection
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Furniture;
