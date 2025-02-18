import FounderImage from "../assets/founderkadagam.jpeg";

export default function FounderSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 min-h-screen">
      
      {/* Left Side - Text Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          <span className="text-blue-600">Naveen Kumar</span>, the Founder of Kadagam Ventures.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg text-justify leading-relaxed">
          Beyond business, Mr. Naveen Kumar is the founder of Kadagam Ventures, a non-profit organization committed to community welfare and sustainable development. His dedication to education, social empowerment, and cultural preservation reflects his deep-rooted vision for a better society. <br /> <br />

          The Kadagam Foundation provides free education for orphaned children and is also building a temple. Through the foundation, they donate food to families struggling with poverty and contribute to many noble causes. <br /> <br />

          His latest venture, NithyaEvent, is a cutting-edge all-in-one event rental platform, making it effortless for organizers to book essentials like sound systems, lighting, video production, photography, and mood boards. By combining technology with convenience, he continues to redefine how events are planned and executed. <br /> <br />

          A next-generation ticketing platform designed for convenience and efficiency. Whether for movies, concerts, or events, we simplify bookings with a seamless user experience and secure transactions. <br /> <br />

          With a relentless drive for innovation and impact, Mr. Naveen Kumar is not just leading a company—he is shaping the future of event management and community service.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={FounderImage}
          alt="Founder"
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      
    </div>
  );
}
