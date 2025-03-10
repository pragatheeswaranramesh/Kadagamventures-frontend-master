import { Link } from "react-router-dom";

const InvestmentDetailsPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto text-justify">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <Link to="/" className="text-white font-bold text-xl">
            Kadagam Ventures
          </Link>
          <div className="flex space-x-4 sm:space-x-6">
            <Link
              to="/"
              className="text-white hover:text-blue-200 text-sm sm:text-base"
            >
              Home
            </Link>
            <a
              href="#contact"
              className="text-white hover:text-blue-200 text-sm sm:text-base"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="bg-blue-50 py-12 px-4 sm:px-6 md:px-16 lg:px-28 pt-18">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            <span className="">Invest</span> in{" "}
            <span className="text-red-500">KADAGAM</span>{" "}
            <span className="text-blue-500">VENTURES</span>
          </h1>

          {/* Introduction Section */}
          <section className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-justify">
              Unlock the Future with Kadagam Ventures Private Limited
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              Invest in Innovation. Grow with Us.
              <br />
              <br />
              Kadagam Ventures Private Limited is revolutionizing the event
              rental and ticketing industry with cutting-edge solutions that
              simplify event management. With our robust platforms—NithyaEvent
              (rental services) and Bookevnt (ticket booking)—we are shaping the
              future of seamless event experiences.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold mb-2 text-justify">
                Why Invest in Kadagam Ventures?
              </p>
              <ul className="list-disc list-inside space-y-2 text-justify">
                <li>
                  High-Growth Market – The event industry is booming, with
                  increasing demand for hassle-free rentals and ticketing
                  solutions
                </li>
                <li>
                  Scalable Business Model – Our platforms cater to a wide range
                  of events, from concerts to corporate gatherings.
                </li>
                <li>
                  Tech-Driven Innovation – We leverage advanced technology to
                  streamline event management, ensuring efficiency and
                  profitability.
                </li>
                <li>
                  Strong Revenue Potential – With multiple revenue streams,
                  including rentals, ticket sales, and service fees, Kadagam
                  Ventures is set for exponential growth
                </li>
                <li>
                  Experienced Leadership – Led by industry experts with a clear
                  vision for success.
                </li>
              </ul>
            </div>
            <h3 className="mt-4 font-semibold text-justify">
              Join Us on This Exciting Journey
            </h3>
            <p className="text-justify">
              We invite visionary investors to be a part of this game-changing
              opportunity. Whether you're an individual investor or a venture
              capitalist, your investment in Kadagam Ventures will drive the
              future of event experiences. Be a Part of the Future. Invest in
              Kadagam Ventures Pvt Ltd.
            </p>
          </section>

          {/* Visionary Investment Appeal */}
          <section className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-justify">
              1. Visionary Investment Appeal
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              'Invest in Kadagam Ventures – Shaping the Future of Events'
              <br />
              <br />
              Kadagam Ventures is at the forefront of transforming the event
              industry through smart rental solutions and seamless ticket
              booking. Our platforms, NithyaEvent and Nithyatickets, are
              designed to simplify event hosting while unlocking new revenue
              opportunities.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold mb-2 text-justify"> Why Invest?</p>
              <ul className="list-disc list-inside space-y-2 text-justify">
                <li>Booming Event Industry </li>
                <li>Scalable & Tech-Driven Business Model </li>
                <li>Multiple Revenue Streams </li>
                <li>High Growth Potential </li>
              </ul>
            </div>
            <h3 className="mt-4 font-semibold text-justify">Join Us!</h3>
            <p className="text-justify">
              Invest today and be part of a revolution in event management.
              Let’s grow together!
            </p>
          </section>

          {/* Equity Crowdfunding Pitch */}
          <section className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-justify">
              2. Equity Crowdfunding Pitch
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              'Be a Shareholder in Kadagam Ventures – Your Gateway to High
              Returns!'
            </p>
            <p className="mb-4 text-justify">
              Kadagam Ventures is now offering a limited opportunity for public
              investors to become stakeholders in our fast-growing business.
              With the rising demand for event rentals and digital ticketing,
              our platforms are set to scale exponentially.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold mb-2 text-justify">
                Investment Highlights
              </p>
              <ul className="list-disc list-inside space-y-2 text-justify">
                <li>Minimum Investment:</li>
                <li>Expected Returns:</li>
                <li>
                  Investor Perks: Exclusive access to pre-IPO benefits & revenue
                  share
                </li>
              </ul>
            </div>
            <p className="mt-4 font-semibold text-justify">
              Your Money. Your Growth. Your Future.
            </p>
            <p className="text-justify">
              Secure your spot as an investor today!
            </p>
          </section>

          {/* Impact-Driven Investment Call */}
          <section className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-justify">
              3. Impact-Driven Investment Call
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              "Empowering Events, Empowering Investors – Join Kadagam Ventures"
            </p>
            <p className="mb-4 text-justify">
              Kadagam Ventures isn’t just a business; it’s a movement to
              revolutionize event accessibility through affordable rentals and
              effortless ticketing. Your investment will help us expand,
              innovate, and create jobs while boosting the event economy.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold mb-2 text-justify">
                Why Invest with Us?
              </p>
              <ul className="list-disc list-inside space-y-2 text-justify">
                <li>
                  Social Impact – Enabling small businesses & event organizers
                </li>
                <li>Tech-Powered Growth – AI-driven event solutions</li>
                <li>Profitability with Purpose – Strong revenue model</li>
              </ul>
            </div>
            <p className="mt-4 font-semibold text-justify">
              Make an Impact. Make a Profit.
            </p>
            <p className="text-justify">
              Be a part of our growth journey – Invest in Kadagam Ventures today!
            </p>
          </section>

          {/* Exclusive Angel Investor Invitation */}
          <section className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-justify">
              4. Exclusive Angel Investor Invitation
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              Special Investment Opportunity – Back the Next Big Name in Events!
            </p>
            <p className="mb-4 text-justify">
              We are offering early-stage investment opportunities for angel
              investors who believe in technology-driven businesses. Kadagam
              Ventures is on track to dominate the event rental and ticketing
              market.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold mb-2 text-justify">
                Investor Benefits
              </p>
              <ul className="list-disc list-inside space-y-2 text-justify">
                <li>Equity Share - in fast-growing company</li>
                <li>Early-Bird Entry - before mass funding rounds</li>
                <li>High ROI Potential - in an untapped market</li>
              </ul>
            </div>
            <p className="mt-4 font-bold text-red-600 text-justify">
              Limited Slots Available!
            </p>
            <p className="text-justify">
              Secure your early-stage investment today before we open funding to
              a wider audience.
            </p>
          </section>

          {/* Community-Driven Investment Approach */}
          <section className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-justify">
              5. Community-Driven Investment Approach
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              'Invest Small, Grow Big – Kadagam Ventures Crowdfund'
            </p>
            <p className="mb-4 text-justify">
              We believe in community-driven business. That’s why we’re offering
              you the chance to own a piece of Kadagam Ventures through our
              exclusive investment rounds.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold mb-2 text-justify">
                What's in It for You?
              </p>
              <ul className="list-disc list-inside space-y-2 text-justify">
                <li>Invest as low as ₹</li>
                <li>Get monthly revenue share from bookings</li>
                <li>Exclusive investor perks & dividends</li>
              </ul>
            </div>
            <p className="mt-4 font-semibold text-justify">
              Your Investment, Your Future!
            </p>
            <p className="text-justify">
              Don’t miss out on this first-of-its-kind event industry investment
              opportunity.
            </p>
          </section>

          {/* Final CTA */}
          <section className="bg-blue-600 text-white p-6 rounded-xl shadow-sm text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Join the Revolution?
            </h2>
            <p className="text-lg mb-4">
              Don't miss out on this first-of-its-kind event industry investment opportunity!
            </p>
            <div className="space-y-4">
              <a
                href="https://wa.me/918867999997"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="bg-white p-4 sm:p-6 rounded-xl shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
              📩 Connect with Us Today!
            </h2>
            <div className="space-y-2 text-center">
              <p className="text-gray-700 text-justify">
                For investment inquiries and partnership opportunities:
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
                <a
                  href="tel:+918867999997"
                  className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  📞 +91 8867999997
                </a>
                <a
                  href="https://kadagamventures.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  🌍 Visit Website
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetailsPage;
