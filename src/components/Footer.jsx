import { useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdGroups } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Visual Divider - hidden on home page */}
      {!isHomePage && (
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-20"></div>
      )}
      
      <footer className={`bg-slate-800 text-white ${isHomePage ? "mt-20" : ""}`}>
        <div className="container mx-auto px-6 py-8 md:py-10">
          {!isHomePage && (
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
              {/* Location */}
              <div className="flex items-center text-gray-300 text-sm md:text-base">
                <FiMapPin className="text-amber-500 mr-2 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/dir//36J7%2B453+Aniyal+East+Road,+East+road,+Edavanakkad,+Kochi,+Kerala+682502/@10.0803023,76.1305356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b081112a6042e7f:0xa152d0bcf7085ae5!2m2!1d76.2129375!2d10.0803125?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Edavannakad, Kochi, Kerala
                </a>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61558311322107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 hover:bg-amber-500/10 rounded-full p-2 transition-all duration-200"
                  aria-label="Facebook Page"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/groups/446332617847433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 hover:bg-amber-500/10 rounded-full p-2 transition-all duration-200"
                  aria-label="Facebook Group"
                >
                  <MdGroups className="text-xl" />
                </a>
              </div>
            </div>
          )}

          {/* Bottom Bar */}
          <div className={`border-t border-gray-700 ${!isHomePage ? "mt-6" : "mt-0"} pt-6`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
              <p className="text-center md:text-left">
                © {currentYear} Aniyil Sreekrishna Swami Temple. All rights
                reserved.
              </p>
              <p className="text-center md:text-right">
                Managed by{" "}
                <a
                  href="https://abhishekhari.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  Abhishek Hari
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
