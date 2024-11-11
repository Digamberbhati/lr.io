import React from 'react'

function home() {
  return (
    <>
    <main >
    {/* Home Section */}
    <section className="hero relative bg-cover bg-center bg-[url('public/images/personal/IMG_2.jpg')] md:bg-[url('public/images/lokesh3.jpg')]" id="home">
      <div className="absolute"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="max-w-xl text-center pt-20 sm:pt-0 bottom-0 sm:text-left">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-blue-700 text-6xl"> Beast Version. </strong>
          </h1>
          <p className="mt-4 max-w-lg text-white sm:text-xl">
            Transform your fitness journey with our expert-guided workouts and state-of-the-art gym facilities
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="join.html"
              className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 sm:w-auto"
            >
              Get Join
            </a>
            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-700 shadow hover:text-blue-800 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

{/* why choose us */}

<section className="about text-textdark px-8 pt-9 pb-6" id="about">
  <div className="container mx-auto min-h-screen">
    <h1 className="sm:text-[5vw] text-[3vh] text-center pt-4 text-black font-black tracking-tighter uppercase">
      Why Choose us
    </h1>
    <h2 className="sm:text-[2vw] text-center font-black text-blue-700 uppercase">
      because we provide top Notch training
    </h2>

    {/* <!-- cards --> */}
    <div className="wrapper sm:max-w-screen-xl mx-auto mt-8 w-full flex flex-col items-center gap-8 sm:flex-row">
      {/* <!-- Personal Training --> */}
      <div className="card relative hover:info-visible">
        <img src="images/personal/IMG_7.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
        {/* <!-- Gradient overlay --> */}
        <div className="gradient-overlay absolute inset-0"></div>
        <div className="info absolute inset-0  flex-col justify-center items-start text-white z-10 hidden">
          <h1>Personal Training</h1>
          <p>Transform your fitness journey with personalized gym training! Achieve your goals faster with tailored workouts, expert guidance, and unwavering motivation. Start your path to success today!</p>
          <a href="join.html" className="btn">Join Now</a>
        </div>
        <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Personal Training</h1>
      </div>

      {/* <!-- Home Workout --> */}
      <div className="card relative hover:info-visible">
        <img src="images/personal/IMG_3.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
        {/* <!-- Gradient overlay --> */}
        <div className="gradient-overlay absolute inset-0"></div>
        <div className="info absolute inset-0 flex flex-col justify-center items-start text-white z-10 hidden">
          <h1>Home Workout</h1>
          <p>Maximize your home workout with these tips: use bodyweight exercises, create a routine, stay consistent, and mix cardio with strength training for balanced results.</p>
          <a href="join.html" className="btn">Join Now</a>
        </div>
        <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Home Workout</h1>
      </div>

      {/* <!-- Weight Lifting --> */}
      <div className="card relative hover:info-visible">
        <img src="images/personal/IMG_2.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
        {/* <!-- Gradient overlay --> */}
        <div className="gradient-overlay absolute inset-0"></div>
        <div className="info absolute inset-0  flex-col justify-center items-start text-white z-10 hidden">
          <h1>Weight Lifting</h1>
          <p>
            Weight lifting builds strength, improves muscle tone, and boosts metabolism. Incorporate various exercises and proper form to enhance overall fitness and achieve your goals effectively.
          </p>
          <a href="join.html" className="btn">Join Now</a>
        </div>
        <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Weight Lifting</h1>
      </div>

      {/* <!-- Arm Wrestling --> */}
      <div className="card relative hover:info-visible">
        <img src="images/personal/IMG_4.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
        {/* <!-- Gradient overlay --> */}
        <div className="gradient-overlay absolute inset-0"></div>
        <div className="info absolute inset-0  flex-col justify-center items-start text-white z-10 hidden">
          <h1>Arm Wrestling</h1>
          <p>Arm wrestling tests strength and strategy in a head-to-head battle. With grit and technique, competitors push their limits to claim victory.</p>
          <a href="join.html" className="btn">Join Now</a>
        </div>
        <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Arm Wrestling</h1>
      </div>
    </div>
  </div>
</section>
  </>
      
  )
}

export default home
