import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RefreshIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();
  const handleAnimate = async () => {
    await animate(
      scope.current,
      { rotate: 180 },
      { duration: 0.4, ease: "easeInOut" },
    );
    animate(scope.current, { rotate: 0 }, { duration: 0.4, ease: "easeInOut" });
  };

  return (
    <motion.svg
      ref={scope}
      onMouseEnter={handleAnimate}
      onMouseLeave={handleAnimate}
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
      <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
    </motion.svg>
  );
};

export default RefreshIcon;
