import * as React from "react";
import Footer from "../component/Footer";
import multicolor from "../slider/multicolor.png";
import red from "../slider/red.png";
import yellow from "../slider/yellow.png";
import green from "../slider/green.png";
import liteblue from "../slider/liteblue.png";
import blue from "../slider/blue.png";
import violet from "../slider/violet.png";

export default function Home() {
  return (
    <div>
      <main className="slider">
        <img className="slider-img1" src={multicolor} alt="emblem" />
        <img className="slider-img2" src={red} alt="" />
        <img className="slider-img3" src={yellow} alt="" />
        <img className="slider-img4" src={green} alt="" />
        <img className="slider-img5" src={liteblue} alt="" />
        <img className="slider-img6" src={blue} alt="" />
        <img className="slider-img7" src={violet} alt="" />
        <img className="slider-img8" src={multicolor} alt="" />
      </main>
      <Footer></Footer>
    </div>
  );
}
