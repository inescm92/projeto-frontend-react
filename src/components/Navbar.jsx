/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
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

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerWidth >= 1024) {
				const scrollTop = window.scrollY;
				setIsScrolled(scrollTop > 0);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`Navbar ${isScrolled ? 'navbar-blur' : ''}`}>
			<nav className={`nav container ${isMenuOpen ? 'menu-open' : ''}`}>
				<Link to='/Home' className='nav__logo'>
					T R A V E L
				</Link>
				<div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id='nav-menu'>
					<ul className='nav__list'>
						<li className='nav__item'>
							<Link onClick={() => toggleMenu('home')} to='#home' className='nav__link active-link'>
								Home
							</Link>
						</li>
						<li className='nav__item'>
							<Link onClick={() => toggleMenu('about')} to='#about' className='nav__link'>
								About
							</Link>
						</li>
						<li className='nav__item'>
							<Link onClick={() => toggleMenu('popular')} to='#Popular' className='nav__link'>
								Popular
							</Link>
						</li>
						<li className='nav__item'>
							<Link onClick={() => toggleMenu('explore')} to='/Explore' className='nav__link'>
								Explore
							</Link>
						</li>
					</ul>
				</div>

				<div className={menuBtn ? 'nav__toggle active' : 'nav__toggle'} onClick={toggleMenu}>
					<span className='bar'></span>
					<span className='bar'></span>
					<span className='bar'></span>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
