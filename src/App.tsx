import { useRef, forwardRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { VideoPopup } from './components/VideoPopup'

function App() {
  const containerRef = useRef(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

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

  const filter1 = useTransform(scrollYProgress, v => `blur(${v * 20}px)`)
  const filter2 = useTransform(scrollYProgress, v => `blur(${Math.max(0, (v - 0.33) * 20)}px)`)

  return (
    <section>
      <div className='h-screen bg-white flex flex-col justify-between items-center p-8'>
        <div className='flex flex-row justify-between w-full items-center'>
          <img src="./img/1-hero/logo.svg" alt="logo" />
          <p className='text-gray-400 text-xs uppercase'>Vuori x Sprout Social Influencer Marketing</p>
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="font-roboto-serif text-7xl">
            <span>A New Perspective</span>
            <br />
            <span className='italic'>On Influencer Marketing</span>
          </h1>

          <p className='w-[65ch] text-gray-500'>Did you know that 70% of consumers trust influencers over traditional ads? With AI-generated content raising even more skepticism, authenticity is now a game-changer.</p>
          
          <button
            onClick={() => setIsVideoOpen(true)}
            className="mt-6 px-6 py-3 bg-spt-yellow text-black rounded-lg hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            Watch Video
          </button>
        </div>

        <div className="flex flex-row items-center gap-2">
          <img src="./img/1-hero/scroll.svg" alt="scroll" />
          <p className='text-gray-400 text-sm'>SCROLL TO EXPLORE</p>
        </div>

        <VideoPopup isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      </div>
      <div className="border-2 border-black" ref={containerRef}>
        <div className="h-screen sticky top-0 flex justify-center items-center" >
          <motion.div
            className="h-screen w-full bg-red-500"
            style={{
              scale: scale1,
              filter: filter1
            }}
          >
            <motion.h1 style={{ filter: filter1 }}>Slide1</motion.h1>
          </motion.div>
        </div>

        <div className="h-screen sticky top-0 flex justify-center items-center" >
          <motion.div
            className="h-screen w-full bg-green-500"
            style={{
              scale: scale2,
              filter: filter2
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
