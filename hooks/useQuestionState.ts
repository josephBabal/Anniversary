// useQuestionState.ts
import { useState, useRef, useEffect } from 'react';

const useQuestionState = () => {
  const questionRef = useRef<HTMLDivElement | null>(null);
  const images = [
    "/images/cat.webp", 
    "/images/cat-2.webp", 
    "/images/cat-3.webp",
  ];


  // State to track the number of "No" button clicks, current image index, and whether an image is active
  const [noClickCount, setNoClickCount] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [imageVisible, setImageVisible] = useState(false); // Controls image visibility

  const [noButtonPosition, setNoButtonPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [buttonMoved, setButtonMoved] = useState(false);

  // Handle "No" button click
  const handleNoButtonClick = () => {
    if (questionRef.current) {
      // Get the position of the question container
      const containerRect = questionRef.current.getBoundingClientRect();

      // Get the button width and height (for limiting its movement)
      const buttonWidth = 100;  // Assuming the width of the "No" button is 100px
      const buttonHeight = 40;  // Assuming the height of the "No" button is 40px

      // Generate random x and y positions within the container's bounds
      const randomX = Math.floor(Math.random() * (containerRect.width - buttonWidth)); 
      const randomY = Math.floor(Math.random() * (containerRect.height - buttonHeight));

      // Ensure the button does not overflow on the left or right
      const constrainedX = Math.max(0, Math.min(randomX, containerRect.width - buttonWidth));

      setNoButtonPosition({ x: constrainedX, y: randomY });
      setButtonMoved(true);

      // Increment the "No" click count
      const newNoClickCount = noClickCount + 1;
      setNoClickCount(newNoClickCount);

      if (newNoClickCount >= 2) {
        // Reset count and switch to the next image
        setNoClickCount(0);

        // If there is no active image yet, set the first one to be active
        if (currentImageIndex === null) {
          setCurrentImageIndex(0);
          setImageVisible(true); // Show image after the first two clicks
        } else {
          // Cycle to the next image
          setCurrentImageIndex((prevIndex) => {
            const nextIndex = (prevIndex! + 1) % images.length; // Loop back to the first image
            setImageVisible(true); // Show the next image
            return nextIndex;
          });
        }
      }
    }
  };

  // Hide the image after 3 seconds
  useEffect(() => {
    if (imageVisible) {
      const timer = setTimeout(() => {
        setImageVisible(false); // Hide the image after 3 seconds
      }, 3000); // 3 seconds delay before hiding image
      return () => clearTimeout(timer); // Clear the timeout when the component unmounts or if imageVisible changes
    }
  }, [imageVisible]);

  return {
    questionRef,
    images,
    noClickCount,
    currentImageIndex,
    imageVisible,
    noButtonPosition,
    buttonMoved,
    handleNoButtonClick,
  };
};

export default useQuestionState;
