import { useState } from "react";

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      await fetch("https://kadagamventures.com/api/subscribe.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
      setIsSubscribed(true);
    }

    setLoading(false);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#EAF4FC] w-full px-4">
      <div className="relative bg-white w-full max-w-[900px] rounded-lg shadow-lg p-6 sm:p-12 text-center">
        {/* ⭐ Star Icon (Now Responsive) */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-yellow-400 text-lg sm:text-2xl md:text-3xl">
          ⭐
        </div>

        {/* 🔔 Bell Icon (Now Responsive) */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-purple-500 text-lg sm:text-2xl md:text-3xl">
          🔔
        </div>

        {isSubscribed ? (
          <div className="text-center">
            <div className="flex justify-center">
              <div className="bg-green-500 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full text-white text-2xl sm:text-3xl">
                ✅
              </div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4">
              Thanks for Subscribing!
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              You will get updates from Kadagam Ventures in your inbox.
            </p>
            <button
              className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base"
              onClick={() => setIsSubscribed(false)}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              Subscribe to Our Newsletter
              <br className="hidden md:block" /> Stay Updated with Our Latest News
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg mt-4 max-w-[90%] sm:max-w-[80%] mx-auto">
              Get exclusive updates, special offers, and valuable insights directly in your inbox.
              Subscribe now and never miss out!
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[90%] sm:max-w-[80%] mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 sm:p-4 border border-gray-300 rounded-lg sm:rounded-l-lg w-full focus:outline-none text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-r-lg font-medium w-full sm:w-auto text-sm sm:text-base"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "SUBSCRIBE"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
