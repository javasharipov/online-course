import React from 'react'
import playImage from "../assets/play.svg"
import heroImage from "../assets/heroimage.svg"
import circleImage from "../assets/circle.svg"
import CountUp from "react-countup";

const Hero = () => {
	return (
		<div className='w-full bg-[#fddece] '>
			<div className='max-w-7xl px-6 mx-auto flex justify-center pt-24 gap-28'>
			<div>
				<div className='flex items-center '>
				<img src={playImage} alt="" />
				<span className='text-sm font-bold text-[#1E212C]'>Play showreel</span>
				</div>
				<h2 className='text-[#1E212C] text-6xl font-extrabold leading-[80px] mt-6'>Enjoy studying
				with Createx Online Courses</h2>
				<div className='flex items-center gap-6 mt-14'>
					<button className='py-3 px-7 bg-[#FF3F3A] text-white rounded-sm hover:bg-transparent hover:border-[#FF3F3A] hover:text-[#FF3F3A] transition duration-300   border border-[#FF3F3A] '>About us</button>
					<button className='py-3 px-7 bg-[#FF3F3A] text-white rounded-sm hover:bg-transparent hover:border-[#FF3F3A] hover:text-[#FF3F3A] transition duration-300   border border-[#FF3F3A]'>Explore courses</button>
				</div>
			</div>
			<img src={heroImage} alt="" />
			</div>
			<div className='max-w-7xl px-6 mx-auto mt-[130px] flex '>
       <div className='flex mx-auto mb-4'>
			 <div className='flex items-center gap-2 '>
					<strong className='text-4xl font-black text-[#1E212C]'>
						<CountUp start={0} end={1200} duration={2.5}/>
					</strong>
					<h6 className="text-[#1E212C] text-base font-normal mr-[50px]">Students graduated</h6>
          <img className='mr-7' src={circleImage} alt="" />
				</div>
        <div className='flex items-center gap-2 '>
					<strong className='text-4xl font-black text-[#1E212C]'>
					<CountUp start={0} end={84} duration={2.5}/>
					</strong>
					<h6 className="text-[#1E212C] text-base font-normal mr-[50px]">Completed courses</h6>
          <img className='mr-7' src={circleImage} alt="" />
				</div>
        <div className='flex items-center gap-2 '>
					<strong className='text-4xl font-black text-[#1E212C]'>
					<CountUp start={0} end={16} duration={2.5}/>
					</strong>
					<h6 className="text-[#1E212C] text-base font-normal mr-[50px]">Qualified tutors</h6>
          <img className='mr-7' src={circleImage} alt="" />
				</div>
        <div className='flex items-center gap-2 '>
					<strong className='text-4xl font-black text-[#1E212C]'>
					<CountUp start={0} end={5} duration={2.5}/>
					</strong>
					<h6 className="text-[#1E212C] text-base font-normal mr-[50px]">Years of experience</h6>
				</div>
			 </div>
			</div>
		</div>

	)
}

export default Hero