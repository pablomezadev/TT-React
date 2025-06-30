import React, { useRef, useEffect, useState } from 'react';

const ScrollFadeIn = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    // Si el contenido ya está en pantalla al montar (ej: móviles sin scroll)
    const alreadyVisible =
      element &&
      element.getBoundingClientRect().top < window.innerHeight;

    if (alreadyVisible) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-fade ${isVisible ? 'visible' : ''}`}
      style={{ minHeight: '1px' }} // asegura altura mínima para móviles
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
