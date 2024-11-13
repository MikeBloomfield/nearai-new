"use client";
import React, { useEffect, useRef, ReactNode, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsUnderBreakpoint } from "@hooks/useIsUnderBreakpoint";
import cn from "classnames";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ children, isBig, withoutAnimation }: { children: ReactNode; isBig?: boolean; withoutAnimation?: boolean }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const isTablet = useIsUnderBreakpoint("lg");

  useEffect(() => {
    if (isTablet === null || isTablet || !textRef.current || withoutAnimation) return;
    const words = textRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { opacity: 0.5 },
      {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }, [isTablet, withoutAnimation]);

  const renderChildren = useCallback(() => {
    return React.Children.map(children, (child, index) => {
      if (typeof child === "string") {
        return child.split(" ").map((word, wordIndex) => (
          <span key={`${index}-${wordIndex}`} className="word">
            {word}&nbsp;
          </span>
        ));
      }
      return (
        <span key={index} className="word word_icon">
          {child}
        </span>
      );
    });
  }, [children]);

  return (
    <div ref={textRef} className={cn("animated_text", { big: isBig })}>
      {renderChildren()}
    </div>
  );
};

export default AnimatedText;
