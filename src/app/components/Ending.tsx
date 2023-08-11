"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Ending() {
  gsap.registerPlugin(ScrollTrigger);
  const donutRef = useRef(null);

  useEffect(() => {
    gsap.to("#donut2", {
      y: -200,
      opacity: 1,
      scrollTrigger: {
        scrub: true,
        trigger: "#donut2",
        start: "bottom bottom",
        end: "top top",
      },
    });
  }, []);

  return (
    <div className="flex relative bg-slate-300 px-16 py-16 font-IBMPlexSansThai">
      <div id="container" className="">
        <h1 className="flex absolute justify-self-center px-24 text-[150px] mx-32 mt-32">
          {" "}
          จ๊ะเอ๋ตัวเอง!{" "}
        </h1>
      </div>
      <img
        id="donut2"
        ref={donutRef}
        className="flex relative justify-center mt-56 px-24 "
        src="SuperToroid-1.svg"
      ></img>
      <div></div>
    </div>
  );
}
