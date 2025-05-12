import React from "react";
import MemberPanel from "../section/MemberSection";
import BannerSection from "../section/BannerSection";
import CardSection from "../section/CardSection";
import Headphone from "../section/Headphone";
import Sony from "../section/Sony";

const Homethemplate = () => {
  return (
    <div>
      <BannerSection />
      <CardSection />
      <MemberPanel />
      <Headphone />
      <Sony />
    </div>
  );
};

export default Homethemplate;
