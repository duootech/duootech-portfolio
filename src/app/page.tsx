"use client";

import ContactUs from "@/components/ContactUs";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Hookr from "@/components/Hookr";
import SolveProblem from "@/components/SolveProblem";
import Technologies from "@/components/Technologies";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";

const page = () => {
  return (
    <>
      <div className="">
        <HeroSection />
        <div>
          <WhoWeAre />
          <WhatWeDo />
          <SolveProblem />
          <Hookr />
          <Technologies />
          <FeaturedWork />
          <ContactUs />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
