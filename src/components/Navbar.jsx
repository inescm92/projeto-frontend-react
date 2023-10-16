import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [menuMobile, setmenuMobile] = useState(false);
	const [menuBtn, setMenuBtn] = useState(false);

	const toggleMenu = sectionId => {
		setmenuMobile(active => !active);
		setMenuBtn(active => !active);

		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className='navbar'>
			<div className='nav container'>
				<div className='nav__logo'>T R A V E L</div>
				<nav>
					<div className='nav__menu' id='nav-menu'>
						<ul className={menuMobile ? 'nav__list active' : 'nav__list'}>
							<li>
								<Link onClick={() => toggleMenu('home')} to='#home' className='nav__link active-link'>
									Home
								</Link>
							</li>
							<li>
								<Link onClick={() => toggleMenu('about')} to='#about' className='nav__link'>
									About
								</Link>
							</li>
							<li>
								<Link onClick={() => toggleMenu('popular')} to='#Popular' className='nav__link'>
									Popular
								</Link>
							</li>
							<li>
								<Link onClick={() => toggleMenu('explore')} to='/Explore' className='nav__link'>
									Explore
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				<div className={menuBtn ? 'navbar__toggle active' : 'navbar__toggle'} onClick={toggleMenu}>
					<span className='bar'></span>
					<span className='bar'></span>
					<span className='bar'></span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
