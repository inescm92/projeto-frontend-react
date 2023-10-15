/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import JoinIsland from '../img/join-island.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import signupSchema from './ValidationSchema';

const Join = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			email: '',
			message: '',
		},
		validationSchema: signupSchema,
		onSubmit: (values, { resetForm }) => {
			toast.success('Thanks for contacting us! We will get back to you soon.');
			resetForm();
		},
	});

	return (
		<section className='join section'>
			<div className='join__container container grid'>
				<div className='join__data'>
					<h2 className='section__title'>Contact Us</h2>

					<form onSubmit={formik.handleSubmit} className='join__form'>
						<input type='text' name='firstName' placeholder='Enter your name' className='join__input' value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
						{formik.touched.firstName && formik.errors.firstName && <div className='error'>{formik.errors.firstName}</div>}

						<input type='email' name='email' placeholder='Enter your email' className='join__input' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
						{formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>}

						<input
							type='message'
							name='message'
							placeholder='Write here your message'
							className='join__input__message'
							value={formik.values.message}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.message && formik.errors.message && <div className='error'>{formik.errors.message}</div>}

						<button type='submit' className='join__button button'>
							SUBMIT YOUR MESSAGE HERE
						</button>
					</form>
				</div>
				<div className='join__image'>
					<img src={JoinIsland} alt='join' className='join__img' />
					<div className='join__shadow'></div>
				</div>
			</div>
			<ToastContainer position='top-center' autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
		</section>
	);
};

export default Join;
