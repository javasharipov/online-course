import React from 'react'
import logoImage from '../assets/logo.svg'
import accountImage from '../assets/Profile.svg'
import { LINKS } from '../static'

const Header = () => {
	return (
		<header className='w-full bg-[#fedecf] h-20'>
			<nav className='max-w-7xl px-6 mx-auto flex pt-5 '>
				<img src={logoImage} alt='' />
				<ul className='flex items-center gap-10 flex-1 ml-14 '>
					{LINKS.map((item, inx) => {
						return (
							<li
								key={inx}
								className='font-bold text-base text-[#424551] hover:underline'
							>
								<a href={item.link}>
									<span>{item.title}</span>
								</a>
							</li>
						)
					})}
				</ul>
				<div className='flex items-center gap-8'>
				<button className='py-2 px-6 bg-[#FF3F3A] text-white rounded hover:bg-transparent hover:border-[#FF3F3A] hover:text-[#FF3F3A] transition duration-300   border border-[#FF3F3A] '>
					Get Consultation
				</button>
				<div className='flex items-center gap-1 mr-8'>
					<img src={accountImage} alt='' />
					<span className='text-[#424551] font-bold text-base hover:underline cursor-pointer'>Log in / Register</span>
				</div>
				</div>
			</nav>
		</header>
	)
}
export default Header
