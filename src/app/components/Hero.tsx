"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Hero() {
  const donutRef = useRef(null);

  ("use client");
  useEffect(() => {
    gsap.to("#donut1", {
      y: -200,
      scrollTrigger: {
        scrub: true,
        trigger: "#donut1",
        start: "top top",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <div className="flex flex-row devide-x bg-slate-300 px-16 py-16 h-full font-IBMPlexSansThai">
      <div className="flex mx-16 ">
        <img id="donut1" ref={donutRef} src="SuperToroid-2.svg"></img>
      </div>
      <div>
        <h1 className=" text-[150px] tracking-tighter leading-tight mt-32">
          {" "}
          โดนัท{" "}
        </h1>
        <h1 className=" text-[72px] tracking-tighter leading-tight mt-26">
          {" "}
          หายไปไหนวะ?{" "}
        </h1>
      </div>
    </div>
  );
}
