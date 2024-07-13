import React, { useRef } from "react";
import Header from "./header";
import SectionCard from "./sectionCard";
import HeaderDown from "./headerDown";
function HomePage({ furnitureRef }) {

  const scrollToComponent = () => {
    furnitureRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <Header scrollToComponent={scrollToComponent} />
      <div ref={furnitureRef}>
        <SectionCard furnitureRef={furnitureRef}/>
      </div>
      <HeaderDown scrollToComponent={scrollToComponent} />
    </div>
  );
}

export default HomePage;
