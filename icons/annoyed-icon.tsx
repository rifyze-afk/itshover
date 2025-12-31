import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AnnoyedIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    animate(".eyes", { scaleX: 0.7 }, { duration: 0.2, ease: "easeOut" });
    animate(".mouth", { y: 1 }, { duration: 0.3, ease: "easeOut" });
  };

  const resetAnimation = () => {
    animate(".eyes", { scaleX: 1 }, { duration: 0.2, ease: "easeInOut" });
    animate(".mouth", { y: 0 }, { duration: 0.2, ease: "easeInOut" });
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
      <circle cx="12" cy="12" r="10" />
      <motion.path className="mouth" d="M8 15h8" />
      <motion.g className="eyes">
        <path d="M8 9h2" />
        <path d="M14 9h2" />
      </motion.g>
    </motion.svg>
  );
};

export default AnnoyedIcon;
