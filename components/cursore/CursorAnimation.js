import React, { useEffect, useState } from "react";

const CursorAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track cursor visibility
  let timeoutId; // To store the timeout ID for inactivity

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Clear previous timeout and set a new one
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(false), 2000); // Hide after 2 seconds
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseEnterText = () => {
      setIsHoveringText(true);
    };

    const handleMouseLeaveText = () => {
      setIsHoveringText(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    document.querySelectorAll("p, a").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterText);
      el.addEventListener("mouseleave", handleMouseLeaveText);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);

      document.querySelectorAll("p, a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterText);
        el.removeEventListener("mouseleave", handleMouseLeaveText);
      });

      clearTimeout(timeoutId); // Cleanup timeout on unmount
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y - 10,
        left: position.x - 10,
        width: isHoveringText ? "30px" : "25px", // Adjust width
        height: isHoveringText ? "30px" : "25px", // Adjust height
        backgroundColor: "white",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(0, 0)",
        transition: "transform 0.5s ease-out, opacity 0.3s ease, width 0.3s, height 0.3s", // Add transition for size change
        animation: isVisible ? "pulse 1s infinite" : "none",
        zIndex: 999999999999999,
        mixBlendMode: "difference",
        opacity: isVisible ? 1 : 0, // Hide cursor when not visible
      }}
    ></div>
  );
};

export default CursorAnimation;
