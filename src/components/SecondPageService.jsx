import CoverServicePage from "../assets/pc1.jpg";

export default function ServiceHeroSection() {
  return (
    <div
      className="relative w-full h-[80vh] md:h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${CoverServicePage})` }}
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Kadagam Ventures: More Than Just a Name
        </h1>
        <p className="mt-4 text-sm sm:text-lg md:text-xl max-w-[90%] sm:max-w-2xl mx-auto">
        it’s a commitment to innovation, excellence, and transformative solutions that drive success across industries.
        </p>
      </div>
    </div>
  );
}
