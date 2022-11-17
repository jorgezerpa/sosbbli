import React from 'react'
import { useInView } from 'react-intersection-observer'

export const MVO = () => {
    const [ref, inView] = useInView({threshold:1, trackVisibility:true, delay:300, triggerOnce:true });
    const [refMob1, inViewMob1] = useInView({threshold:.7, trackVisibility:true, delay:100, triggerOnce:true });
    const [refMob2, inViewMob2] = useInView({threshold:.7, trackVisibility:true, delay:100, triggerOnce:true });
    const [refMob3, inViewMob3] = useInView({threshold:.7, trackVisibility:true, delay:100, triggerOnce:true });

  return (
      <div className='w-full min-h-screen mt-20'>
            {/* desktop */}
        <div className='relative hidden md:flex w-full justify-end gap-2 px-0 md:px-5 overflow-y-hidden'>
            <div ref={ref} className={`${inView && 'animate-zoomIn' } opacity-0 absolute top-0 left-20 text-5xl lg:text-7xl font-bold text-orange-500`}>
                Some very very <br /> good title
            </div>
            <div className={`origin-bottom w-[230px] lg:w-[270px] relative top-[250px] scale-y-0 ${inView && 'animate-[heightUp_1s_linear_forwards_.0s]'}`}>
                <div>
                    <h5 className='text-lg font-semibold'>Objetivo General:</h5>
                    <p>Establecer una empresa evaluadora y potenciadora de destinos turísticos sostenibles.</p>  
                </div>
                <div className='w-full  h-[600px] bg-blue-300 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(/ls3.jpg)` }}></div>
            </div>
            <div className={`origin-bottom w-[230px] lg:w-[270px] relative top-[150px] scale-y-0 ${inView && 'animate-[heightUp_1s_linear_forwards_.2s]'}`}>
                <div>
                    <h5 className='text-lg font-semibold'>Visión:</h5>
                    <p>Convertirnos en una empresa certificadora de los destinos turísticos sostenibles.</p>
                </div>
                <div className='w-full h-[600px] bg-blue-300 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(/ls4.jpg)` }}></div>
            </div>
            <div className={`origin-bottom w-[230px] lg:w-[270px] relative top-[50px] scale-y-0 ${inView && 'animate-[heightUp_1s_linear_forwards_.4s]'}`}>
                <div>
                    <h5 className='text-lg font-semibold'>Misión:</h5>
                    <p>Ser pioneros en la formación, consolidación y fortalecimiento de los destinos turísticos sostenibles</p>
                </div>
                <div className='w-full h-[600px] bg-blue-300 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(/ls5.jpg)` }}></div>
            </div>
        </div>

            {/* mobile */}
        <div className='w-full flex flex-col-reverse md:hidden gap-10'>
            <div className='self-start w-[80%] sm:w-[50%]'>
                <h5 className='pl-5 text-xl font-bold'>Objetivo General</h5>
                <p className='pl-5'>Establecer una empresa evaluadora y potenciadora de destinos turísticos sostenibles.</p>  
                <div ref={refMob1} className={`opacity-0 ${inViewMob1 && 'animate-slideRight'} w-full h-[200px] bg-center bg-cover bg-no-repeat`} style={{ backgroundImage: `url(/ls3.jpg)`}}></div>
            </div>
            <div className='self-end w-[80%] sm:w-[50%]'>
                <h5 className=' pr-5 text-right text-xl font-bold'>Visión</h5>
                <p className='pr-5 text-right'>Convertirnos en una empresa certificadora de los destinos turísticos sostenibles.</p>
                <div ref={refMob2} className={`opacity-0 ${inViewMob2 && 'animate-slideLeft'} w-full h-[200px] bg-center bg-cover bg-no-repeat`} style={{ backgroundImage: `url(/ls4.jpg)`}}></div>
            </div>
            <div className=' self-start w-[80%] sm:w-[50%]'>
                <h5 className='pl-5 text-xl font-bold'>Misión</h5>
                <p className='pl-5'>Ser pioneros en la formación, consolidación y fortalecimiento de los destinos turísticos sostenibles</p>
                <div ref={refMob3} className={`opacity-0 ${inViewMob3 && 'animate-slideRight'} w-full h-[200px] bg-center bg-cover bg-no-repeat`} style={{ backgroundImage: `url(/ls5.jpg)`}}></div>
            </div>
        </div>
    </div>
  )
}
