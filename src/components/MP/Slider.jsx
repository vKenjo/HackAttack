import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import {useNavigate} from "react-router-dom";

const slides = [
    {
        image: 'https://picsum.photos/200/300',
        title: 'This is a title',
        description: 'This is a description',
        url: ''
    },
    {
        image: 'https://picsum.photos/600/500',
        title: 'This is a second title',
        description: 'This is a second description',
        url: ''
    },
    {
        image: 'https://picsum.photos/700/600',
        title: 'This is a third title',
        description: 'This is a third description',
        url: ''
    },
    {
        image: 'https://picsum.photos/500/400',
        title: 'This is a fourth title',
        description: 'This is a fourth description',
        url: ''
    },
    {
        image: 'https://picsum.photos/200/300',
        title: 'This is a fifth title',
        description: 'This is a fifth description',
        url: ''
    },
    {
        image: 'https://picsum.photos/800/700',
        title: 'This is a sixth title',
        description: 'This is a sixth description',
        url: ''
    },
    {
        image: 'https://picsum.photos/300/400',
        title: 'This is a seventh title',
        description: 'This is a seventh description',
        url: ''
    },
];

const Slider = () => {
    const navigate = useNavigate()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className='flex items-center justify-between '>
            <SlickSlider {...settings}>
                { slides.map((course) => (
                        <div key={course.title} className='w-40 h-60 bg-black' onClick={ navigate(course.url)}>
                            <p className='text-white'>{course.title}</p>
                            <p>sample</p>
                        </div>
                    )
                )}

            </SlickSlider>
        </div>
    );
};

export default Slider;
