import React from 'react'

function Contact() {
  return (
    <>
    
    <div className="contact pt-4 bg-slate-600"
>
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-white">
        <h2 className="mb-4 text-4xl  tracking-tight font-extrabold text-center ">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">We’re here to answer your questions! fill the form for your queries</p>
        {/* <!-- contact form --> */}
        
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8" id="myForm">
            <input type="hidden" name="access_key" value="379d7b37-1aed-444c-affe-09ed08831892"/>
            <div>
                <label for="email" className="block mb-2 text-sm font-bold  text-gray-100">Your email</label>
                <input type="email" name="email" id="email" className="rounded-lg  border-2 p-2.5 w-full outline-none  bg-zinc-200 text-black " placeholder="name@flowbite.com" required/>
            </div>
            <div>
                <label for="subject" className="block mb-2 text-sm font-bold text-gray-100">Subject</label>
                <input type="text" name="subject" id="subject" className="rounded-lg  border-2 p-2.5 w-full outline-none bg-zinc-200 text-black " placeholder="Let us know how we can help you" required/>
            </div>
            <div className="sm:col-span-2">
                <label for="message" className="block mb-2 text-sm font-bold text-gray-100">Your message</label>
                <textarea id="message" name="message" rows="6" className="rounded-lg  border-2 p-2.5 w-full outline-none bg-zinc-200 text-black " placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#2563eb] sm:w-fit hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#1e40af]">
                Send message
              </button>
              
        </form>
    </div>
  </div>
    </>
    
  )
}

export default Contact
