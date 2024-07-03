import React, { useRef } from "react";
import Header from "./header";
import Furniture from "./furniture";
import HeaderDown from "./headerDown";
import SectionCard from "./sectionCard";
function HomePage({ furniture, chair, furnitureRef, furnitureChairRef }) {

  const scrollToComponent = () => {
    furnitureRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <Header scrollToComponent={scrollToComponent} />
      <SectionCard />
      <div ref={furnitureRef}>
        <Furniture furnitureChairRef={furnitureChairRef} furnitureRef={furnitureRef} furniture={furniture} chair={chair}/>
      </div>
      <HeaderDown scrollToComponent={scrollToComponent} />
    </div>
  );
}

export default HomePage;
