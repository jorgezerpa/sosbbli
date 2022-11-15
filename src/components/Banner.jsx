import React from 'react'

export const Banner = () => {
  return (
    <>
      <div className='relative min-h-screen w-full'>
              {/* background  */}
          <div className='absolute w-full h-full md:block hidden'>
              <div className='absolute top-[0px]   left-[400px] w-[200px] h-[200px] bg-gray-300'></div>
              <div className='absolute top-[200px] left-[200px] w-[200px] h-[200px] bg-gray-300'></div>
              <div className='absolute top-[400px] left-[0px] w-[200px] h-[200px] bg-gray-300'></div>
              <div className='absolute bottom-0 right-0 w-[150px] h-[150px] bg-orange-500'></div>
          </div>
          <div className='absolute w-full h-full hidden sm:block md:hidden'>
              <div className='absolute top-[0px]   left-[300px] w-[150px] h-[150px] bg-gray-300'></div>
              <div className='absolute top-[150px] left-[150px] w-[150px] h-[150px] bg-gray-300'></div>
              <div className='absolute top-[300px] left-[0px] w-[150px] h-[150px] bg-gray-300'></div>
              <div className='absolute bottom-0 right-0 w-[125px] h-[125px] bg-orange-500'></div>
          </div>
          <div className='absolute w-full h-full block sm:hidden'>
              <div className='absolute top-[0px]   left-[200px] w-[100px] h-[100px] bg-gray-300'></div>
              <div className='absolute top-[100px] left-[100px] w-[100px] h-[100px] bg-gray-300'></div>
              <div className='absolute top-[200px] left-[0px] w-[100px] h-[100px] bg-gray-300'></div>
          </div>
              {/* content  */}
          <div className='px-2 absolute w-full h-full flex flex-col justify-center items-center'>
              <div className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-[50%] bg-blue-300'></div>
              <div className='font-semibold text-5xl sm:text-7xl text-blue-500'>SOSBBLY</div>
              <div className='text-center text-md sm:text-xl text-blue-500'>Los destinos turísticos sostenibles son posibles.</div>
          </div>
      </div>

      <div className='relative w-full h-[200px] sm:h-[250px] md:h-[300px]'>
          {/* bg image  */}
        <div className='absolute bg-blue-400 w-full h-full'></div>
          {/* bg squares  */}
        <div>
          <div className='absolute hidden sm:block top-0 right-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] bg-white'></div>
          <div className='absolute hidden md:block top-0 right-[150px] w-[150px] h-[150px] bg-orange-500'></div>
          <div className='absolute hidden md:block top-[150px] right-[300px] w-[150px] h-[150px] bg-orange-500'></div>
          <div className='absolute hidden sm:block md:hidden top-0 right-[125px] w-[125px] h-[125px] bg-orange-500'></div>
          <div className='absolute hidden sm:block md:hidden top-[125px] right-[250px] w-[125px] h-[125px] bg-orange-500'></div>
          <div className='absolute block sm:hidden top-0 right-[100px] w-[100px] h-[100px] bg-orange-500'></div>
          <div className='absolute block sm:hidden top-[100px] right-[200px] w-[100px] h-[100px] bg-orange-500'></div>
        </div>
          {/* small top-over image  */}
        <div className='block sm:hidden absolute w-full h-full top-0 left-0 bg-blue-300 z-30'></div>
          {/* content  */}
        <div className='absolute top-0 left-0 w-full h-full'></div>
      </div>
    </>
  )
}
