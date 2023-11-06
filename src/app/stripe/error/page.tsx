import { Cross} from 'lucide-react'
import React from 'react'

const StripeError = () => {
  return (
    <div className='h-screen'>
    <div className='mt-32 md:max-w-[50vw] mx-auto'>
    <Cross className='rounded-full rotate-45 bg-red-600 text-white w-16 h-16 mx-auto my-6' />
      <div className="text-center">
      <h3 className="text-gray-900 font-lg font-semibold ">
        Something went wrong...
      </h3>
      <p className='text-gray-600 font-semibold my-2'>Please Try Again, Thank You!</p>
    </div>
   
    
    </div>
    </div>
  )
}

export default StripeError
