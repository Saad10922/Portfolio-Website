import React, { memo } from 'react';
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import blog6 from "../../assets/images/blog6.jpg";
import blog7 from "../../assets/images/blog7.jpg";
import blog8 from "../../assets/images/blog8.jpeg";
import blogBack from "../../assets/images/blog_back.jpg";

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
  {
    id: 5,
    title: 'The Psychology Behind Error Reporting and Feedback in Software Quality Assurance',
    author: 'Muhammad Usman',
    date: 'July 8, 2024',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQHx5GZZD10Gfg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1720461899620?e=1744848000&v=beta&t=DwUi9a35-ekNAgbRiWa-m4B75CKVqk_nmDneWWgw44U',
    profile: profile,
    link: 'https://www.linkedin.com/pulse/psychology-behind-error-reporting-feedback-software-quality-usman-tsl3f/',
  },
  {
    id: 6,
    title: 'Shift-Right Testing: How Testing in Production Improves Software Reliability and User Experience',
    author: 'Muhammad Usman',
    date: 'October 23, 2024',
    image: blog6,
    profile: profile,
    link: 'https://www.linkedin.com/pulse/shift-right-testing-how-production-improves-software-muhammad-0v69f/',
  },
  {
    id: 7,
    title: 'How Machine Learning Algorithms Can Optimize Test Coverage',
    author: 'Muhammad Usman',
    date: 'October 21, 2024',
    image: blog7,
    profile: profile,
    link: 'https://www.linkedin.com/pulse/how-machine-learning-algorithms-can-optimize-test-usman-istqb-ctfl-3hvyf/',
  },
  {
    id: 8,
    title: 'Self-Healing Testing Tools: The Future of Stable and Reliable Testing',
    author: 'Muhammad Usman',
    date: 'February 11, 2025',
    image: blog8,
    profile: profile,
    link: 'https://www.linkedin.com/pulse/self-healing-testing-tools-future-stable-reliable-usman-istqb-ctfl-vegbf/',
  }
];

const Blogs = memo(() => {
  return (
    <div id="blog" className="w-full py-10 pb-30 relative overflow-hidden" style={{ backgroundImage: `url(${blogBack})`, backgroundSize: 'auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
      <div id="blog-container" className="w-full">
        <div id="blog-header" className="mx-auto max-w-2xl text-center">
          <h2 id="blog-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Blogs</h2>
          <p id="blog-description" className="mt-2 text-base sm:text-lg leading-8 text-white ">
            Dive into the latest in technology with my insightful blog posts.
          </p>
        </div>

        <div id="blog-content" className="mt-8">
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee flex whitespace-nowrap">
              {[...blogPosts, ...blogPosts].map((post, index) => (
                <article key={`${post.id}-${index}`} className="w-[300px] md:w-[400px] inline-block mx-4 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900  px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
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
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white break-words whitespace-normal">
                    <a href={post.link}><span className="absolute inset-0"></span>{post.title}</a>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
});

export default Blogs;