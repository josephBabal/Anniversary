"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeIn } from "@/components/fade-in";


const TextComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const text1 = process.env.NEXT_PUBLIC_TEXT_1;
  const text2 = process.env.NEXT_PUBLIC_TEXT_2;
  const text3 = process.env.NEXT_PUBLIC_TEXT_3;
  const text4 = process.env.NEXT_PUBLIC_TEXT_4;
  const text5 = process.env.NEXT_PUBLIC_TEXT_5;
  const text6 = process.env.NEXT_PUBLIC_TEXT_6;
  const text7 = process.env.NEXT_PUBLIC_TEXT_7;
  const text8 = process.env.NEXT_PUBLIC_TEXT_8;

  const textValues = [text1, text2, text3, text4, text5, text6];

  return (
    <div className="text-container">
      {textValues.map((text, index) => (
        <FadeIn key={index}>
          <p className="copy h5">{text}</p>
        </FadeIn>
      ))}
      
      <FadeIn>
        <p className="h5">{text7}</p>
      </FadeIn>
      <FadeIn>
        <p className="h5">{text8}</p>
      </FadeIn>

    </div>
  );
};

export default TextComponent;
