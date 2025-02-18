import aboutHand from "../assets/abouthand.png";

const AboutSection = () => {
  return (
    <div className="relative z-10 px-6 py-12 md:px-20 lg:px-32 flex flex-col md:flex-row items-center bg-white mt-12">
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <p className="text-blue-600 font-semibold">About</p>
        <h2 className="text-2xl font-bold text-gray-900">Kadagam Ventures</h2>
        <p className="text-gray-600 text-justify">
          Established in 2022, Kadagam Ventures is a corporate entity dedicated
          to excellence in events, ticketing, and social impact. Our key
          ventures include Nithya Events, creating unforgettable experiences,
          Nithya Tickets, offering seamless ticketing solutions, and Kadagam
          Foundation, driving meaningful community initiatives.
          <br />
          <br />
          With a vision for growth and innovation, we strive to set new industry
          standards while making a positive impact. The unwavering support of
          our donors and stakeholders empowers us to expand, evolve, and create
          lasting change.
        </p>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={aboutHand}
          alt="Helping hands illustration representing support and generosity"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4">
      <AboutSection />
    </div>
  );
};

export default AboutPage;
