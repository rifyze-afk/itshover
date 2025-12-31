import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const GmailIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    animate(
      ".envelope-top",
      { pathLength: [0, 1], opacity: [0, 1] },
      { duration: 0.4, ease: "easeOut" },
    );
    await animate(
      ".envelope-flap",
      { pathLength: [0, 1], opacity: [0, 1] },
      { duration: 0.5, ease: "easeOut" },
    );
    animate(
      ".sides",
      { scaleY: [0.95, 1] },
      { duration: 0.3, ease: "easeOut" },
    );
  };

  const hoverEndAnimation = () => {
    animate(".envelope-top", { pathLength: 1, opacity: 1 }, { duration: 0.2 });
    animate(".envelope-flap", { pathLength: 1, opacity: 1 }, { duration: 0.2 });
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
      <motion.path
        className="sides"
        style={{ transformOrigin: "center" }}
        d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z"
      />
      <motion.path
        className="sides"
        style={{ transformOrigin: "center" }}
        d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z"
      />
      <motion.path
        className="envelope-top"
        initial={{ pathLength: 1, opacity: 1 }}
        d="M16 4l-4 4l-4 -4"
      />
      <motion.path
        className="envelope-flap"
        initial={{ pathLength: 1, opacity: 1 }}
        d="M4 6.5l8 7.5l8 -7.5"
      />
    </motion.svg>
  );
};

export default GmailIcon;
