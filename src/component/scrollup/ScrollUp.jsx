import React, { useEffect } from 'react'
import "./scrollup.css"

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={handleClick} className="scrollup" aria-label="Scroll to top">
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </button>
  )
}

export default ScrollUp
