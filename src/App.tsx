import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

function Slide({ id }: { id: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className='w-90vw h-dvh bg-black border-2 border-white sticky top-0'
    >
      <p className='text-white'>Slide {id}</p>
    </motion.div>
  )
}

function App() {
  return (
    <div className='h-[400vh]'> {/* Container for scrolling */}
      <Slide id={1} />
      <Slide id={2} />
      <Slide id={3} />
      <Slide id={4} />
    </div>
  )
}

export default App
