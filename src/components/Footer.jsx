import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  // Contact info updates based on selected entity
  const contactDetails = {
    "/NithyaEvent": {
      name: "Nithya Events",
      address: "No 34, 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru-560051",
      phone: "+91 99801 370001"
    },
    "/NithyaTickets": {
      name: "Nithya Tickets",
      address: "No 34, 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru-560051",
      phone: "+91 99801 890002"
    },
    "/KadagamFoundation": {
      name: "Kadagam Foundation",
      address: "No 34, 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru-560051",
      phone: "+91 88679 99997"
    }
  };

  return (
    <footer className="bg-gray-100 py-10 border-t">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">Quick Links</h3>
          <ul className="text-gray-600 text-sm space-y-2 mt-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="hover:text-indigo-500 transition duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">Contact Us</h3>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            {contactDetails[currentPath]?.name || "Kadagam Ventures Private Limited"},<br />
            {contactDetails[currentPath]?.address || "NO.34, 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru - 560051"}
          </p>
          <p className="mt-3 text-indigo-700 font-medium hover:text-indigo-900 transition duration-300 cursor-pointer">
            {contactDetails[currentPath]?.phone || "+91 88679 99997"}
          </p>
        </div>

        {/* Logo and Social Media */}
        <div className="flex flex-col items-center sm:items-end">
          <img src={kadagamLogo} alt="Kadagam Ventures Logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t pt-6 text-center">
        <p className="text-gray-600 text-sm">
          Copyright © 2025 KADAGAM Ventures Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
