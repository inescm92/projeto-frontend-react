/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Weather from './Weather';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container container grid'>
				<div className='footer__content grid'>
					<div className='footer__weather'>
						<Weather />
					</div>

					<div className='footer__data grid'>
						<div>
							<h3 className='footer__title'>About</h3>
							<ul className='footer__links'>
								<li>
									<Link to='/About' className='footer__link'>
										About us
									</Link>
								</li>

								<li>
									<Link to='/' className='footer__link'>
										Features
									</Link>
								</li>

								<li>
									<Link to='/' className='footer__link'>
										News & Blog
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className='footer__title'>Company</h3>
							<ul className='footer__links'>
								<li>
									<Link to='#' className='footer__link'>
										FAQs
									</Link>
								</li>

								<li>
									<Link to='/' className='footer__link'>
										History
									</Link>
								</li>

								<li>
									<Link to='/' className='footer__link'>
										Testimonials
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className='footer__title'>Contact</h3>
							<ul className='footer__links'>
								<li>
									<Link to='/' className='footer__link'>
										Call Center
									</Link>
								</li>

								<li>
									<Link to='/' className='footer__link'>
										Support Center
									</Link>
								</li>

								<li>
									<Link to='/' className='footer__link'>
										Contact us
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className='footer__title'>Support</h3>
							<ul className='footer__links'>
								<li>
									<Link to='/' className='footer__link'>
										Privacy Policy
									</Link>
								</li>

								<li>
									<Link to='/' className='footer__link'>
										Terms & Services
									</Link>
								</li>

								<li>
									<Link to='/' className='footer__link'>
										Payments
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='footer__group'>
					<div className='footer__social'>
						<Link to='https://www.facebook.com/' target='_blank' className='footer__social-link' rel='noreferrer'>
							<i className='ri-facebook-line'></i>
						</Link>

						<Link to='https://www.instagram.com/' target='_blank' className='footer__social-link' rel='noreferrer'>
							<i className='ri-instagram-line'></i>
						</Link>

						<Link to='https://twitter.com/' target='_blank' className='footer__social-link' rel='noreferrer'>
							<i className='ri-twitter-line'></i>
						</Link>

						<Link to='https://www.youtube.com/' target='_blank' className='footer__social-link' rel='noreferrer'>
							<i className='ri-youtube-line'></i>
						</Link>
					</div>

					<span className='footer__copy'> &#169; Copyright 2023. All Rights Reserved </span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
