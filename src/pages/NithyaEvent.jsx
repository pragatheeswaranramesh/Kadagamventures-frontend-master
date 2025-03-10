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
            Complete Event Solutions <br className="hidden md:block" /> by
            Nithya Events<span className="text-gray-800">.</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base text-justify">
          At Nithya event, you’re at the heart of everything we do. Our mission is to simplify event planning and transform your dreams into reality. Whether it’s a corporate seminar, a dream wedding, or a community celebration, we promise a hassle-free journey from start to finish. Trust us to take care of the details while you enjoy the moment. Your vision. Our expertise. Together, we create magic. At Nithya event, we specialize in turning your dreams into extraordinary moments that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-justify">
          {[
            {
              icon: "📩",
              title: "Customize Events",
              description:
                "Tailored solutions for weddings, corporate gatherings, and private celebrations.",
            },
            {
              icon: "📊",
              title: "Manage Events",
              description:
                "Nithya Events customizes every detail to match your vision.",
            },
            {
              icon: "⚡",
              title: "Instant Events",
              description:
                "Quick and seamless event planning for last-minute events!",
            },
            {
              icon: "💬",
              title: "Grow your Business",
              description:
                "We specialize in rapid event execution, ensuring a flawless event.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md"
            >
              <div className="bg-blue-500 w-10 h-10 flex items-center justify-center text-white rounded-md mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {feature.description}
              </p>
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
        <p className="mt-4 text-sm sm:text-base text-gray-700 ">
        Nithya event isn’t just an event management company—it’s a revolution in event planning. Our vision is simple yet powerful: to eliminate the stress of planning and bring joy to celebrations. By combining cutting-edge technology, meticulous organization, and a customer-first approach, we redefine what it means to create a memorable event.
        </p>
        <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          <a
            href="https://nithyaevents.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Nithya Events
          </h1>
          <p className="mt-4 max-w-lg text-sm sm:text-base text-justify">
          At Nithya event, every event begins with a story—yours. We believe every celebration, whether big or small, has a unique tale to tell. From intimate gatherings to grand extravaganzas, we pride ourselves on turning your ideas into unforgettable experiences. With a seamless blend of creativity, precision, and innovation, we ensure your event is as special as the memories you’ll create.
          </p>
        </div>
      </div>

      {/* About Nithya Tickets Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            About Nithya Events
          </h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base text-justify">
            Excellence in event management, delivering meticulously planned and
            flawlessly executed events.A dedicated platform for event equipment
            rentals, Mantine NithyaEvent provides a seamless solution for
            renting sound systems, lighting, cameras, LED walls, projectors, and
            more. It simplifies event planning by offering high-quality
            equipment and professional services.
          </p>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            <a
              href="https://nithyaevents.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Nithya Events
            </a>
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={NithyaEvents}
            alt="Nithya Events"
            className="max-w-full sm:max-w-md md:max-w-lg h-auto rounded-lg"
          />
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
