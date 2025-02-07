import React, { memo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";

const profile = 'https://media.licdn.com/dms/image/v2/D4D03AQEyAuIwHILt5w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712489655678?e=1744243200&v=beta&t=jYLLgwiUPrrHBwsFu7XCb3Mtz_x_E0OeYCv7btyWcvY'
const blogPosts = [
  {
    id: 1,
    title: 'Optimal Methods and Metrics for LLM Testing',
    author: "Muhammad Usman",
    date: 'December 10, 2024',
    image: blog1,
    profile: profile,
    link: 'https://www.linkedin.com/pulse/optimal-methods-metrics-llm-testing-muhammad-usman-istqb-ctfl-aplcf/',
  },
  {
    id: 2,
    title: 'The Impact of Quantum Computing on Software Testing',
    author: 'Muhammad Usman',
    date: 'November 27, 2024',
    image: blog2,
    profile: profile,
    link: 'https://www.linkedin.com/pulse/impact-quantum-computing-software-testing-muhammad-usman-istqb-ctfl-iyoae/',
  },
  {
    id: 3,
    title: 'The Future of Mobile Testing in 2025: Trends, Challenges, and Opportunities',
    author: 'Muhammad Usman',
    date: 'September 19, 2024',
    image: blog3,
    profile: profile,
    link: 'https://www.linkedin.com/pulse/future-mobile-testing-2025-trends-challenges-muhammad-usman-pm0lf/',
  },
  {
    id: 4,
    title: 'Mastering Remote QA Leadership: Strategies for Leading Distributed Testing Teams',
    author: 'Muhammad Usman',
    date: 'November 18, 2024',
    image: blog4,
    profile: profile,
    link: 'https://www.linkedin.com/pulse/mastering-remote-qa-leadership-strategies-leading-usman-istqb-ctfl-fckmf/',
  },
];
const Blogs = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < blogPosts.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div id="blog" className="w-full dark:bg-gray-800 py-10 pb-30 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Blogs</h2>
          <p className="mt-2 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">
          Dive into the latest in technology with my insightful blog posts.
          </p>
        </div>

        <div className="relative mt-8">
          <div className="block md:hidden">
            <div className="relative flex items-center justify-center">
              {currentIndex > 0 && (
                <button onClick={handlePrev} className="absolute left-4 z-10 p-3 bg-gray-700 rounded-full hover:bg-gray-600">
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
              )}

              <div className="w-full max-w-2xl mx-auto">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                  <img src={blogPosts[currentIndex].image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time className="mr-8">{blogPosts[currentIndex].date}</time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <div className="flex gap-x-2.5">
                        <img src={blogPosts[currentIndex].profile} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                        {blogPosts[currentIndex].author}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={blogPosts[currentIndex].link}><span className="absolute inset-0"></span>{blogPosts[currentIndex].title}</a>
                  </h3>
                </article>
              </div>

              {currentIndex < blogPosts.length - 1 && (
                <button onClick={handleNext} className="absolute right-4 z-10 p-3 bg-gray-700 rounded-full hover:bg-gray-600">
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              )}
            </div>
          </div>

          <div className="hidden md:block relative">
            {currentIndex > 0 && (
              <button onClick={handlePrev} className="absolute left-4 top-1/2 z-10 p-3 bg-gray-700 rounded-full hover:bg-gray-600 transform -translate-y-1/2">
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
            )}
            
            <div className="grid grid-cols-3 gap-8">
              {blogPosts.slice(currentIndex, currentIndex + 3).map((post) => (
                <article key={post.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                  <img src={post.image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time className="mr-8">{post.date}</time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <div className="flex gap-x-2.5">
                        <img src={post.profile} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                        {post.author}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={post.link}><span className="absolute inset-0"></span>{post.title}</a>
                  </h3>
                </article>
              ))}
            </div>

            {currentIndex < blogPosts.length - 3 && (
              <button onClick={handleNext} className="absolute right-4 top-1/2 z-10 p-3 bg-gray-700 rounded-full hover:bg-gray-600 transform -translate-y-1/2">
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Blogs;