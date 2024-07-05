import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
	return (
		<section className=''>
			<FaExclamationTriangle className='' />
			<h1 className=''>404 Not Found</h1>
			<p className='text-xl mb-5'>This page does not exist</p>
			<Link href='/index.html' className=''>
				Go Back
			</Link>
		</section>
	);
};

export default NotFoundPage;
