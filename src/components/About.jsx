import React from 'react'

const About = () => {
  return (

    <div className=' bg-lightBackground text-textdark px-8 pb-6'>

        <h1 className='sm:text-[5vw] text-center pt-4 font-black tracking-tighter uppercase  ' >About Lokesh Rajput</h1>
        <h2 className='sm:text-[2vw] text-center font-black text-background '>ONLINE PERSONAL TRAINER & FOUNDER</h2>


    <div className='w-full min-h-screen flex items-center justify-center sm:gap-20 gap-10  flex-col sm:flex-row '>

      <div className='shadow sm:w-1/4 w-full  mt-4   rounded-lg opacity-110  overflow-hidden bg-red-400'>
        <img src="/images/owner.jpg" alt="" className='scale-125 hover:scale-100 duration-300  object-fill  '  />
      </div>

      <div className='flex flex-col gap-4 sm:w-1/3 '>
            <p>I’m Josef Rakich and years ago, <strong>fitness changed my life.</strong> </p>

            <p>This change was so profound that I made a commitment to help others experience the same turnaround in their lives.</p>

            <p>My mission now is to help as many people as I can achieve their goals and turn their lives around with my nutrition and workout plans. </p>

            <p>Once your body is in great shape you’ll see improvements in all areas of life, with heightened energy and greater confidence in yourself. </p>

            <p> <strong> You deserve the best version of yourself… </strong>and so do those you love. Life becomes so much easier when you love the body you’re in. </p>
            
            <p>Losing fat, gaining muscle, eating healthy… these shouldn’t be complicated or expensive and that is why I developed the JRF program. </p>

            <p>To make reaching your fitness goals fun, simple and affordable.</p>
      </div>
    </div>
    </div>
  )
}

export default About
