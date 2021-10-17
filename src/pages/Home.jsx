import React from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";

import * as Config from "./../constants/Config";

const Home = () => {
  return (
    <>
      <HeroSlide />

      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to={`/${Config.HOME_PAGE}/movie`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
