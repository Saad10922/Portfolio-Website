import React from 'react'
import awards from '../../assets/images/awards.png'

const Awards = () => {
  return (
    <div class="bg-black py-12">
  <div class="max-w-7xl mx-auto px-4 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">EDUCATION</h2>
        <div class="space-y-4 ">
        <div className='flex gap-16'>
          <div className='education_date text-gray-600'>2016-2016</div>
           <div>
            <p class="font-semibold">Stanford University United States</p>
            <p class="text-gray-600">Technology Entrepreneurship</p>
          </div>
        </div>
        <hr className='text-gray-600' />
        <div className='flex gap-16'>
          <div className='education_date text-gray-600'>2016-2016</div>
           <div>
            <p class="font-semibold">Stanford University United States</p>
            <p class="text-gray-600">Technology Entrepreneurship</p>
          </div>
        </div>
        <hr />
        <div className='flex gap-16'>
          <div className='education_date text-gray-600'>2016-2016</div>
           <div>
            <p class="font-semibold">Stanford University United States</p>
            <p class="text-gray-600">Technology Entrepreneurship</p>
          </div>
        </div>
        <hr />
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">AWARDS</h2>
        <div class="space-y-4">
        <div className='flex gap-16'>
             <img className='h-10 w-10' src={awards}  alt="awards" />
          <div>
            <p class="font-semibold">CEO Excellence Award</p>
            <p class="text-gray-600">CEO Club and Governor of Punjab</p>
          </div>
        </div>
        <hr />
        <div className='flex gap-16'>
             <img className='h-10 w-10' src={awards}  alt="awards" />
          <div>
            <p class="font-semibold">CEO Excellence Award</p>
            <p class="text-gray-600">CEO Club and Governor of Punjab</p>
          </div>
        </div>
        <hr />
        <div className='flex gap-16'>
             <img className='h-10 w-10' src={awards}  alt="awards" />
          <div>
            <p class="font-semibold">CEO Excellence Award</p>
            <p class="text-gray-600">CEO Club and Governor of Punjab</p>
          </div>
        </div>
        <hr />
        <div className='flex gap-16'>
             <img className='h-10 w-10' src={awards}  alt="awards" />
          <div>
            <p class="font-semibold">CEO Excellence Award</p>
            <p class="text-gray-600">CEO Club and Governor of Punjab</p>
          </div>
        </div>
        <hr />
        <div className='flex gap-16'>
             <img className='h-10 w-10' src={awards}  alt="awards" />
          <div>
            <p class="font-semibold">CEO Excellence Award</p>
            <p class="text-gray-600">CEO Club and Governor of Punjab</p>
          </div>
        </div>
        <hr />
        </div>
      </div>

    </div>
  </div>
</div>  )
}

export default Awards