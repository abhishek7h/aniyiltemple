import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { MdAccountBalance } from "react-icons/md";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-amber-500 text-center mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Address Section */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 lg:p-8 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/20 p-3 rounded-full flex-shrink-0">
                <FiMapPin className="text-amber-400 text-2xl" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-4">
                  Address
                </h2>
                <div className="text-white text-lg lg:text-xl leading-relaxed">
                  <p className="font-semibold mb-2">Aniyil Sreekrishna Swami Temple</p>
                  <p>Edavanakkad, Vypin</p>
                  <p>Ernakulam, Kerala</p>
                  <p className="text-amber-400 font-medium">682502</p>
                </div>
                <a
                  href="https://www.google.com/maps/dir//36J7%2B453+Aniyal+East+Road,+East+road,+Edavanakkad,+Kochi,+Kerala+682502/@10.0803023,76.1305356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b081112a6042e7f:0xa152d0bcf7085ae5!2m2!1d76.2129375!2d10.0803125?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-amber-400 hover:text-amber-300 transition-colors duration-200 underline underline-offset-2"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Management Section */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 lg:p-8 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-6">
              Management
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500/50 pl-4">
                <p className="text-white/90 text-sm uppercase tracking-wide mb-1">
                  Cochin Devaswom Board Officer
                </p>
                <p className="text-white text-lg font-medium">A.R. Rajeev</p>
              </div>
              <div className="border-l-4 border-amber-500/50 pl-4 mt-6">
                <p className="text-white/90 text-sm uppercase tracking-wide mb-1">
                  Advisory Committee
                </p>
                <p className="text-white text-base mb-2">
                  Aniyil Srikrishna Swami Temple Advisory Committee
                </p>
                <p className="text-gray-400 text-sm">REG NO: KUS723/2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Committee Members */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 lg:p-8 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-6">
              Committee Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-4 border border-amber-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <FiPhone className="text-amber-400 text-lg" />
                  <p className="text-white/90 text-sm uppercase tracking-wide">
                    President
                  </p>
                </div>
                <p className="text-white text-lg font-medium mb-1">
                  Mr. Sathyan Manapilli
                </p>
                <a
                  href="tel:9745985838"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  +91 97459 85838
                </a>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-amber-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <FiPhone className="text-amber-400 text-lg" />
                  <p className="text-white/90 text-sm uppercase tracking-wide">
                    Secretary
                  </p>
                </div>
                <p className="text-white text-lg font-medium mb-1">
                  Mr. K.S. Krishna Kumar
                </p>
                <a
                  href="tel:9446515640"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  +91 94465 15640
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Donations Section */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 lg:p-8 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-amber-500/20 p-3 rounded-full flex-shrink-0">
                <MdAccountBalance className="text-amber-400 text-2xl" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-semibold text-amber-400 mb-2">
                  Donations
                </h2>
                <p className="text-gray-300 text-base mb-6">
                  Donations can be remitted to the following bank account
                </p>
              </div>
            </div>
            <div className="bg-white/5 border-2 border-amber-500/30 rounded-lg p-6 lg:p-8 space-y-4">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                  Account Name
                </p>
                <p className="text-white text-lg font-medium">
                  ANIYIL SREEKRISHNA SWAMI KSHETHROPADESAKA SAMITHI
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                    Account Number
                  </p>
                  <p className="text-white text-xl font-semibold text-amber-400">
                    0024050000000511
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                    IFSC Code
                  </p>
                  <p className="text-white text-xl font-semibold text-amber-400">
                    DLXB0000024
                  </p>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                  Bank & Branch
                </p>
                <p className="text-white text-lg font-medium">
                  DHANLAXMI BANK, KUZHUPALLY BRANCH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
