"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import useParallax from "@/hooks/useParallax"
import pets from 'assets/elements/pets.gif'
import heart6 from 'assets/elements/heart6.gif'
import cheersSecondary from 'assets/elements/cheers-secondary.gif'
import mainImage from 'assets/main.jpg'
import first from 'assets/gallery/1.jpg'
import second from 'assets/gallery/2.jpg'
import third from 'assets/gallery/3.jpg'
import fourth from 'assets/gallery/4.jpg'
import fifth from 'assets/gallery/5.jpg'
import sixth from 'assets/gallery/6.jpg'
import seventh from 'assets/gallery/7.jpg'
import barong from 'assets/barong.png'
import guests from 'assets/guests.png'
import plate from 'assets/elements/plate.gif'
import dress from 'assets/elements/dress.gif'
import cheers2 from 'assets/elements/cheers-new.gif'
import rings from 'assets/elements/rings.gif'
import cake from 'assets/elements/cake.gif'
import note from 'assets/elements/note.gif'

export default function ScrollSPA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const topLeft = useParallax(scrollYProgress, -40)
  const topRight = useParallax(scrollYProgress, 30)
  const bottomRight = useParallax(scrollYProgress, 10)
  const bottomLeft = useParallax(scrollYProgress, -20)

  // Section 1 scroll progress (image scaling) - fixed offset calculation
  const { scrollYProgress: section1Progress } = useScroll({
    target: section1Ref,
    offset: ["start start", "end start"],
  })

  // Section 2 scroll progress (horizontal scrolling) - extended scroll area
  const { scrollYProgress: section2Progress } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"],
  })

  // Image scaling animation - properly mapped to scroll progress
  const imageScale = useTransform(section1Progress, [0, 1], [0.3, 1])
  const imageOpacity = useTransform(section1Progress, [0, 0.2, 1], [0.5, 0.8, 1])

  // Horizontal scrolling animation - more controlled mapping
  const horizontalX = useTransform(section2Progress, [0.1, 0.9], [0, -1400])

  return (
    <div ref={containerRef} className="relative">
      {/* Section 1: Image Scaling */}
      <section
        ref={section1Ref}
        className="flex flex-col items-center justify-center bg-primary-blue relative overflow-hidden font-providence-sans text-secondary-blue"
      >
        <motion.div style={{ y: bottomRight }} className='flex flex-col items-center justify-between py-40 relative gap-6 overflow-hidden w-full h-svh text-center'>
          {/* top center */}
          <Image src={pets} alt="heart" className='size-62 absolute -top-5 left-1/2 -translate-x-1/2' />

          <h1 className='text-2xl line-clamp-2 font-normal'>we're getting <br /> married!!!</h1>
          <div className='relative w-full max-w-max'>
            <h1 className='font-cabin-sketch text-7xl font-bold'>bry + shai</h1>

            {/* small top of "b" */}
            {/* <Image src={heart6} alt="heart" className='size-12 absolute -top-7 -left-5' /> */}
            {/* small top of "b" */}

            {/* small top of "r" */}
            <Image src={heart6} alt="heart" className='size-12 absolute -top-7 left-8' />

            {/* small below of "a" */}
            <Image src={heart6} alt="heart" className='size-12 absolute top-17 right-5' />


            {/* small top of "i" */}
            {/* <Image src={heart6} alt="heart" className='size-12 absolute -top-7 -right-8' /> */}
            {/* small top of "i" */}

            {/* medium heart bottom of "b" */}
            {/* <Image src={heart6} alt="heart" className='size-24 absolute -bottom-15 -left-12' /> */}
            {/* medium heart bottom of "b" */}

            {/* medium heart bottom of "i" */}
            {/* <Image src={heart6} alt="heart" className='size-24 absolute -bottom-15 -right-15' /> */}
            {/* medium heart bottom of "i" */}
          </div>
          <p className='flex flex-col items-center gap-0 text-md'>
            <span className='text-inherit'>18 december 2025</span>
            <a href='https://maps.app.goo.gl/vcPZBkDVYwBsyLbW6' target='_blank' className='!text-inherit !underline'>Burrow Café &ndash; Antipolo Beehouse</a>
            <span>113 Beverly Hills Avenue,</span>
            <span>Beverly Hills Subdivision, Taytay, Rizal</span>
          </p>

          <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
            {/* top left */}
            <motion.div style={{ y: topLeft }} className='size-40 absolute top-0 left-0'>
              <Image src={heart6} alt="heart" className="size-full" />
            </motion.div>

            {/* top right */}
            <motion.div style={{ y: topRight }} className='size-22 absolute top-4 right-3'>
              <Image src={heart6} alt="heart" className="size-full" />
            </motion.div>


            <motion.div style={{ y: bottomRight }} className='size-52 absolute bottom-4 -right-12'>
              <Image src={heart6} alt="heart" className="size-full" />
            </motion.div>
            <motion.div style={{ y: bottomLeft }} className='size-40 absolute -bottom-4 left-1'>
              <Image src={heart6} alt="heart" className="size-full" />
            </motion.div>
          </div>
          <Image src={cheersSecondary} alt="cheers" className='size-56 absolute -bottom-10 left-1/2 -translate-x-1/2' />
        </motion.div>
        <div className="sticky top-0 py-40 w-full flex items-center justify-center">
          <div className="text-center z-10 space-y-8">
            <motion.div style={{ scale: imageScale, opacity: imageOpacity }} className="mx-auto">
              <Image
                src={mainImage}
                alt="couple image"
                width={768}
                height={480}
                className="rounded-2xl shadow-2xl aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Horizontal Scrolling */}
      <section
        ref={section2Ref}
        className="h-[400vh] bg-secondary-blue relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x: horizontalX }} className="flex space-x-8 px-8 flex-shrink-0">
            {[first, second, third, fourth, fifth, sixth, seventh].map((item) => (
              <motion.div
                key={item.src}
                className="flex-shrink-0 w-80 h-96 bg-white/10 backdrop-blur-sm rounded-2xl flex flex-col justify-center items-center text-primary-blue "
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={item}
                  alt={`gallery image ${item}`}
                  width={768}
                  height={1080}
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute top-8 left-8 text-primary-blue z-10">
          <h2 className="text-4xl font-bold mb-2 font-cabin-sketch">from "Hi!" to "I Do!"</h2>
        </div>
      </section>

      {/* Section 3: Normal Scrolling */}
      <section className="bg-secondary-blue relative z-1 pb-10">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-primary-blue font-cabin-sketch">bry + shai</h2>
          </motion.div>

          <div className="text-primary-blue font-providence-sans flex flex-col items-center gap-6 text-center text-sm">
            <motion.strong
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: .6 }}
              className='font-providence-sans text-primary-blue text-center'
            >
              our wedding squad
            </motion.strong>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: .6, delay: .1 }}
              className='grid grid-cols-2 items-center gap-4 text-primary-blue w-full'
            >

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', duration: .6, delay: .2 }} className='flex flex-col items-center'>
                <strong className='block mb-2'>parents of the groom</strong>
                <span>Ma. Cristina Quinalayo</span>
                <span>Allan Quinalayo</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', duration: .6, delay: .3 }} className='flex flex-col items-center'>
                <strong className='block mb-2'>parents of the bride</strong>
                <span>Arlene Suringa</span>
                <span>Saturnino Suringa</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: .6, delay: .4 }}
              className='flex flex-col items-center gap-6 text-primary-blue w-full'>
              <strong>ninongs &amp; ninangs</strong>

              <div className='grid grid-cols-2 items-center gap-4 w-full'>

                <div className='flex flex-col items-center'>
                  <span>Maricar Talion</span>
                  <span>Natalie Rivera</span>
                  <span>Michael Empaynado</span>
                  <span>Anthony Quinalayo</span>
                </div>

                <div className='flex flex-col items-center'>
                  <span>Annaliza Baesa</span>
                  <span>Ma. Theresa Babol</span>
                  <span>Fely Guillermo</span>
                  <span>Ludovico Amante</span>
                </div>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: .6, delay: .5 }}
              className='grid grid-cols-2 items-center gap-4 w-full text-primary-blue'>

              <div className='flex flex-col items-center'>
                <strong className='mb-2'>best man</strong>
                <span>Neil Glenn Apale</span>
              </div>

              <div className='flex flex-col items-center'>
                <strong className='mb-2'>maid of honor</strong>
                <span>Cess Oafericua</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: .6, delay: .5 }}
              className='grid grid-cols-2 items-start gap-4 w-full text-primary-blue'>

              <div className='flex flex-col items-center'>
                <strong className='mb-2'>team bry</strong>
                <span>Bren Quinalayo</span>
                <span>Brenan Allen Quinalayo</span>
                <span>Lester Almadin</span>
                <span>Alfie Durante</span>
                <span>Mike Ronnel Mendez</span>
              </div>

              <div className='flex flex-col items-center'>
                <strong className='mb-2'>team shai</strong>
                <span>Sedric Suringa</span>
                <span>Ruffie Grace Esguerra</span>
                <span>Janine Kyle Ledesma</span>
                <span className='text-xs'>Samantha Julianne Mercado</span>
                <span>Nica Zenarosa</span>
                <span className='text-sm'>James Edward Baldonado</span>
                <span>Nathaniel Jovie Pineda</span>
                <span>Ralph Siscar</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* next */}
      <section className="bg-secondary-blue relative z-1 pb-5 font-providence-sans">
        <div className="container mx-auto px-8 flex flex-col items-center gap-6 text-primary-blue text-center">
          <motion.strong
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: .6 }}
            className='font-providence-sans text-primary-blue text-center'>our wedding guide</motion.strong>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: .6, delay: .6 }} className='flex flex-col items-center gap-2 text-primary-blue w-full'>
            <strong>ninongs and ninangs</strong>
            <span>barong and slacks/skirts</span>

            <Image src={barong} alt="barong" className='w-svw aspect-auto' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: .6, delay: .7 }}
            className='flex flex-col items-center gap-2 text-primary-blue w-svw'>
            <strong>guests' dress code</strong>
            <span>
              please celebrate with us in vibrant colors! <br />
              (strictly no white and black/dark attire) <br />
              <strong>girls:</strong> long dresses, flowy, floral, and festive <br />
              <strong>boys:</strong> long / short sleeves polo and slacks (black, khaki, gray, white)
            </span>

            <Image src={guests} alt="guests" className='w-full aspect-auto' />
          </motion.div>
        </div>
      </section>

      {/* next */}
      <section className="bg-secondary-blue relative z-1 font-providence-sans overflow-hidden pb-7">
        <div className="container mx-auto px-8 flex flex-col items-center gap-6 text-primary-blue text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: .6, delay: .8 }}
            className='flex flex-col items-center gap-2 text-primary-blue w-full'>
            <strong className='font-providence-sans relative'>
              cherish the moment
            </strong>
            <span className='text-sm'>
              We’d love for you to be truly with us as we say “I do.” <br />
              Phones down, hearts open — be present, not posted. <br />
              We promise to share the good pics later!
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: .6, delay: .9 }}
            className='flex flex-col items-center gap-2 text-primary-blue w-full'>
            <strong className='font-providence-sans relative'>
              gifts
            </strong>
            <span className='text-sm'>
              Your presence is all we ask, <br />
              but if you&rsquo;re feeling extra sweet, <br />
              a little cash would be a lovely treat... <br />
              for date nights, dreams, and maybe extra fries. <br />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: .6, delay: 1 }}
            className='mt-6 flex flex-col items-center gap-2 text-primary-blue w-full'>
            <strong className='font-providence-sans relative'>
              rsvp
            </strong>
            <span className='text-sm'>
              Seats are set, cake is waiting. Hit us up by <br />
              <strong>September 18</strong> if you're in for the vows, <br />
              the views, and the vibes! <br />
              p.s. your seat is locked in, just bring yourself&hellip; <br />
              and maybe a little something for us.
            </span>
          </motion.div>

          <div className='mt-20 relative w-full h-10 max-w-sm'>
            <Image src={plate} alt="plate" className='size-42 absolute -top-14 -left-15' />
            <Image src={dress} alt="dress" className='size-42 absolute -top-18 left-6' />
            <Image src={cheers2} alt="cheers" className='size-42 absolute -top-15 left-24' />
            <Image src={rings} alt="rings" className='size-28 absolute -top-5 right-22' />
            <Image src={cake} alt="cake" className='size-32 absolute -top-8 right-2' />
            <Image src={note} alt="note" className='size-24 absolute -top-2 -right-8' />
          </div>
        </div>
      </section>
    </div>
  )
}
