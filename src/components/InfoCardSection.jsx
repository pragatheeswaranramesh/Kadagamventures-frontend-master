import PropTypes from "prop-types";

const Card = ({ title, description, bgColor, textColor, isHighlighted }) => {
  return (
    <div className={`p-6 sm:p-8 rounded-2xl shadow-lg relative ${bgColor} min-h-[400px] sm:min-h-[450px] flex flex-col justify-between`}>
      {/* Title */}
      <div className="text-center">
        <h2 className={`text-xl sm:text-2xl font-bold ${textColor} leading-snug`}>{title}</h2>
        <p className={`mt-4 text-sm sm:text-base ${textColor} leading-loose text-justify`}>
          {description}
        </p>
      </div>

      {/* Bell Icon */}
      {isHighlighted && (
        <span className="absolute -top-4 -right-4 text-red-500 text-4xl sm:text-5xl">🔔</span>
      )}
    </div>
  );
};

// ✅ Prop Types
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool,
};

// ✅ Default Props
Card.defaultProps = {
  isHighlighted: false,
};

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-12 bg-gray-50">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Section 1 */}
        <section className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <Card 
              title="Our Vision"
              description="We aim to be a global leader in technological innovation, driving sustainable economic and social growth. Our expertise lies in empowering businesses with cutting-edge digital solutions that enhance efficiency and scalability. We envision a future where communities thrive through digital excellence and smart solutions. Beyond business, we are committed to social impact by supporting education, agriculture, and welfare initiatives that uplift lives. Our mission is to create opportunities that foster sustainable development."
              bgColor="bg-gray-100"
              textColor="text-black"
            />
            <Card
              title="Our Mission"
              description="We revolutionize IT solutions with state-of-the-art web, mobile, and enterprise applications. Our expertise includes building robust websites, web apps, and e-commerce platforms. We help businesses expand their digital presence and optimize online transactions. Beyond technology, we empower communities through education and charity. We support sustainable agriculture to enhance productivity and food security. Our initiatives drive social impact, uplifting communities and fostering long-term growth."
              bgColor="bg-blue-600"
              textColor="text-white"
              isHighlighted
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
