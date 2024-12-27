// Question.tsx
"use client";

import useQuestionState from '@/hooks/useQuestionState';

const Question = () => {
  const {
    questionRef,
    images,
    currentImageIndex,
    imageVisible,
    noButtonPosition,
    buttonMoved,
    handleNoButtonClick,
  } = useQuestionState();

  const question = process.env.NEXT_PUBLIC_QUESTION;

  return (
    <div className="question" ref={questionRef}>
      <p className="h5">{question}</p>

      <div className="question__btns">
        <a href="/yes" className="btn">Yes</a>
        <button
          className={`btn secondary ${buttonMoved ? 'moved' : ''}`}
          onClick={handleNoButtonClick}
          style={{
            position: buttonMoved ? 'absolute' : 'relative', // Only absolute when moved
            left: buttonMoved ? `${noButtonPosition.x}px` : 'auto',
            top: buttonMoved ? `${noButtonPosition.y}px` : 'auto',
            transition: 'left 0.2s, top 0.2s', // Smooth transition for the movement
          }}
        >
          No
        </button>
      </div>

      {/* Display the current image if it's visible */}
      {currentImageIndex !== null && imageVisible && (
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className="image"
          style={{
            opacity: imageVisible ? 1 : 0, // Only show image if visible
            transition: 'opacity 0.5s', // Smooth fade-in/out transition
          }}
        />
      )}
    </div>
  );
};

export default Question;
