"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Card1() {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to("#box1", {
      y: -500,
      scrollTrigger: {
        scrub: true,
        trigger: "#box1",
        start: "bottom bottom",
        end: "top top",
      },
    });
  }, []);

  return (
    <div className="flex flex-row devide-x font-IBMPlexSansThai">
      <div className="flex-1 h-[40rem] bg-slate-500 w-1/2">
        <div className="flex justify-center justify-self-center ">
          <img
            id="box1"
            ref={boxRef}
            src="Sphere.svg"
            className="justify-center mt-48"
          />
        </div>
      </div>
      <div className="flex-1 flex-col justify-end ">
        <p className=" text-4xl mx-32 mt-32">เจอลูกบอล</p>
        <p className="text-l mx-32 my-8">
          ครัวซองต์ ไฮเอนด์โปรโมชั่นขั้นตอนน็อค ตุ๊กสเต็ปคอร์รัปชันแอปเปิล
          เกสต์เฮาส์ควีน ทอม แฮมเบอร์เกอร์ปิโตรเคมีโฮลวีต ก๊วนแฟรีรีไซเคิลไกด์
          น้องใหม่บ๊วยม็อบซีดาน พฤหัสเรตติ้ง คอลัมน์เกมส์บ๊อกซ์คอลัมนิสต์วิป
          แครกเกอร์สโตนซานตาคลอสวอร์รูมแรงดูด โมจิฮิปฮอป อาข่าแอสเตอร์บาบูน
          เคลื่อนย้าย เด้อ จอหงวน
        </p>
      </div>
    </div>
  );
}
