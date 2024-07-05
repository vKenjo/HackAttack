import React from 'react';
import PropTypes from 'prop-types';
import backgroundMP from './assets/BackgroundMP.svg'; // import BG image

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
		<div className='' style={{ backgroundImage: `url(${backgroundMP})` }}>
			<div className=''>
				<h1 className=''>{title}</h1>
				<p className=''>{subtitle}</p>
				{children}
			</div>
		</div>
	);
};

export default Hero;
