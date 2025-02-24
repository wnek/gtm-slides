import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

interface CardProps {
  y: any
  scale: any
  id: number
  title: string
  text: string
  image: string
}

function Card({ y, scale, id, title, text, image }: CardProps) {
  return (
    <motion.li
      style={{
        y,
        scale,
        paddingTop: `calc(${id} * 1em)`, // --card-top-offset equivalent
      }}
      className='sticky top-0 origin-top will-change-transform'
    >
      <div className='bg-white text-[rgb(10,5,7)] rounded-2xl overflow-hidden shadow-[0_0.2em_1em_rgba(0,0,0,0.1),_0_1em_2em_rgba(0,0,0,0.1)] grid grid-cols-2'>
        <div className='w-4/5 place-self-center text-left grid gap-4 place-items-start'>
          <h2 className='text-4xl font-light'>{title}</h2>
          <p className='font-light leading-relaxed'>{text}</p>
          <p>
            <a href="#top" className='inline-block bg-[rgb(188,87,36)] text-white no-underline px-2 py-2 rounded'>
              Read more
            </a>
          </p>
        </div>
        <figure className='overflow-hidden'>
          <img src={image} alt={title} className='w-full h-full object-cover' />
        </figure>
      </div>
    </motion.li>
  )
}

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const totalCards = 4
  const cards = [
    {
      title: "Card One",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg"
    },
    {
      title: "Card Two",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg"
    },
    {
      title: "Card Three",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg"
    },
    {
      title: "Card Four",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg"
    }
  ]

  const slides = cards.map((card, i) => {
    const index = i + 1
    const reverseIndex0 = totalCards - (i + 1)

    const start = i / totalCards
    const end = index / totalCards

    return {
      ...card,
      y: useTransform(scrollYProgress, [start, end], ['0%', '-100%']),
      scale: useTransform(scrollYProgress, [start, end], [1, 1 - (0.1 * reverseIndex0)]),
      id: index
    }
  })

  return (
    <div className='bg-[rgb(58,29,43)] text-white text-center text-[calc(1em+0.5vw)]'>
      <header className='w-[80vw] h-screen mx-auto grid place-items-center'>
        <div>
          <h1 className='text-6xl font-light'>Stacking Cards</h1>
          <p>👇 Scroll down to see the effect.</p>
        </div>
      </header>

      <main className='w-[80vw] mx-auto'>
        <ul
          ref={containerRef}
          className='list-none grid grid-cols-1 gap-[4vw] pb-[calc(4*1em)]'
          style={{
            gridTemplateRows: `repeat(${totalCards}, 40vw)`,
          }}
        >
          {slides.map((slide) => (
            <Card key={slide.id} {...slide} />
          ))}
        </ul>
      </main>

      <aside className='w-1/2 mx-auto text-left'>
        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur...</p>
        {/* Add more paragraphs as needed */}
      </aside>
    </div>
  )
}

export default App
