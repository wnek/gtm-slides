import { useRef, forwardRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"



function App() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // useEffect(() => {
  //   scrollYProgress.on('change', (latest) => {
  //     console.log(latest)
  //   })
  // })

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const scale2 = useTransform(scrollYProgress, [0.33, 1], [1, 0.9])

  const blur1 = useTransform(scrollYProgress, [0, 1], [0, 20])


  return (
    <section>

      <div className='h-screen bg-pink-500'>
        <h1>Hello</h1>
      </div>

      <div className="border-2 border-black" ref={containerRef}>
        <div className="h-screen sticky top-0 flex justify-center items-center" >
          <motion.div
            className="h-3/4 w-3/4 bg-red-500"
            style={{
              scale: scale1,
              filter: `blur(${blur1}px)`
            }}
          >
            <h1>Slide1</h1>
          </motion.div>
        </div>

        <div className="h-screen sticky top-0 flex justify-center items-center" >
          <motion.div
            className="h-3/4 w-3/4 bg-green-500"
            style={{
              scale: scale2,
              filter: `blur(10px)`,

            }}
          />
        </div>

        <div className="h-screen sticky top-0 flex justify-center items-center" >
          <motion.div className="h-3/4 w-3/4 bg-yellow-500" />
        </div>




      </div>

      <div className='h-screen bg-pink-500'>
        <h1>Hello</h1>
      </div>

    </section>

  )
}

export default App
