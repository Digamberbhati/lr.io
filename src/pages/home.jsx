import React from 'react'

function Home() {
  return (
 

<section
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(${"/images/gym.jpg"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Full viewport height
    width: '100%' // Full width
  }}
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-highlight">Beast Version </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center ">
        <a
          href="#"
          className="block w-full rounded bg-highlight px-12 py-3 text-sm  text-textdark font-semibold shadow hover:bg-darkyellow hover:text-textlight duration-300 focus:outline-none focus:ring active:bg-highlight sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-textlight px-12 py-3 text-sm font-semibold text-textdark shadow  hover:text-darkyellow focus:outline-none focus:ring active:text-highlight sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Home
