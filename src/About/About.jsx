import React from 'react'
import aboutImage from '../assets/about.png'
import checkImage from '../assets/check.svg'
import {ABOUT} from "../static/index"

const About = () => {
	return (
		<div className='max-w-7xl px-6 mx-auto'>
			<div className='flex mt-40 gap-32'>
				<img src={aboutImage} alt='' />
				<div className='flex flex-col items-start '>
					<span className='text-[#1E212C] text-base font-bold uppercase'>
						Who we are
					</span>
					<h3 className='font-black text-5xl mt-2'>Why Createx?</h3>
					<div className='flex my-10 flex-col gap-3'>
					{ABOUT.map((title) => {
              return (
                <div  className='flex items-center gap-2'>
                  <img src={checkImage} alt='check icon' />
                  <span>{title}</span>
                </div>
              )
            })}
					</div>

					<button className='py-2 px-7 bg-[#FF3F3A] text-white rounded hover:bg-transparent hover:border-[#FF3F3A] hover:text-[#FF3F3A] transition duration-300   border border-[#FF3F3A]'>
						More about us
					</button>
				</div>
			</div>
		</div>
	)
}

export default About
