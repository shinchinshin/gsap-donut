"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Card2() {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to("#box2", {
      y: -500,
      scrollTrigger: {
        scrub: true,
        trigger: "#box2",
        start: "bottom bottom",
        end: "top top",
      },
    });
  }, []);

  return (
    <div className="flex flex-row devide-x font-IBMPlexSansThai">
      <div className="flex-1 justify-end">
        <p className=" text-4xl mx-32 mt-32">เจอยา</p>
        <p className="text-l mx-32 my-8">
          สุนทรีย์ไทยแลนด์ ฮาร์ดแบด สะเด่า
          เบอร์รีกราวนด์แมนชั่นเชอร์รี่ทาวน์เฮาส์ เคสอ่อนด้อยเท็กซ์
          เซอร์วิสสตีลมาร์คนอมินี อุตสาหการลาเต้รามาธิบดี โปรโมเตอร์เฝอ
          อันเดอร์ศิลปวัฒนธรรม เฮีย เคลียร์ม็อบเครปก่อนหน้า หมายปอง
          แครกเกอร์เซลส์แมนโคโยตีบอมบ์ สติกเกอร์ เวิร์ค ไวอะกร้า
        </p>
      </div>
      <div className="flex-1 h-[40rem] bg-slate-500 w-1/2 ">
        <div className="flex justify-center ">
          <img id="box2" ref={boxRef} src="Pill.svg" className="mt-48" />
        </div>
      </div>
    </div>
  );
}
