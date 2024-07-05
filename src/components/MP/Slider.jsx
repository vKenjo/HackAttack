import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        image: '/CHARACTERS_WITH_BG/PYTHON - 1.jpg',
        title: 'This is a title',
        description: 'This is a description',
        url: ''
    },
    {
        image: '/CHARACTERS_WITH_BG/JAVA - 1.jpg',
        title: 'This is a second title',
        description: 'This is a second description',
        url: ''
    },
    {
        image: '/CHARACTERS_WITH_BG/HTML - 1.jpg',
        title: 'This is a third title',
        description: 'This is a third description',
        url: ''
    },
    {
        image: 'public/CHARACTERS_WITH_BG/SWIFT - 1.jpg',
        title: 'This is a fourth title',
        description: 'This is a fourth description',
        url: ''
    },
    {
        image: 'CHARACTERS_WITH_BG/CSS - 1.jpg',
        title: 'This is a fifth title',
        description: 'This is a fifth description',
        url: ''
    },
    {
        image: 'https://picsum.photos/800/700',
        title: 'This is a sixth title',
        description: 'This is a sixth description',
        url: ''
    }
];

const Slider = () => {
    const navigate = useNavigate();
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        className: 'flex items-center justify-between m-auto w-11/12',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleNextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const handlePrevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div>
            <SlickSlider ref={sliderRef} {...settings}>
                {slides.map((course) => (
                    <div
                        key={course.title}
                        className='text-center cursor-pointer m-0 p-0 group relative rounded-lg overflow-hidden shadow-sm' // Added rounded-lg and overflow-hidden for rounded images and shadow
                        onClick={() => navigate(course.url)}
                        style={{
                            margin: '0 -2px', // Slightly negative margin to make slides closer
                            width: '200px', // Fixed width for the container
                            height: '300px', // Fixed height for the container
                        }}
                    >
                        <img 
                            src={course.image} 
                            alt={course.title} 
                            className='w-full h-full object-cover rounded-lg' // Rounded image
                        />
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                            <p className='text-white'>{course.description}</p>
                        </div>
                        <p className='text-white'>{course.title}</p>
                    </div>
                ))}
            </SlickSlider>
            <button 
                onClick={handlePrevSlide} 
                className='absolute top-1/2 left-12 transform -translate-y-1/2 bg-gray-800  p-2 rounded-full z-10'
            >
                &lt;
            </button>
            <button 
                onClick={handleNextSlide} 
                className='absolute top-1/2 right-12 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full z-10'
            >
                &gt;
            </button>
        </div>
    );
};

export default Slider;
