import React, { useEffect, useRef } from 'react';

const VisibilityAnimation = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.7 } // Adjust this value to control when the animation should trigger
    );

    const containerElement = containerRef.current;
    observer.observe(containerElement);

    return () => {
      observer.unobserve(containerElement);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default VisibilityAnimation;