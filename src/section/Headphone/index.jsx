import React from "react";
import { MoveRight } from "lucide-react";
const Headphone = () => {
  return (
    <section>
      <div className="container mx-auto my-10">
        <div className="relative overflow-hidden rounded-3xl">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-3xl"
            src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/video-07.mp4"
          ></video>
          <div className="absolute inset-0 flex flex-col gap-2 py-10 justify-end  px-10">
            <h2 className="font-inter text-white text-[56px] font-medium">
              Relish the Resonance of <br /> Refined Headphone
            </h2>
            <h3 className="text-[18px] font-inter text-[#e5e3e3] font-light">
              Experience unmatched audio clarity with crafted headphones.
            </h3>
            <h4 className=" text-[#e5e3e3] mt-5 flex gap-2">
              Shop Now <MoveRight />{" "}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headphone;
