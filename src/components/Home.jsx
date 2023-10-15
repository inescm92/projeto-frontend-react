import React from 'react';
import { Link } from 'react-router-dom';

import HomeImage from '../img/home-bg.jpg';
import HomeLake from '../img/home-lake.jpg';
import HomeDesert from '../img/home-desert.jpg';
import HomeMountain from '../img/home-mountain.jpg';
import HomeBeach from '../img/home-beach.jpg';

function Home() {
	return (
		<section className='home section' id='home'>
			<img src={HomeImage} alt='home' className='home__bg' />
			<div className='home__shadow'></div>

			<div className='home__container container grid'>
				<div className='home__data'>
					<h3 className='home__subtitle'>Welcome to Travel</h3>
					<h1 className='home__title'>
						Explore <br />
						The World
					</h1>

					<p className='home__description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis delectus cum dolorum voluptatem dolorem eos. Quos, fuga.</p>

					<Link to='/about' className='button'>
						GET STARTED <i className='ri-arrow-right-line'></i>
					</Link>
				</div>

				<div className='home__cards grid'>
					<article className='home__card'>
						<img src={HomeLake} alt='home' className='home__card-img' />
						<h3 className='home__card-title'>Portugal</h3>
						<div className='home__card-shadow'></div>
					</article>
					<article className='home__card'>
						<img src={HomeDesert} alt='home' className='home__card-img' />
						<h3 className='home__card-title'>Morocco</h3>
						<div className='home__card-shadow'></div>
					</article>
					<article className='home__card'>
						<img src={HomeMountain} alt='home' className='home__card-img' />
						<h3 className='home__card-title'>Switzerland</h3>
						<div className='home__card-shadow'></div>
					</article>

					<article className='home__card'>
						<img src={HomeBeach} alt='home' className='home__card-img' />
						<h3 className='home__card-title'>Greece</h3>
						<div className='home__card-shadow'></div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Home;
