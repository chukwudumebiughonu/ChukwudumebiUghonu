import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avartar1.jpg';
import AVTR2 from '../../assets/avarta2.jpg';
import AVTR3 from '../../assets/avarta3.jpg';

// import Swiper core and required modules
import {/*Navigation*/ Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const data = [
    {
        avatar: AVTR1,
        name: 'Claire McDonald',
        review: 'Working with Chukwudumebi was a great pleasure as he  walked me through each step of the project with a keen eye for details.'
    },
    {
        avatar: AVTR2,
        name: 'Andrea Melovish',
        review: "I was satisfied with the quality of Chukwudumebi's work, and his communication skills, I look forward to working with him on my next project "
    },
    {
        avatar: AVTR3,
        name: 'Pauline Goodman',
        review: 'Chukwudumebi is an excellent developer!'
    },
]

const Testimonials = () => {
    return(
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container'
            // install Swiper modules
            modules={[ Pagination ]} 
            /* modules={[Navigation, Pagination, Scrollbar, Ally]} */
            spaceBetween={40} 
            slidesPerView={1} 
            /* navigation */
            pagination={{ clickable: true }} 
            /* scrollbar={{ draggable: true }} */
            /* onSwiper={(swiper) => console.log(swiper)} */
            /* onSlideChange={() => console.log('slide change')} */>
                {
                    data.map(({avatar, name, review}, index) => {
                      return (
                        <SwiperSlide key={index} className='testimonial'>
                        <div className='client__avatar'>
                          <img src={avatar} alt='Avartar One' />
                        </div>
                        <h5 className='client__name'>{name}</h5> 
                        <small className='client__review'>
                            {review}
                        </small>
                      </SwiperSlide> 
                     )
                  })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials;