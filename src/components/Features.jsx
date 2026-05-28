import { features } from '../constants';

const Features = () => {
  return (
    <div className='relative max-w-7xl mx-auto pt-20 px-6  min-h-[600px]'>
        <h2 className='text-3xl  text-gray-900 dark:text-white'>Why choose Digitalbank?</h2>
        <p className='text-md w-1/2 py-6 mb-20 text-neutral-500'>We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>


        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
            {features.map((feature,index)=>(
                <div key={index} className='flex flex-col items-start gap-6'>
                    <img src={feature.icon} alt="icon" />
                    <h3 className='text-xl text-gray-900 dark:text-white'>{feature.text}</h3>
                    <p className='text-sm text-neutral-500'>{feature.description}</p>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Features