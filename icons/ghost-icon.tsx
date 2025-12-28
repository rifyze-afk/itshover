import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const GhostIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    // Ghost floating and wiggling
    animate(
      ".ghost-body",
      {
        y: [0, -8, -4, -8, 0],
        rotate: [0, -3, 3, -2, 0],
      },
      {
        duration: 1.2,
        ease: "easeInOut",
      },
    );

    // Eyes blinking/scaling
    animate(
      ".ghost-eye",
      {
        scaleY: [1, 0.1, 1, 0.1, 1],
        scaleX: [1, 1.2, 1, 1.2, 1],
      },
      {
        duration: 0.8,
        ease: "easeInOut",
      },
    );

    // Wavy bottom animation
    await animate(
      ".ghost-body",
      {
        scaleX: [1, 1.05, 0.98, 1.02, 1],
      },
      {
        duration: 0.6,
        ease: "easeInOut",
      },
    );
  };

  return (
    <motion.svg
      className={`cursor-pointer ${className}`}
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
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        className="ghost-body"
        style={{ transformOrigin: "12px 14px" }}
        d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7"
      />
      <motion.path
        className="ghost-eye"
        style={{ transformOrigin: "10px 10px" }}
        d="M10 10h.01"
      />
      <motion.path
        className="ghost-eye"
        style={{ transformOrigin: "14px 10px" }}
        d="M14 10h.01"
      />
    </motion.svg>
  );
};

export default GhostIcon;
