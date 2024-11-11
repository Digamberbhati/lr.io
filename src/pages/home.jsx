import React from 'react'

function home() {
  return (
    <>
       <main>
        <section className="hero relative" id="home">
            <div className="absolute "></div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="max-w-xl text-center pt-20 sm:pt-0 bottom-0 sm:text-left ">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                        Let us find your
                        <strong className="block font-extrabold text-blue-700 text-6xl"> Beast Version. </strong>
                    </h1>
                    <p className="mt-4 max-w-lg text-white sm:text-xl">Transform your fitness journey with our expert-guided workouts and state-of-the-art gym facilities</p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="join.html" className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 sm:w-auto">Get Join</a>
                        <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-700 shadow hover:text-blue-800 sm:w-auto">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    </main>


{/* counter */}

<div className="counter-wrapper">
    <div className="counter  flex flex-col items-center">
       
            <img src="images/svg/arrrow.svg" alt="" className="h-10"/>
            <div className="text-[#1D4ED8] font-bold flex items-center ">
                <h1 className="count " data-target="469">0</h1>
                <span className="text-[3vw]">K+</span>
            </div>
          
       
        <p>Social media Followers</p>
    </div>
   
    <div className="counter  flex flex-col items-center">
       
        <img src="images/svg/awwards.svg" alt="" className="h-10 "/>
        <div className="text-[#1D4ED8] font-bold flex items-center ">
            <h1 className="count " data-target="400">0</h1>
    {/*         <!-- <span className="text-[3vw]">K+</span> --> */}
        </div>
      
   
    <p>Awards Won</p>
</div>

<div className="counter  flex flex-col items-center">
       
    <img src="images/svg/people.svg" alt="" className="h-10"/>
    <div className="text-[#1D4ED8] font-bold flex items-center ">
        <h1 className="count " data-target="550">0</h1>
        <span className="text-[3vw]">+</span>
    </div>
  

<p>Clients</p>
</div>

<div className="counter  flex flex-col items-center">
       
    <img src="images/svg/collab.svg" alt="" className="h-10"/>
    <div className="text-[#1D4ED8] font-bold flex items-center ">
        <h1 className="count " data-target="1000">0</h1>
        <span className="text-[3vw]">+</span>
    </div>
  

<p>Brands Collabration</p>
</div>
</div>



{/*     <!-- about why choose us --> */}

         
<section className="about  text-textdark px-8 pt-9 pb-6 "
    id="about"
    >
  
      <div className="containe mx-auto min-h-screen">
          <h1 className="sm:text-[5vw] text-[3vh] text-center pt-4 text-black font-black tracking-tighter uppercase">
              Why Choose us
          </h1>
          <h2 className="sm:text-[2vw] text-center font-black text-blue-700 uppercase ">
              because we provide top Notch training
          </h2>


  {/* <!-- cards --> */}
  <div className="wrapper sm:max-w-screen-xl mx-auto mt-8 w-full flex flex-col items-center gap-8 sm:flex-row">

  {/*   <!-- Personal Training --> */}
    <div className="card relative">
        <img src="images/personal/pt.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
        
     {/*    <!-- Gradient overlay --> */}
        <div className="gradient-overlay absolute inset-0"></div>
        
        <div className="info absolute inset-0 flex flex-col justify-center items-start text-white z-10">
            <h1>Personal Training</h1>
            <p>Transform your fitness journey with personalized gym training! Achieve your goals faster with tailored workouts, expert guidance, and unwavering motivation. Start your path to success today!</p>
            <a href="join.html" className="btn">Join Now</a>
        </div>
        
        <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Personal Training</h1>
    </div>

  {/*   <!-- Home Workout --> */}
    <div className="card relative">
        <img src="images/personal/hw.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
        
     {/*    <!-- Gradient overlay --> */}
        <div className="gradient-overlay absolute inset-0"></div>
        
        <div className="info absolute inset-0 flex flex-col justify-center items-start text-white z-10">
            <h1>Home Workout</h1>
            <p>Maximize your home workout with these tips: use bodyweight exercises, create a routine, stay consistent, and mix cardio with strength training for balanced results.</p>
            <a href="join.html" className="btn">Join Now</a>
        </div>
        
        <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Home Workout</h1>
    </div>

 {/*    <!-- Weight Lifting --> */}
    <div className="card relative">
        <img src="images/personal/wt.png" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
        
       {/*  <!-- Gradient overlay --> */}
        <div className="gradient-overlay absolute inset-0"></div>
        
        <div className="info absolute inset-0 flex flex-col justify-center items-start text-white z-10">
            <h1>Weight Lifting</h1>
            <p>
                Weight lifting builds strength, improves muscle tone, and boosts metabolism. Incorporate various exercises and proper form to enhance overall fitness and achieve your goals effectively.</p>
            <a href="join.html" className="btn">Join Now</a>
        </div>
        
        <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Weight Lifting</h1>
    </div>

   {/*  <!-- Arm Wrestling --> */}
    <div className="card relative">
        <img src="images/personal/arm.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
     {/*  <!-- Gradient overlay --> */}
        <div className="gradient-overlay absolute inset-0"></div>
        
        <div className="info absolute inset-0 flex flex-col justify-center items-start text-white z-10">
            <h1>Arm Wrestling</h1>
            <p>Arm wrestling tests strength and strategy in a head-to-head battle. With grit and technique, competitors push their limits to claim victory.</p>
            <a href="join.html" className="btn">Join Now</a>
        </div>
        
        <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Arm Wrestling</h1>
    </div>

</div>
          
      </div>
  
  </section>



 {/*  <!-- achiment --> */}
  <section className="timeline  mx-auto max-w-screen-lg mt-10 mb-10 px-4">

    <h1 className=" sm:text-[4vw] text-[4vh] mb-4 font-black tracking-tight text-center mt-8 ">Lokesh's <span className=" text-blue-700"> Achievement</span> </h1>

    <ol className="relative  border-s border-gray-700">                  
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border  border-gray-900 "></div>
            <time className="mb-1 text-sm font-normal leading-none "> 2023</time>
            <h3 className="text-lg font-semibold ">Mr. World (Gold medalist) </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lokesh Rajput earned the Mr. World Gold Medal in Europe, showcasing exceptional global bodybuilding excellence in 2023.</p>
          
        </li>
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border  border-gray-900 "></div>
            <time className="mb-1 text-sm font-normal leading-none ">2016</time>
            <h3 className="text-lg font-semibold ">Mr. Haryana</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lokesh Rajput’s success as Mr. Haryana underscores his remarkable commitment and standout presence.</p>
        </li>
        <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border  border-gray-900 "></div>
            <time className="mb-1 text-sm font-normal leading-none ">2015</time>
            <h3 className="text-lg font-semibold ">Mr. Gurgaon</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lokesh Rajput's victory as Mr. Gurgaon 2015 highlighted his outstanding presence and commitment, elevating his status in the pageant world.</p>
        </li>
    </ol>


  </section>
        




        {/* <!-- Brand Collab  --> */}

        <section className="mt-20 mb-32 ">
            <h1 className="py-10 sm:text-[4vw] text-[4vh] mb-4 font-black tracking-tight text-center mt-8 ">Brand<span className="text-blue-700"> Collaborations</span> </h1>

            {/* <!-- Marquee --> */}

            <div className="scroll-wrapper">
                <div className="scroll-item-left item-left-1">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-left item-left-2">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy/"/>
                </div>
                <div className="scroll-item-left item-left-3">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-left item-left-4">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-left item-left-5">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-left item-left-6">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-left item-left-7">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>/
                </div>
                <div className="scroll-item-left item-left-8">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
              </div>
              <div className="scroll-wrapper">
                <div className="scroll-item-right item-right-1">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-right item-right-2">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-right item-right-3">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-right item-right-4">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-right item-right-5">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-right item-right-6">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>/
                <div className="scroll-item-right item-right-7">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
                <div className="scroll-item-right item-right-8">
                    <img src="https://muscledi8nutrition.in/wp-content/uploads/2023/11/logo5-768x157.png" alt="logo" loading="lazy"/>
                </div>
              </div>
              



        </section>


        
        {/* <!-- our teams  --> */}
        
    <section className="mb-10">
        <h1 className=" sm:text-[4vw] text-[4vh] mb-4 font-black tracking-tight text-center mt-8 ">Our <span className=" text-blue-700"> Team </span> </h1>
        <div className="wrapper sm:max-w-screen-xl mx-auto mt-8 w-full  flex flex-col items-center gap-8 sm:flex-row ">



            <div className="card relative">
        <img src="images/personal/pt.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
        
        {/* <!-- Gradient overlay --> */}
        <div className="gradient-overlay absolute inset-0"></div>
        
        <div className="info absolute inset-0 flex flex-col justify-center items-start text-white z-10">
            <h1>Lokesh Rajput</h1>
            <p>Lorem ipsum is simply dummy text from the printing and typing industry</p>
            <a href="https://www.instagram.com/lokesh_rajput07/" className="btn" target="_blank">Visit </a>
        </div>
        
        <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Lokesh Rajput</h1>
            </div>

            <div className="card relative">
                <img src="images/personal/pt.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
                
                {/* <!-- Gradient overlay --> */}
                <div className="gradient-overlay absolute inset-0"></div>
                
                <div className="info absolute inset-0 flex flex-col justify-center items-start text-white z-10">
                    <h1>Lokesh Rajput</h1>
                    <p>Lorem ipsum is simply dummy text from the printing and typing industry</p>
                    <a href="https://www.instagram.com/lokesh_rajput07/" className="btn" target="_blank">Visit </a>
                </div>
                
                <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Lokesh Rajput</h1>
                    </div>

                    <div className="card relative">
                        <img src="images/personal/pt.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
                        
                        {/* <!-- Gradient overlay --> */}
                        <div className="gradient-overlay absolute inset-0"></div>
                        
                        <div className="info absolute inset-0 flex flex-col justify-center items-start text-white z-10">
                            <h1>Lokesh Rajput</h1>
                            <p>Lorem ipsum is simply dummy text from the printing and typing industry</p>
                            <a href="https://www.instagram.com/lokesh_rajput07/" className="btn" target="_blank">Visit </a>
                        </div>
                        
                        <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Lokesh Rajput</h1>
                            </div>
                
                            <div className="card relative">
                                <img src="images/personal/pt.jpg" alt="" loading="lazy" className="filter drop-shadow-xl w-full h-full object-cover"/>
{/*                                 
                                <!-- Gradient overlay --> */}
                                <div className="gradient-overlay absolute inset-0"></div>
                                
                                <div className="info absolute inset-0 flex flex-col justify-center items-start text-white z-10">
                                    <h1>Lokesh Rajput</h1>
                                    <p>Lorem ipsum is simply dummy text from the printing and typing industry</p>
                                    <a href="https://www.instagram.com/lokesh_rajput07/" className="btn" target="_blank">Visit </a>
                                </div>
                                
                                <h1 className="absolute bottom-4 uppercase font-black sm:text-[2vw] text-[4vh] text-zinc-200">Lokesh Rajput</h1>
                                    </div>
                        
        </div>
    </section>


{/* <!-- Our Gallery --> */}

        <section className="pb-10 pt-20">
            <h1 className=" sm:text-[4vw] text-[4vh] mb-4 font-black tracking-tight text-center mt-8 ">Our <span className=" text-blue-700"> Gallery</span> </h1>
        <div className="wrapper sm:max-w-screen-xl mx-auto mt-8 w-full  flex flex-col items-center gap-8 sm:flex-row "/>

                {/* <!-- Gallery images --> */}

                <div className="custom-wrapper">
                    <div className="custom-gallery">
                        <div className="custom-gallery__item custom-gallery__item--1">
                            <a href="#" className="custom-gallery__link ">
                                <img src="images/personal/cleb.jpg" className="custom-gallery__image"  loading="lazy"  />
                                <div className="custom-gallery__overlay ">
                                    <span>Lokesh Rajput</span>
                                </div>
                            </a>
                        </div>
                        <div className="custom-gallery__item custom-gallery__item--2">
                            <a href="#" className="custom-gallery__link">
                                <img src="images/personal/meetup.jpg" className="custom-gallery__image object-top"  />
                                <div className="custom-gallery__overlay">
                                    <span>Lokesh Rajput</span>
                                </div>
                            </a>
                        </div>
                        <div className="custom-gallery__item custom-gallery__item--3">
                            <a href="#" className="custom-gallery__link">
                                <img src="images/personal/award.jpg" className="custom-gallery__image"  loading="lazy" />
                                <div className="custom-gallery__overlay">
                                    <span>Lokesh Rajput</span>
                                </div>
                            </a>
                        </div>
                        <div className="custom-gallery__item custom-gallery__item--4">
                            <a href="#" className="custom-gallery__link">
                                <img src="images/personal/brand.jpg" className="custom-gallery__image"  loading="lazy" />
                                <div className="custom-gallery__overlay">
                                    <span>Lokesh Rajput</span>
                                </div>
                            </a>
                        </div>
                        <div className="custom-gallery__item custom-gallery__item--5">
                            <a href="#" className="custom-gallery__link">
                                <img src="images/personal/group.jpg" className="custom-gallery__image"  loading="lazy" />
                                <div className="custom-gallery__overlay">
                                    <span>Lokesh Rajput</span>
                                </div>
                            </a>
                        </div>
                        <div className="custom-gallery__item custom-gallery__item--6">
                            <a href="#" className="custom-gallery__link">
                                <img src="images/personal/teamup.png" className="custom-gallery__image"  loading="lazy" />
                                <div className="custom-gallery__overlay">
                                    <span>Lokesh Rajput</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                

        </section>
    </>
  )
}

export default home
