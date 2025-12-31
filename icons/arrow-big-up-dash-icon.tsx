import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ArrowBigUpDashIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    animate(".arrow", { y: -4 }, { duration: 0.3, ease: "easeOut" });
    animate(
      ".dash",
      { scale: 1.2, opacity: 0.7 },
      { duration: 0.3, ease: "easeOut" },
    );
  };

  const resetAnimation = () => {
    animate(".arrow", { y: 0 }, { duration: 0.2, ease: "easeInOut" });
    animate(
      ".dash",
      { scale: 1, opacity: 1 },
      { duration: 0.2, ease: "easeInOut" },
    );
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
      <motion.path
        className="arrow"
        d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"
      />
      <motion.path
        className="dash"
        style={{ transformOrigin: "12px 20px" }}
        d="M9 20h6"
      />
    </motion.svg>
  );
};

export default ArrowBigUpDashIcon;
