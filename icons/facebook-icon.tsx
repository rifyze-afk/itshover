import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const FacebookIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    await animate(
      ".fb-path",
      { scale: [1, 0.9, 1.05, 1] },
      { duration: 0.5, ease: "easeInOut" },
    );
    animate(
      ".fb-like",
      { y: [-10, 0], opacity: [0, 1, 0] },
      { duration: 0.6, ease: "easeOut" },
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
      style={{ overflow: "visible" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        className="fb-path"
        d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
        style={{ transformOrigin: "center" }}
      />
      <motion.text
        className="fb-like"
        x="12"
        y="2"
        textAnchor="middle"
        fontSize="10"
        fill={color}
        opacity={0}
      >
        👍
      </motion.text>
    </motion.svg>
  );
};

export default FacebookIcon;
