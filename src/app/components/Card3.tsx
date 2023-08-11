"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Card3() {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to("#box3", {
      y: -500,
      scrollTrigger: {
        scrub: true,
        trigger: "#box3",
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
            id="box3"
            ref={boxRef}
            src="Cube-1.svg"
            className="justify-center mt-48"
          />
        </div>
      </div>
      <div className="flex-1 flex-col justify-end ">
        <p className=" text-4xl mx-32 mt-32">เจอลัง</p>
        <p className="text-l mx-32 my-8">
          โมเดล เกสต์เฮาส์ลีกเอ๊าะ ไตรมาส แตงโมมาเฟียเยอบีร่าแอ็คชั่นบ๊อกซ์
          อุตสาหการบ๊อบ สะเด่าเอ็กซ์โปบุ๋นไรเฟิลโนติส น็อกฮอตดอกแช่แข็งอุปนายก
          เท็กซ์ราเมน เคลม แคทวอล์ค ซีดานแอดมิชชั่นโหลนท็อปบู๊ทเห็นด้วย
          บิ๊กมาร์ต ฮิตริคเตอร์ ซีดาน ซูชิโฟล์คโปรเจกต์เพรียวบาง
          แอ็คชั่นบร็อกโคลี
        </p>
      </div>
    </div>
  );
}
