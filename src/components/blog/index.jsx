import React, { memo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence: Trends and Challenges',
    author: 'John',
    date: 'Oct 11, 2023',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080',
    profile: 'https://randomuser.me/api/portraits/men/2.jpg',
    link: '/tech-blog/post1',
  },
  {
    id: 2,
    title: 'The Rise of Blockchain Technology: A Comprehensive Guide',
    author: 'Jane',
    date: 'Sept 25, 2023',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080',
    profile: 'https://randomuser.me/api/portraits/women/2.jpg',
    link: '/tech-blog/post2',
  },
  {
    id: 3,
    title: 'How Quantum Computing Will Revolutionize Data Security',
    author: 'Michael',
    date: 'Sept 24, 2023',
    image: 'https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080',
    profile: 'https://randomuser.me/api/portraits/men/4.jpg',
    link: '/tech-blog/post3',
  },
];

const Blogs = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < blogPosts.length - 1) {
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
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">From The Blog</h2>
          <p className="mt-2 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">
            Dive into the latest in technology with our insightful blog posts.
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

          <div className="hidden md:grid grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
        </div>
      </div>
    </div>
  );
});

export default Blogs;