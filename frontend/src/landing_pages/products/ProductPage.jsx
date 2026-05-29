import React from "react";
import Hero from "./Hero";
import NavBar from "../NavBar";
import Footer from "../Footer";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Kite from "../../assets/images/Kite.png";
import googlePlay from "../../assets/images/googlePlayBadge.svg";
import appStore from "../../assets/images/appstoreBadge.svg";

import console from "../../assets/images/console.png";

import coin from "../../assets/images/coin.png";

import kiteConnect from "../../assets/images/kiteconnect.png";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imge={Kite}
        ProductName="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDeom="#"
        learnMore="#"
        googlePlay={googlePlay}
        appStore={appStore}
      />
      <RightSection
        image={console}
        ProductName="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="#"
      />

      {/* 2 */}

      <LeftSection
        imge={coin}
        ProductName="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDeom="#"
        googlePlay={googlePlay}
        appStore={appStore}
      />
      <RightSection
        image={kiteConnect}
        ProductName="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="#"
      />  

      <Universe />
    </>
  );
};

export default ProductPage;
