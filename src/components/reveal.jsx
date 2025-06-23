import { useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimateOnView = ({
  children,
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  whileHover = null, // <-- new prop!
  className = "",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={transition}
      whileHover={whileHover} // <-- apply hover animation
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView;
