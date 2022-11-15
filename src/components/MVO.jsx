import React from 'react'

export const MVO = () => {
  return (
      <div className='w-full min-h-screen mt-20'>
            {/* desktop */}
        <div className='relative hidden md:flex w-full justify-end gap-2 px-0 md:px-5 overflow-y-hidden'>
            <div className='absolute top-0 left-20 text-5xl lg:text-7xl font-bold text-orange-500'>
                Some very very <br /> good title
            </div>
            <div className='w-[230px] lg:w-[270px] relative top-[250px]'>
                <div>
                    <h5 className='text-lg font-semibold'>Objetivo General:</h5>
                    <p>Establecer una empresa evaluadora y potenciadora de destinos turísticos sostenibles.</p>  
                </div>
                <div className='w-full h-[600px] bg-blue-300 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(/ls3.jpg)` }}></div>
            </div>
            <div className='w-[230px] lg:w-[270px] relative top-[150px]'>
                <div>
                    <h5 className='text-lg font-semibold'>Visión:</h5>
                    <p>Convertirnos en una empresa certificadora de los destinos turísticos sostenibles.</p>
                </div>
                <div className='w-full h-[600px] bg-blue-300 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(/ls4.jpg)` }}></div>
            </div>
            <div className='w-[230px] lg:w-[270px] relative top-[50px]'>
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
                <div className='w-full h-[200px] bg-blue-300'></div>
            </div>
            <div className='self-end w-[80%] sm:w-[50%]'>
                <h5 className=' pr-5 text-right text-xl font-bold'>Visión</h5>
                <p className='pr-5 text-right'>Convertirnos en una empresa certificadora de los destinos turísticos sostenibles.</p>
                <div className='w-full h-[200px] bg-blue-300'></div>
            </div>
            <div className=' self-start w-[80%] sm:w-[50%]'>
                <h5 className='pl-5 text-xl font-bold'>Misión</h5>
                <p className='pl-5'>Ser pioneros en la formación, consolidación y fortalecimiento de los destinos turísticos sostenibles</p>
                <div className='w-full h-[200px] bg-blue-300'></div>
            </div>
        </div>
    </div>
  )
}
