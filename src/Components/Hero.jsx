import React from 'react'
import {logo} from '../assets';
const Hero = () =>  {
  return (
    <header className='w-full flex justify-center items-center flex-col'> 
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="flipkart_logo"
        
        className='w-28 object-contain'/>

        <button
          type="button"
          onClick={() => window.open('https://www.flipkart.com/')}
          className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
        >
          Flipkart
        </button>
      </nav>

      <h1 className="head_text">
      Fashion Speak: <br className='max-md:hidden'/>
    <span className='orange_gradient'
    > GenAI Styles by Flipkart</span>
      </h1>
      <h2 className='desc'>
      Elevate Your Style with GenAI: Flipkart's Conversational Fashion Outfit Generator – Your Personalized Trendsetter!
      </h2>
    </header>
  )
}

export default Hero