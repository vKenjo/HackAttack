import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Language = ({ language }) => {
	const [showFullDescription, setShowFullDescription] = useState(false);

	let description = language.description;

	if (!showFullDescription) {
		description = description.substring(0, 90) + '...';
	}

	return (
		<div className=''>
			<div className=''>
				<div className=''>
					<div className=''>{language.type}</div>
					<h3 className=''>{job.title}</h3>
				</div>

				<div className='mb-5'>{description}</div>

				<button
					onClick={() => setShowFullDescription((prevState) => !prevState)}
					className='text-indigo-500 mb-5 hover:text-indigo-600'
				>
					{showFullDescription ? 'Less' : 'More'}
				</button>

				<div className=''></div>

				<div className=''>
					<Link to={`/jobs/${language.id}`} className=''>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Language;
