import Event from "../assets/Event.png";
import NithyaEvents from "../assets/NithyaEvents.png";

// Features Section Component
const FeaturesSection = () => {
  return (
    <div className="w-full bg-blue-50 py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-sm mx-auto md:mx-0 text-center md:text-left">
          <h4 className="text-blue-600 font-semibold">Feature</h4>
          <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-justify">
            Complete Event Solutions <br className="hidden md:block" /> by Nithya Events<span className="text-gray-800">.</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base text-justify">
            Planning an event can be overwhelming, but with Nithya Events, you can leave the stress behind. We offer a comprehensive range of event services designed to make your occasion truly special.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-justify">
          {[
            { icon: "📩", title: "Customize Events", description: "Tailored solutions for weddings, corporate gatherings, and private celebrations." },
            { icon: "📊", title: "Manage Events", description: "Nithya Events customizes every detail to match your vision." },
            { icon: "⚡", title: "Instant Events", description: "Quick and seamless event planning for last-minute events!" },
            { icon: "💬", title: "Grow your Business", description: "We specialize in rapid event execution, ensuring a flawless event." }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
              <div className="bg-blue-500 w-10 h-10 flex items-center justify-center text-white rounded-md mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Management Section Component
const ManagementSection = () => {
  return (
    <div className="w-full flex items-center justify-center py-12 px-4 sm:px-6 bg-blue-500">
      <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg w-full max-w-4xl text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
          Manage your Event Easily
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-700 text-justify">
          Excellence in event management, delivering meticulously planned and flawlessly executed events.
        </p>
        <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          <a href="https://nithyatickets.com/#contact" target="_blank" rel="noopener noreferrer">Learn More</a>
        </button>
      </div>
    </div>
  );
};

// Main Page Component
const NithyaEventPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-[70vh] sm:min-h-screen flex items-center justify-center">
        <img
          src={Event}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Nithya Events</h1>
          <p className="mt-4 max-w-lg text-sm sm:text-base text-justify">
            Bringing events to life with unmatched precision and creativity.
          </p>
        </div>
      </div>

      {/* About Nithya Tickets Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">About Nithya Tickets</h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base text-justify">
            Excellence in event management, delivering meticulously planned and flawlessly executed events.
          </p>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            <a href="https://nithyatickets.com/" target="_blank" rel="noopener noreferrer">Explore Nithya Tickets</a>
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src={NithyaEvents} alt="Nithya Events" className="max-w-full sm:max-w-md md:max-w-lg h-auto rounded-lg" />
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Management Section */}
      <ManagementSection />
    </div>
  );
};

export default NithyaEventPage;