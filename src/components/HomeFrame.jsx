import React from 'react';

const HomeFrame = () => {
    return (
        <section className='bg-[url("/HOMEPAGE_COMPONENTS/HOMEPAGE.svg")] h-full'>
            <div>
                <img className='h-24 w-30' src='public/HOMEPAGE_COMPONENTS/STAR_ONLY.svg' />
            </div>
            
            <div className=''>
                <div className=''>
                    <h1 className=''></h1>
                    <p className=''></p>
                </div>
            </div>
            <div className='h-screen flex items-end justify-end p-4'>
                <div className='flex gap-4 mb-4'>
                    <div className=''>
                        <img className='h-20 w-30' src='public/HOMEPAGE_COMPONENTS/B_MULTIPLAYER_ONLY.png' />
                    </div>
                    <div className=''>
                        <img className='h-20 w-30' src='public/HOMEPAGE_COMPONENTS/B_SOLO_ONLY.png' />
                    </div> 
                </div>
            </div>
            
        </section>
        
    );
};

export default HomeFrame;
