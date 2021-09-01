import React from "react";

import Hero from "../../containers/Hero/Hero";
import Footer from "../../containers/Footer/Footer";
import HIW from "../../containers/HIW/HIW";
import Swips from "../../containers/Swips/Swips";

const Home = () => {
  return (
    <div>
      <Hero />
      <HIW />
      {/* <Swips />
      <Footer /> */}
    </div>
  );
};

export default Home;
