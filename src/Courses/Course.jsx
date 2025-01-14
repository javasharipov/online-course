import React from 'react'
import person1 from '../assets/person1.png'
import { COURSES } from '../static'

const Course = () => {
	return (
		<div className='max-w-7xl px-6 mx-auto'>
			<div className='flex items-center justify-between mt-40'>
				<div className='flex flex-col gap-2'>
					<span className='text-base uppercase font-bold text-[#1E212C]'>
						Ready to learn?
					</span>
					<h3 className='text-[#1E212C] font-black text-5xl'>
						Featured Courses
					</h3>
				</div>
				<button className='py-2 px-6 bg-[#FF3F3A] text-white rounded hover:bg-transparent hover:border-[#FF3F3A] hover:text-[#FF3F3A] transition duration-300   border border-[#FF3F3A]'>
					View all courses
				</button>
			</div>
			<div className='flex gap-7 items-center flex-wrap mt-16'>
				{/* <div className='flex items-center w-[600px] h-[214px] shadow cursor-pointer'>
					<img src={person1} alt='' />
					<div className='flex flex-col gap-5 p-8'>
						<span className='w-20 h-6 bg-[#03cea4] rounded text-white text-center'>Marketing</span>
						<h5 className='font-bold text-xl'>The Ultimate Google Ads Training Course</h5>
						<div className='flex gap-2'>
							<strong className='text-[#ff6565] text-lg font-bold'>$100</strong>
							<p className='text-[#787A80] font-normal text-lg'>| by Jerome Bell</p>
						</div>
					</div>
				</div> */}
				{
					COURSES?.map((card ) =>(
						<div key={card.id} className='flex items-center w-[600px] h-[214px] shadow cursor-pointer'>
						<img src={card.image} alt='' />
						<div className='flex flex-col gap-5 p-8'>
							<span className='w-20 h-6 bg-[] rounded text-white text-center'>{card.profession.sphere}</span>
							<h5 className='font-bold text-xl'>{card.profession.title}</h5>
							<div className='flex gap-2'>
								<strong className='text-[#ff6565] text-lg font-bold'>${card.price}</strong>
								<p className='text-[#787A80] font-normal text-lg'>{card.fName}</p>
							</div>
						</div>
					</div>
					))
				}
			</div>
		</div>
	)
}

export default Course
