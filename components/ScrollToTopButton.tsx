'use client'
import { useState } from 'react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const threshold = 400; // Adjust the threshold as needed

    setIsVisible(scrollTop > threshold);
  };

  // Attach scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent page refresh
  
    scrollToTop();
    // After scrolling to top, change the link to '/'
    window.history.pushState({}, '', '/');
  };

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 p-3 bg-turqu-700 text-white rounded-[10%] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClick}
    >
    <p>UP</p>
    </button>
  );
};

export default ScrollToTopButton;
