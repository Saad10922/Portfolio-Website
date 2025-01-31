import React from 'react'
import awards from '../../assets/images/awards.png'

const Awards = () => {
  const educationData = [
    {
      date: "2016-2016",
      university: "Stanford University United States",
      course: "Technology Entrepreneurship"
    },
    {
      date: "2016-2016",
      university: "Stanford University United States",
      course: "Technology Entrepreneurship"
    },
    {
      date: "2016-2016",
      university: "Stanford University United States",
      course: "Technology Entrepreneurship"
    }
  ]

  const awardsData = [
    {
      title: "CEO Excellence Award",
      description: "CEO Club and Governor of Punjab"
    },
    {
      title: "CEO Excellence Award",
      description: "CEO Club and Governor of Punjab"
    },
    {
      title: "CEO Excellence Award",
      description: "CEO Club and Governor of Punjab"
    },
    {
      title: "CEO Excellence Award",
      description: "CEO Club and Governor of Punjab"
    },
    {
      title: "CEO Excellence Award",
      description: "CEO Club and Governor of Punjab"
    }
  ]

  return (
    <div id="awards" class="bg-black py-12">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-4">EDUCATION</h2>
            <div class="space-y-4 mt-10">
              {educationData.map((item, index) => (
                <React.Fragment key={index}>
                  <div className='flex gap-16'>
                    <div className='education_date text-gray-600 text-sm italic min-w-[80px]'>{item.date}</div>
                    <div className='w-full'>
                      <p class="font-semibold">{item.university}</p>
                      <p class="text-gray-600">{item.course}</p>

                      {index !== educationData.length - 1 && <hr className='mt-4 border-gray-300 mx-4' />}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold mb-4">AWARDS</h2>
            <div class="space-y-4">
              {awardsData.map((item, index) => (
                <React.Fragment key={index}>
                  <div className='flex gap-16'>
                    <img className='h-10 w-10' src={awards} alt="awards" />
                    <div className='w-full'>
                      <p class="font-semibold">{item.title}</p>
                      <p class="text-gray-600">{item.description}</p>

                      {index !== awardsData.length - 1 && <hr className='mt-4 border-gray-300 mx-4' />}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Awards