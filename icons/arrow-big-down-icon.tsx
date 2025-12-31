import { AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ArrowBigDownIcon = ({ size = 40, className = "" }: AnimatedIconProps) => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    animate(scope.current, { y: [0, 4, 0] }, { duration: 0.5 });
  };

  const resetAnimation = async () => {
    animate(scope.current, { y: 0 }, { duration: 0.3 });
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
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer ${className}`}
    >
      <path d="M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" />
    </motion.svg>
  );
};

export default ArrowBigDownIcon;
