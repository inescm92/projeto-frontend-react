import React from 'react';
import PopularBalloons from '../img/popular-balloons.jpg';
import PopularPicchu from '../img/popular-picchu.jpg';
import PopularAurora from '../img/popular-aurora.jpg';

function Popular() {
	return (
		<section className='popular section' id='popular'>
			<h2 className='section__title'>
				Enjoy The Most Amazing <br />
				Experiences Around The World
			</h2>
			<div className='popular__container container grid'>
				<article className='popular__card'>
					<div className='popular__image'>
						<img src={PopularBalloons} alt='popular' className='popular__img' />
						<div className='popular__shadow'></div>
					</div>

					<h2 className='popular__title'>Cappadocia</h2>

					<div className='popular__location'>
						<i className='ri-map-pin-line'></i>
						<span>Turkey</span>
					</div>
				</article>

				<article className='popular__card'>
					<div className='popular__image'>
						<img src={PopularPicchu} alt='popular' className='popular__img' />
						<div className='popular__shadow'></div>
					</div>

					<h2 className='popular__title'>Machu Picchu</h2>

					<div className='popular__location'>
						<i className='ri-map-pin-line'></i>
						<span>Peru</span>
					</div>
				</article>

				<article className='popular__card'>
					<div className='popular__image'>
						<img src={PopularAurora} alt='popular' className='popular__img' />
						<div className='popular__shadow'></div>
					</div>

					<h2 className='popular__title'>Tromsø</h2>

					<div className='popular__location'>
						<i className='ri-map-pin-line'></i>
						<span>Norway</span>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Popular;
