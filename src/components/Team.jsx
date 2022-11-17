import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const team = [
    { name: 'Jhon Due', charge:'arquitecto super mega guai', image: '/pro.jpg' },
    { name: 'Jhon Due', charge:'arquitecto super mega guai', image: '/pro.jpg' },
    { name: 'Jhon Due', charge:'arquitecto super mega guai', image: '/pro.jpg' },
    { name: 'Jhon Due', charge:'arquitecto super mega guai', image: '/pro.jpg' },
    { name: 'Jhon Due', charge:'arquitecto super mega guai', image: '/pro.jpg' },
]

export const Team = () => {
    const [ref, inView, entry] = useInView();
    const [windowWidth, setWindowWidth] = useState(0)
    
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', ()=>setWindowWidth(window.innerWidth))
    }, [])
    

  return (
    <div ref={ref} className='w-full'>
        <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-10 text-center">Conoce a nuestro equipo</h2>
        <div className={`${inView ? 'block' : 'hidden'} w-[90%] sm:w-[80%] mx-auto`}>
            <Swiper
            centeredSlides
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={windowWidth>800 ? 3 : 1}
            navigation
            autoplay={{ delay:1000 }}
            pagination={{ clickable: true }}
            >
                { team.map((member, i)=>(
                    <SwiperSlide key={ member.name + i }>
                        <div className='w-full'>
                            <img src={member.image} alt={member.name} className='w-[200px] mx-auto'  />
                            <p className='text-center'>{member.name}</p>
                            <p className='pb-10 text-center' >{member.charge}</p> 
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        <div id='contact' className='w-full py-48 bg-orange-400'>
            <p className='text-3xl text-center text-white text-bold'>¿Qué esperas? cotáctanos</p>
            <div className='flex justify-center w-full pt-5'>
                <button className='shadow-lg bg-white font-bold px-4 py-2 text-large rounded-lg'>Comienza a ser sostenible</button>
            </div>
        </div>
    </div>  
  )
}
