import React from 'react';

const Hero = ({
	title = 'Start your Programming Journey',
	subtitle = 'Learn as an Individual, fight your place as a coder',
}) => {
	return (
		<>
			<section className=''>
				<div className=''>
					<div className=''>
						<h1 className=''>{title}</h1>
						<p className=''>{subtitle}</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
