import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

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
  return (
    <div className='w-full'>
        <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-10 text-center">Conoce a nuestro equipo</h2>
        <div className='w-[80%] mx-auto'>
            <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            autoplay={{ delay:3000 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                { team.map((member, i)=>(
                    <SwiperSlide>
                        <img src={member.image} alt={member.name} className='w-[200px]'  />
                        <p>{member.name}</p>
                        <p className='pb-10' >{member.charge}</p> 
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        <div className='w-full py-48 bg-orange-400'>
            <p className='text-3xl text-center text-white text-bold'>¿Qué esperas? cotáctanos</p>
            <div className='flex justify-center w-full pt-5'>
                <button className='shadow-lg bg-white font-bold px-4 py-2 text-large rounded-lg'>Comienza a ser sostenible</button>
            </div>
        </div>
    </div>  
  )
}
