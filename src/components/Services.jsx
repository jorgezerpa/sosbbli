import React from 'react'

const services = [
    { title: 'service', image: '/ls3.jpg', description:'Ofrecer servicios de asesoría, evaluación y capacitación referentes a destinos turísticos sostenibles. ' },
    { title: 'service', image: '/ls2.jpg', description:'Adquirir el aval y la facultad para certificar destinos turísticos sostenibles. ' },
    { title: 'service', image: '/ls.jpg', description:'Educar a los prestadores de servicios turísticos en materia de sostenibilidad. ' },
]

export const Services = () => {
  return (
    <>
    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 mt-20">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nuestros Servicios</h2>
    </div>
    <div className='w-full relative flex justify-evenly flex-wrap'>
        {services.map((service, i)=>(
                <div key={'services'+service.title+i} className="w-[250px] rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={service.image} alt={service.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{service.title}</div>
                        <p className="text-gray-700 text-base">{service.description}</p>
                    </div>
                </div>
        ))}
    </div>
    </>
  )
}
