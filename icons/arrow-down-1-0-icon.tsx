import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ArrowDown10Icon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const swapDistance = 10;

  const hoverAnimation = async () => {
    animate(".one", { y: swapDistance }, { duration: 0.3, ease: "easeInOut" });
    animate(
      ".zero",
      { y: -swapDistance },
      { duration: 0.3, ease: "easeInOut" },
    );
  };

  const resetAnimation = async () => {
    animate(".one, .zero", { y: 0 }, { duration: 0.3, ease: "easeInOut" });
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
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer ${className}`}
    >
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <motion.g className="one">
        <path d="M17 10V4h-2" />
        <path d="M15 10h4" />
      </motion.g>
      <motion.rect className="zero" x="15" y="14" width="4" height="6" ry="2" />
    </motion.svg>
  );
};

export default ArrowDown10Icon;
