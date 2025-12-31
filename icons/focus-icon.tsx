import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const FocusIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    animate(".center", { scale: 1.4 }, { duration: 0.25, ease: "easeOut" });

    animate(".corners", { scale: 0.85 }, { duration: 0.25, ease: "easeOut" });
  };

  const resetAnimation = () => {
    animate(".center", { scale: 1 }, { duration: 0.2, ease: "easeInOut" });

    animate(".corners", { scale: 1 }, { duration: 0.2, ease: "easeInOut" });
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
      <motion.circle
        className="center"
        cx="12"
        cy="12"
        r="3"
        style={{ transformOrigin: "12px 12px" }}
      />
      <motion.path className="corners" d="M3 7V5a2 2 0 0 1 2-2h2" />
      <motion.path className="corners" d="M17 3h2a2 2 0 0 1 2 2v2" />
      <motion.path className="corners" d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <motion.path className="corners" d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </motion.svg>
  );
};

export default FocusIcon;
