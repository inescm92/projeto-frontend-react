import React from 'react';
import ExploreBeach from '../img/explore-beach.jpg';
import ExplorePerfil from '../img/explore-perfil.png';

function Explore() {
	return (
		<section className='explore section' id='explore'>
			<div className='explore__container'>
				<div className='explore__image'>
					<img src={ExploreBeach} alt='explore' className='explore__img' />
					<div className='explore__shadow'></div>
				</div>

				<div className='explore__content container grid'>
					<div className='explore__data'>
						<h2 className='section__title'>
							Explore The <br />
							Best Paradises
						</h2>

						<p className='explore__description'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ducimus earum non hic tempore obcaecati at explicabo laboriosam rerum sed nobis magni fuga, quos perferendis deserunt
							impedit voluptatibus odio fugit! Labore maiores voluptatum beatae.
						</p>
					</div>

					<div className='explore__user'>
						<img src={ExplorePerfil} alt='explore' className='explore__perfil' />
						<span className='explore__name'>Inês Macedo</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Explore;
