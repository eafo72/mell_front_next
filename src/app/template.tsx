"use client";

import { motion } from "framer-motion";


export default function Template({ children } : {children: React.ReactNode})
 {
  return (
      <motion.div
        initial={{y:20, opacity:0}}
        animate={{y:0, opacity:1}}

        //initial={{x:"100vw"}}
        //animate={{x:0}}
        transition={{
          ease: "easeInOut",
          duration: 0.75
        }}
      >
        {children}
      </motion.div>
  )
}