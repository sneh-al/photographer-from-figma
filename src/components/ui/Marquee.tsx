import starlogo from "@assets/svg/star.svg";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ServicesList = ({children} :{children: ReactNode}) => {
  const marqueeVariants = {
    animate: {
      x: [0, "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };
  return (
    <article className=" bg-dark-06  overflow-hidden flex ">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="flex items-center justify-between gap-16 p-5"
      >
       {children}
      </motion.div>
    </article>
  );
};

export default ServicesList;

