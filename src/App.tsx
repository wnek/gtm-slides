import { useRef, forwardRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { VideoPopup } from './components/VideoPopup'
import { VideoBackground } from './components/VideoBackground'

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section>

      {/* Hero Section */}
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

      {/* Competitive Landscape Section */}
      <VideoBackground 
        src="/img/2-competitive-landscape/competitive-landscape-bg.mp4"
        className="h-screen w-full"
      >
        <div className="flex flex-col items-center text-center gap-4 justify-center h-full">
          <h1 className="font-roboto-serif text-7xl text-white">
            <span>Competitive </span>
            <span className='italic'>Landscape</span>
          </h1>
        </div>
      </VideoBackground>

      {/* Other Sections */}
      <div className="bg-[#F5F5F5]">
       
    
        <div className="h-screen sticky top-0 flex justify-center items-center py-12">
         <img src="./img/2-competitive-landscape/3.png" className='w-[80%] rounded-2xl border-2 border-gray-100' />
        </div>

        <div className="h-screen sticky top-0 flex justify-center items-center">
        <img src="./img/2-competitive-landscape/4.png" className='w-[80%] rounded-2xl border-2 border-gray-100' />
        </div>

        <div className="h-screen sticky top-0 flex justify-center items-center">
        <img src="./img/2-competitive-landscape/5.png" className='w-[80%] rounded-2xl border-2 border-gray-100' />
        </div>


      </div>

    
    </section>
  )
}

export default App
