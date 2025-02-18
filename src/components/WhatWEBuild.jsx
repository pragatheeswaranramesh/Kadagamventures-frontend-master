import mobile from "../assets/mobile.png";
import tab from "../assets/nithyaeventWhat.png";
import kadagam from "../assets/kadagam.png";
import eventIcon from "../assets/Frame31.png";
import ticketsIcon from "../assets/Frame 30.png";
import kadagamIcon from "../assets/Frame 29.png";

import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, subtitle, description, highlight, imgSrc, reverse = false, imgSize = "w-full max-w-xs sm:max-w-md" }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-6 sm:gap-8`}>
      {/* Text Content */}
      <div className="md:w-1/2 space-y-4 px-4 sm:px-6">
        <p className="text-blue-500 font-semibold text-base sm:text-lg">{highlight}</p>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
            {icon}
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-lg sm:text-xl">{title}</p>
            <p className="text-gray-500 text-sm sm:text-md">{subtitle}</p>
          </div>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{description.title}</h3>
        <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">{description.text}</p>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 flex justify-center px-4 sm:px-6">
        <img src={imgSrc} alt={title} className={`${imgSize}`} />
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  highlight: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  imgSize: PropTypes.string,
};

const WhatWeBuild = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32 text-left mt-12">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">What We Build</h2>
      </div>

      {/* Event Section */}
      <section className="py-10 sm:py-16 text-justify">
        <FeatureCard
          icon={<img src={eventIcon} alt="Event Icon" className="w-12 sm:w-14" />}
          title="Event Made Simple Now"
          subtitle="Stop thinking, let's connect"
          highlight="Nithya Event"
          description={{
            title: "Make your Event Easy & Affordable.",
            text: "Excellence in event management, delivering meticulously planned and flawlessly executed events. From corporate conferences to large-scale entertainment productions, Nithya Events specializes in creating experiences that leave a lasting impact.",
          }}
          imgSrc={mobile}
        />
      </section>

      {/* Ticketing Section */}
      <section className="py-10 sm:py-16 text-justify">
        <FeatureCard
          icon={<img src={ticketsIcon} alt="Tickets Icon" className="w-12 sm:w-14" />}
          title="Handle Ticketing Easily"
          subtitle="Nithya Ticket makes booking simple"
          highlight="Nithya Tickets"
          description={{
            title: "Seamless and intuitive Ticketing Experience.",
            text: "A seamless and intuitive ticketing platform designed for efficiency, reliability, and convenience. Whether for entertainment, corporate events, or large-scale gatherings, Nithya Tickets ensures a hassle-free booking experience with secure transactions and unparalleled customer support.",
          }}
          imgSrc={tab}
          reverse
        />
      </section>

      {/* Kadagam Foundation Section */}
      <section className="py-10 sm:py-16 text-justify">
        <FeatureCard
          icon={<img src={kadagamIcon} alt="Kadagam Icon" className="w-12 sm:w-14" />}
          title="We’re a Non-Profit & Charity Organization"
          subtitle="Kadagam Foundation supports communities"
          highlight="Kadagam Foundation"
          description={{
            title: "Bringing Hope And Positivity.",
            text: "The social responsibility arm of Kadagam Ventures, committed to education, community welfare, and sustainable development. Through strategic initiatives and philanthropic efforts, Kadagam Foundation drives meaningful change, empowering communities and fostering a better future.",
          }}
          imgSrc={kadagam}
        />
      </section>
    </div>
  );
};

export default WhatWeBuild;
