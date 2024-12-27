"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useScrollIndicator } from '@/hooks/useScrollIndicator';

const ScrollIndicator = () => {
  const showIndicator = useScrollIndicator();

  if (!showIndicator) return null;

  return (
    <div className="scroll-indicator">
      <IoIosArrowDown />
    </div>
  );
};

export default ScrollIndicator;