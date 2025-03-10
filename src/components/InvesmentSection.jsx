import { Link } from "react-router-dom";
import investment1 from "../assets/investment1.png";
import investment2 from "../assets/investment2.png";
import investment3 from "../assets/investment3.png";

const InvestmentSection = () => {
  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 md:px-16 lg:px-28 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
        {/* Left: Image Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={investment1}
                alt="Investment 1"
                className="w-full h-auto sm:h-[250px] md:h-[280px] object-cover rounded-xl shadow-md"
              />
              <img
                src={investment3}
                alt="Investment 3"
                className="w-full h-auto sm:h-[250px] md:h-[280px] object-cover rounded-xl shadow-md"
              />
            </div>
            <img
              src={investment2}
              alt="Investment 2"
              className="w-full h-auto sm:h-[520px] md:h-[580px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-5 sm:space-y-6">
          <p className="text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-wide">
            Do you want
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
            <span className="text-blue-600">Invest</span> in Kadagam Ventures<span className="text-gray-900">.</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
            <strong className="text-blue-700">Unlock the Future with Kadagam Ventures Private Limited.</strong>  
            <br /><br />
            At Kadagam Ventures Private Limited, we go beyond building businesses—we shape industries and create transformative opportunities.  
            With a strong foundation in technology, innovation, and customer-centric solutions, we invite visionary investors to be part of our high-growth ventures.
          </p>

          <div className="text-gray-700 space-y-3 text-sm sm:text-base text-justify">
            <p className="font-semibold text-gray-900">Why Invest with Us?</p>
            <ul className="list-disc list-inside">
              <li><strong>Scalable Business Models</strong> – High-growth potential across multiple industries.</li>
              <li><strong>Proven Market Demand</strong> – Addressing key industry needs with innovative solutions.</li>
              <li><strong>Visionary Leadership</strong> – A dedicated team driving sustainable and impactful innovations.</li>
              <li><strong>Profitable & Sustainable Growth</strong> – Long-term success with a focus on maximizing returns.</li>
            </ul>
          </div>

          <div className="text-gray-700 space-y-3 text-sm sm:text-base text-justify">
            <p className="font-semibold text-gray-900">Investment Opportunities</p>
            <ul className="list-disc list-inside">
              <li><strong>Equity Investment</strong> – Own a stake in our thriving ventures.</li>
              <li><strong>Venture Partnerships</strong> – Collaborate and scale together.</li>
              <li><strong>Angel & Seed Funding</strong> – Early-stage investments with high ROI potential.</li>
            </ul>
          </div>

          <p className="text-gray-900 font-semibold text-sm sm:text-base text-justify">
            Join us in shaping the future! <br />
            Partner with Kadagam Ventures Private Limited and be part of the next big success story.
          </p>

          {/* See More Button */}
          <div className="pt-6 text-center md:text-left">
            <Link 
              to="/investment-details" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-semibold text-sm sm:text-base"
            >
              See More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;