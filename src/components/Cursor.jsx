import React, { forwardRef, useEffect, useRef } from 'react'
import { useMotionValue, useMotionValueEvent } from 'framer-motion'
import useMouse from '@react-hook/mouse-position'
import { motion } from "framer-motion"
const Cursor = () => {


  const mouseRef = useRef()
  const mouse = useMouse(mouseRef, {
    enterDelay: 100,
    leaveDelay: 100,
  })



  return (
    <motion.div
      ref={mouseRef}
      animate={{
        opacity: 1,
        height: 10,
        width: 10,
        backgroundColor: "green",
        x: mouse?.clientX,
        y: mouse?.clientY
      }}
    >
      <h1>idk</h1>
    </motion.div>
  )
}


export default Cursor