"use client";

import { MotionDiv } from "@/components/Motion/MotionDiv";
import { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "motion/react";


const Rose = () => {
  // const [scrollY, setScrollY] = useState(0);


  // const { scrollYProgress } = useScroll();

  // const xMove = useTransform(scrollYProgress, [0, 1], [0, window.innerWidth / 2]); // Starts in the middle and moves horizontally
  // const yMove = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight / 2]); // Vertical movement downwards


  return (
    <MotionDiv 
      className="rose"
      style={{
        // x: xMove, // Use the calculated xMove for left-right movement
        // y: yMove, // Vertical movement

        transition: "transform 0.1s ease-out" // Optional smooth transition
      }}

    >
    <div className="flower">
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
      <div className="petal"></div>
    </div>
    <div className="leaf">
      <div className="stem"></div>
      <div className="leafs"></div>
      <div className="leafs"></div>
    </div>
  </MotionDiv>
  );
};

export default Rose;
