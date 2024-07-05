import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider.jsx';

const Hero = ({ title, subtitle, children }) => {
	Hero.propTypes = {
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string,
		children: PropTypes.node,
	};

	Hero.defaultProps = {
		subtitle: '',
		children: null,
	};

	return (
		<div className=''>
			<div className=''>
				<h1 className=''>{title}</h1>
				<p className=''>{subtitle}</p>
				{children}
			</div>
			<Slider />
		</div>
	);
};

export default Hero;
