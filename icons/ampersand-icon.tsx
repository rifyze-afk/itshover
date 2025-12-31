import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AmpersandIcon = ({ size = 40, className = "" }: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    animate("path", { pathLength: [0, 1] }, { duration: 0.6 });
  };

  const resetAnimation = async () => {
    animate("path", { pathLength: 1 }, { duration: 0.3 });
  };

  return (
    <motion.svg
      ref={scope}
      onHoverStart={hoverAnimation}
      onHoverEnd={resetAnimation}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer ${className}`}
    >
      <path d="M16 12h3" />
      <path d="M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13" />
    </motion.svg>
  );
};

export default AmpersandIcon;
