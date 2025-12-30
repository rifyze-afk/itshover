import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const VercelIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    await animate(
      ".triangle",
      { y: [0, -3, 0], scale: [1, 1.05, 1] },
      { duration: 0.6, ease: "easeInOut" },
    );
    animate(
      ".triangle",
      { opacity: [1, 0.7, 1] },
      { duration: 0.4, ease: "easeInOut" },
    );
  };

  return (
    <motion.svg
      ref={scope}
      onHoverStart={hoverAnimation}
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
      <motion.path
        className="triangle"
        style={{ transformOrigin: "center" }}
        d="M3 19h18l-9 -15z"
      />
    </motion.svg>
  );
};

export default VercelIcon;
