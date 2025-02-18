import { useState } from "react";

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#EAF4FC] w-full px-4">
      <div className="relative bg-white w-full max-w-[900px] rounded-lg shadow-lg p-6 sm:p-12 text-center">
        {/* Decorative Elements */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-yellow-400 text-3xl sm:text-4xl">⭐</div>
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-purple-500 text-3xl sm:text-4xl">🔔</div>

        {/* If Subscribed, Show Success Message */}
        {isSubscribed ? (
          <div className="text-center">
            <div className="flex justify-center">
              <div className="bg-green-500 w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full text-white text-3xl sm:text-4xl">
                ✅
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-4">
              Successfully Subscribed to Kadagam Ventures
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              You will get update notifications from Kadagam Ventures via email. 
              Thanks for joining our growing community!
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base"
              onClick={() => setIsSubscribed(false)}
            >
              Close
            </button>
          </div>
        ) : (
          // Show Subscription Form
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
              Subscribe to Our Newsletter
              <br className="hidden md:block" /> Stay Updated with Our Latest News
            </h2>

            <p className="text-gray-600 text-sm sm:text-lg mt-4 max-w-[90%] sm:max-w-[80%] mx-auto">
              Get exclusive updates, special offers, and valuable insights directly in your inbox.
              Subscribe now and never miss out!
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[90%] sm:max-w-[80%] mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 sm:p-4 border border-gray-300 rounded-lg sm:rounded-l-lg w-full focus:outline-none text-sm sm:text-base"
              />
              <button
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-r-lg font-medium w-full sm:w-auto text-sm sm:text-base"
                onClick={() => setIsSubscribed(true)}
              >
                SUBSCRIBE
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
