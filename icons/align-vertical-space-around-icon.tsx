import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AlignVerticalSpaceAroundIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    animate(".top-line", { y: 3 }, { duration: 0.3, ease: "easeOut" });
    animate(".bottom-line", { y: -3 }, { duration: 0.3, ease: "easeOut" });
    animate(".rectangle", { scale: 0.85 }, { duration: 0.3, ease: "easeOut" });
  };

  const resetAnimation = () => {
    animate(".top-line", { y: 0 }, { duration: 0.2, ease: "easeInOut" });
    animate(".bottom-line", { y: 0 }, { duration: 0.2, ease: "easeInOut" });
    animate(".rectangle", { scale: 1 }, { duration: 0.2, ease: "easeInOut" });
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
      <motion.rect
        className="rectangle"
        style={{ transformOrigin: "12px 12px" }}
        width="10"
        height="6"
        x="7"
        y="9"
        rx="2"
      />
      <motion.path className="bottom-line" d="M22 20H2" />
      <motion.path className="top-line" d="M22 4H2" />
    </motion.svg>
  );
};

export default AlignVerticalSpaceAroundIcon;
