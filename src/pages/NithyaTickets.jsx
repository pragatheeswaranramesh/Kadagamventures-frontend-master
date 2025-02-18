import ProductTickets from "../assets/ProductTickets.png";
import NithyaTickets from "../assets/NithyaTickets.png";

// Features Section Component
const FeaturesSection = () => {
  return (
    <div className="w-full bg-blue-50 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-sm mx-auto md:mx-0 text-center md:text-left">
          <h4 className="text-blue-600 font-semibold">Feature</h4>
          <h2 className="text-3xl font-bold mt-4">
            Nithya Events Made <br className="hidden md:block" /> Simplify the Process<span className="text-gray-800">.</span>
          </h2>
          <p className="text-gray-600 mt-4 text-justify">
            Nithya Events is dedicated to making event planning effortless and stress-free. From the initial concept to the final execution, we handle every detail with precision, ensuring a smooth and seamless process.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-justify">
          {[{ icon: "📩", title: "Customize Tickets", description: "Easily customize your tickets to match your brand." },
            { icon: "📊", title: "Manage Tickets", description: "Track and manage ticket sales with ease." },
            { icon: "⚡", title: "Deliver Instant Tickets", description: "Instant ticket delivery with secure transactions." },
            { icon: "💬", title: "Grow your Business", description: "Engage customers with real-time support." }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-500 w-10 h-10 flex items-center justify-center text-white rounded-md mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
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
    <div className="w-full flex items-center justify-center py-16 px-4 bg-blue-500">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          Manage your Tickets Is Easy Now
        </h1>
        <p className="mt-4 text-base text-gray-700">
          Offering free education to those in need, and protecting the sacred cow, we can contribute to a more harmonious world.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

// Main Page Component
const NithyaTicketsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 text-center">
        <img src={ProductTickets} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Nithya Tickets</h1>
          <p className="mt-4 max-w-md text-justify">
            A next-generation ticketing platform designed for convenience and efficiency. Whether for movies, concerts, or events, we simplify bookings with a seamless user experience and secure transactions.
          </p>
        </div>
      </div>
      {/* About Nithya Tickets Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">About Nithya Tickets</h2>
          <p className="text-gray-600 mb-4 text-justify">
            A seamless and intuitive ticketing platform designed for efficiency, reliability, and convenience. Whether for entertainment, corporate events, or large-scale gatherings, Nithya Tickets ensures a hassle-free booking experience with secure transactions.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Explore Nithya Tickets
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src={NithyaTickets} alt="NithyaTickets" className="max-w-full h-auto rounded-lg" />
        </div>
      </div>
      {/* Features Section */}
      <FeaturesSection />
      {/* Management Section (Moved Below Features) */}
      <ManagementSection />
    </div>
  );
};

export default NithyaTicketsPage;
