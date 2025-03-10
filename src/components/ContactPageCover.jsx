export default function ContactSection() {
  return (
    <div className="relative container mx-auto px-4 sm:px-6 py-16 mt-20 bg-white">
      {/* Left Side - Text and Socials */}
      <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Lets Collaborate
          </h2>
          <h2 className="text-lg text-gray-900 px-1.5">
            Create something impactful together! Reach out to Kadagam Ventures today.
          </h2>
        </div>

        {/* Right Side - Google Map and Contact */}
        <div className="md:w-1/2 flex flex-col items-center mt-6 md:mt-0 w-full">
          {/* Google Map Iframe */}
          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7656426499357!2d77.5990168!3d12.986835899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17005b0a5e31%3A0xb6796593445e2823!2sKadagam%20Ventures!5e0!3m2!1sen!2sin!4v1739970581099!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="mt-6 flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8 w-full justify-center">
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-lg">
                📞
              </div>
              <p className="text-gray-700 text-base sm:text-lg whitespace-nowrap">
                +91 88679 99997
              </p>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-lg">
                📍
              </div>
              <p className="text-gray-700 text-base sm:text-lg text-center md:text-left max-w-xs sm:max-w-sm md:max-w-md">
                Kadagam Ventures Private Limited, NO.34, 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru - 560051
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
