import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import kadagamLogo from "../assets/kadagamLogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/aboutus" },
  { name: "Contact Us", path: "/contactus" }
];

export default function Footer() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const contactDetails = {
    "/NithyaEvent": {
      name: "Nithya Events",
      address:
        "No 34, 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru-560051",
      phone: "+91 99801 370001",
      // Email address is stored but not displayed in the Contact Info section
      email: "info@nithyaevents.com",
      whatsapp: "https://wa.me/919980137001",
    },
    "/NithyaTickets": {
      name: "Nithya Tickets",
      address:
        "No 34, 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru-560051",
      phone: "+91 99801 890002",
      email: "info@nithyatickets.com",
      whatsapp: "https://wa.me/9199801890002",
    },
    "/KadagamFoundation": {
      name: "Kadagam Foundation",
      address:
        "No 34, 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru-560051",
      phone: "+91 88679 99997",
      email: "support@Kadagamfoundation.org",
      whatsapp: "https://wa.me/918867999997",
    },
  };

  // Default values if no matching details are found
  const defaultPhone = "+918867999997";
  const defaultEmail = "info@kadagamventures.com";
  const defaultWhatsapp = "https://wa.me/918867999997";

  // Determine company name dynamically based on current path
  const companyName =
    contactDetails[currentPath]?.name || "Kadagam Ventures Private Limited";

  return (
    <footer className="py-10 border-t border-gray-300 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-[#0f1e40] text-lg mb-3">Quick Links</h2>
          <ul className="text-[#0f1e40] text-base font-medium space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-red-500 transition duration-300 block py-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-[#0f1e40] text-lg mb-3">Contact Us</h3>
          <p className="font-medium leading-relaxed">
            {companyName === "Kadagam Ventures Private Limited" ? (
              <span className="text-2xl font-bold">
                <span className="text-blue-500">Kadagam Ventures</span>{" "}
                <span className="text-red-500">Private Limited</span>
              </span>
            ) : (
              <span className="text-2xl font-bold">{companyName}</span>
            )}
            <br />
            {contactDetails[currentPath]?.address ||
              "NO.34, 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru - 560051"}
          </p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <FaPhoneAlt className="text-red-500 text-sm" />
              <a
                href={`tel:${contactDetails[currentPath]?.phone || defaultPhone}`}
                className="text-[#0f1e40] font-semibold hover:text-red-500 transition duration-300"
              >
                {contactDetails[currentPath]?.phone || defaultPhone}
              </a>
            </div>
            {/* Email info is intentionally not displayed */}
          </div>
          <p className="text-[#0f1e40] font-medium text-xs sm:text-sm mt-3 break-words">
            Corporate Identification Number (CIN): U62013KA2022PTC161172
          </p>
        </div>

        {/* Logo (Centered) */}
        <div className="flex flex-col items-center justify-center pt-15">
          <img
            src={kadagamLogo}
            alt="Kadagam Ventures Logo"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
          />
        </div>
      </div>

      {/* Contact Buttons for All Viewports */}
      <div className="mt-6 flex justify-center space-x-4">
        <a
          href={`tel:${contactDetails[currentPath]?.phone || defaultPhone}`}
          className="bg-red-500 p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
        >
          <FaPhoneAlt className="text-white text-xl" />
        </a>
        <a
          href={`mailto:${contactDetails[currentPath]?.email || defaultEmail}`}
          className="bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <MdEmail className="text-white text-xl" />
        </a>
        <a
          href={contactDetails[currentPath]?.whatsapp || defaultWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp className="text-white text-xl" />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-300 pt-6 text-center">
        <p className="text-[#0f1e40] text-sm font-bold">
          Copyright © 2025 KADAGAM Ventures Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
