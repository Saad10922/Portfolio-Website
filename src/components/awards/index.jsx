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
    <div id="awards-section" class="bg-[url(src/assets/images/education_background.jpg)] py-12">
      <div id="awards-container" class="max-w-7xl mx-auto px-4 lg:px-8">
        <div id="awards-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-x-16">

          <div id="education-section" class="bg-white rounded-lg shadow-md p-6">
            <h2 id="education-title" class="text-2xl font-bold mb-4">EDUCATION</h2>
            <div id="education-list" class="space-y-4 mt-10">
              {educationData.map((item, index) => (
                <React.Fragment key={index}>
                  <div id={`education-item-${index}`} className='flex gap-16'>
                    <div id={`education-date-${index}`} className='education_date text-gray-600 text-sm italic min-w-[80px]'>{item.date}</div>
                    <div id={`education-content-${index}`} className='w-full'>
                      <p id={`education-university-${index}`} class="font-semibold">{item.university}</p>
                      <p id={`education-course-${index}`} class="text-gray-600">{item.course}</p>

                      {index !== educationData.length - 1 && <hr id={`education-divider-${index}`} className='mt-4 border-gray-300 mx-4' />}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div id="awards-content" class="bg-white rounded-lg shadow-md p-6">
            <h2 id="awards-title" class="text-2xl font-bold mb-4">AWARDS</h2>
            <div id="awards-list" class="space-y-4">
              {awardsData.map((item, index) => (
                <React.Fragment key={index}>
                  <div id={`award-item-${index}`} className='flex gap-16'>
                    <img id={`award-icon-${index}`} className='h-10 w-10' src={awards} alt="awards" />
                    <div id={`award-content-${index}`} className='w-full'>
                      <p id={`award-title-${index}`} class="font-semibold">{item.title}</p>
                      <p id={`award-description-${index}`} class="text-gray-600">{item.description}</p>

                      {index !== awardsData.length - 1 && <hr id={`award-divider-${index}`} className='mt-4 border-gray-300 mx-4' />}
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