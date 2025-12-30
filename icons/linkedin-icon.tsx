import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const LinkedInIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    animate(
      ".border",
      { scale: [1, 1.05, 1] },
      { duration: 0.4, ease: "easeInOut" },
    );
    await animate(
      ".lines",
      { pathLength: [0, 1] },
      { duration: 0.5, ease: "easeOut" },
    );
  };

  const hoverEndAnimation = () => {
    animate(".lines", { pathLength: 1 }, { duration: 0.2 });
  };

  return (
    <motion.svg
      ref={scope}
      onHoverStart={hoverAnimation}
      onHoverEnd={hoverEndAnimation}
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
      <motion.path className="lines" d="M8 11v5" initial={{ pathLength: 1 }} />
      <motion.path className="lines" d="M8 8v.01" initial={{ pathLength: 1 }} />
      <motion.path
        className="lines"
        d="M12 16v-5"
        initial={{ pathLength: 1 }}
      />
      <motion.path
        className="lines"
        d="M16 16v-3a2 2 0 1 0 -4 0"
        initial={{ pathLength: 1 }}
      />
      <motion.path
        className="border"
        d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"
        style={{ transformOrigin: "center" }}
      />
    </motion.svg>
  );
};

export default LinkedInIcon;
