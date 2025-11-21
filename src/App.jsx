import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Bento Grid - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-auto">

          {/* 1. Create and Schedule - Left Column (1x2 on desktop) */}
          <div className="bg-orange-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-center lg:row-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Create and schedule content <span className="text-purple-600 font-bold text-2xl sm:text-3xl mb-4 sm:mb-6 italic">quicker</span>
            </h2>
            {/* <p className="text-purple-600 font-bold text-2xl sm:text-3xl mb-4 sm:mb-6 italic">quicker.</p> */}
            <img
              src="/public/images/illustration-create-post.webp"
              alt="Create Post Illustration"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 2. Main Hero - Center Top (2x1 on desktop, full on mobile) */}
          <div className="sm:col-span-1 lg:col-span-2 bg-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center flex items-center justify-center min-h-64 sm:min-h-auto">
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Social Media <span className="text-yellow-300">10x</span>
                <br />
                <span className="italic">Faster</span> with AI
              </h2>
              <div className="flex justify-center gap-1 my-3 sm:my-4">
                <img
                  src="/public/images/illustration-five-stars.webp"
                  alt="Five Stars"
                  className='w-24 sm:w-28 h-auto'
                />
              </div>
              <p className="text-sm sm:text-base">Over 4,000 5-star reviews</p>
            </div>
          </div>

          {/* 3. Schedule to Social - Right Column (1x2 on desktop) */}
          <div className="bg-purple-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-center lg:row-span-2">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Schedule to social media.</h3>
            <img
              src="/public/images/illustration-schedule-posts.webp"
              alt="Schedule Posts Illustration"
              className='w-full h-auto object-cover rounded-lg mb-3 sm:mb-4'
            />
            <p className="text-xs sm:text-sm text-gray-700">Optimize post timings to publish content at the perfect time for your audience.</p>
          </div>



          {/* 5. Manage Multiple Accounts */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-center">
            <img
              src="/public/images/illustration-multiple-platforms.webp"
              alt="Multiple Platforms Illustration"
              className='w-full h-auto object-cover rounded-lg mb-3 sm:mb-4'
            />
            <h3 className="text-lg sm:text-xl font-bold">Manage multiple accounts and platforms.</h3>
          </div>

          {/* 6. Maintain Posting Schedule */}
          <div className="bg-yellow-300 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Maintain a consistent posting schedule.</h3>
            <img
              src="/public/images/illustration-consistent-schedule.webp"
              alt="Consistent Schedule Illustration"
              className='w-full h-auto object-cover rounded-lg'
            />
          </div>

          {/* 4. Write Content with AI (full width on mobile, 1 col on desktop) */}
          <div className="bg-yellow-300 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Write your content using AI.</h3>
            <img
              src="/public/images/illustration-ai-content.webp"
              alt="AI Content Illustration"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* 7. Growth Stats */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-center">
            <p className="text-3xl sm:text-4xl font-bold mb-2">&gt;56%</p>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">faster audience growth</p>
            <img
              src="/public/images/illustration-audience-growth.webp"
              alt="Audience Growth Illustration"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* 8. Follower Growth Chart - Full Width (2x1 on desktop) */}
          <div className="sm:col-span-2 lg:col-span-2 bg-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white  flex items-center justify-end min-h-64 sm:min-h-auto">
            <div className="text-right w-full">

              <img
                src="/public/images/illustration-grow-followers.webp"
                alt="Grow Followers Illustration"
                className='w-full sm:w-1/2 ml-auto h-auto object-cover rounded-lg mb-3 sm:mb-4 mr-70'
              />
              <p className="text-xl md:text-4xl pr-15  sm:text-2xl font-bold leading-tight ">
                Grow followers<br />with non-stop<br /> <p className='mr-6'>content.</p>
              </p>


            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default App
