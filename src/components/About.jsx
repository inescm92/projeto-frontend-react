import React from 'react';
import { Link } from 'react-router-dom';

import AboutCaravan from '../img/about-caravan.jpg';

function About() {
	return (
		<section className='about section' id='about'>
			<div className='about__container container grid'>
				<div className='about__data'>
					<h2 className='section__title'>
						Learn More <br />
						About Travel
					</h2>

					<p className='about__description'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae maxime quis itaque, rerum non nihil ratione quo laudantium aliquam voluptatum voluptatem facilis debitis hic? Facere modi
						tenetur distinctio tempora illum. Tempora quidem rem quaerat laborum reiciendis hic.
					</p>

					<Link to='/Explore' className='button'>
						EXPLORE TRAVEL <i className='ri-arrow-right-line'></i>
					</Link>
				</div>

				<div className='about__image'>
					<img src={AboutCaravan} alt='about' className='about__img' />
					<div className='about__shadow'></div>
				</div>
			</div>
		</section>
	);
}

export default About;
