import React from "react";
import { clsx } from "clsx";
import styles from "./style.module.scss"

const BannerSection = () => {
  return (
    <div>
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-2 gap-6">
            <div className="leftCard w-[100%] h-[100%] rounded-2xl overflow-hidden">
                <div className="cardImg relative">
                    <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/banner-06.jpg" alt="" />
                    <div className={clsx(styles.topPosition,"content")}>
                        <h2 className="text-[14px]">Elite Quality</h2>
                        <h3>Where Excellence Meets Deep Resonance</h3>
                        <p>Fynode: Redefining Modern Tech</p>
                        <button>Shop Now </button>
                    </div>
                </div>
            </div>
            <div className="rightCard leftCard w-[100%] h-[100%] rounded-2xl overflow-hidden">
                <div className="cardImg relative">
                    <img src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/banner-05.jpg" alt="" />
                    <div className={clsx(styles.bottomPosition,"content")}>
                        <h2>Elite Quality</h2>
                        <h3>Where Excellence Meets Deep Resonance</h3>
                        <p>Fynode: Redefining Modern Tech</p>
                        <button>Shop Now </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
