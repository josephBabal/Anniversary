"use client";
import { motion } from "motion/react";
import { MotionSpan } from "@/components/Motion/MotionSpan";
import Rose from "@/components/rose/Rose";

const Intro = () => {
  const words = ['Happy', 'Anniversary', 'My', 'Love'];

  return (
    <div className="intro">
      <h1>
        {words.map((word, index) => (
        <MotionSpan
            className="h1"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.5,  // Stagger delay by 0.25s per word
              duration: 1.1,        // Duration for opacity change
            }}
          >
            {word}{' '}
          </MotionSpan>
        ))}
      </h1>

      <Rose />

    </div>
  )
}

export default Intro