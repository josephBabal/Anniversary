"use client";

import { useState, useEffect } from 'react';

export const useScrollIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if user has scrolled more than half the window height and there's more to scroll
      const hasScrolledEnough = scrollTop > windowHeight / 2;
      
      // Check if user is at the bottom of the page
      const atBottom = scrollTop + windowHeight >= documentHeight - 50;

      // Show indicator if user has scrolled more than half the window height, and not at the bottom
      setShowIndicator(hasScrolledEnough && !atBottom);
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check initial state

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return showIndicator;
};
