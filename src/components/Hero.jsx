// /* eslint-disable react/no-unescaped-entities */
// import { FaFacebook } from "react-icons/fa";
// import { CiMapPin } from "react-icons/ci";

// const Hero = () => {
//   return (
//     <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
//       <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
//         <h1 className="text-[52px] font-semibold mb-8 leading-normal">
//           Welcome to the website of{" "}
//           <span className="text-amber-500">
//             Aniyil Shree Krishna Swami Temple
//           </span>
//         </h1>
//         <p>
//           {" "}
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
//           modi quae quod assumenda dignissimos temporibus provident natus
//           excepturi. Consequuntur odit nemo harum suscipit velit est natus
//           expedita soluta in at!
//         </p>
//       </div>
//       <div className="flex mt-8 gap-2">
//         <div className="flex items-center justify-center">
//           <div className="flex space-x-2">
//             <a
//               href=""
//               className="text-amber-500 hover:text-amber-400 rounded-full glow p-2"
//             >
//               <FaFacebook className="text-[28px]" />
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-center">
//         <img
//           src="https://scontent.fccj6-1.fna.fbcdn.net/v/t31.18172-8/415030_359448197462762_29979831_o.jpg?stp=dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QyobCXG25aUAX_E-Ln-&_nc_ht=scontent.fccj6-1.fna&oh=00_AfB0c0j8oqWB0xGgvU5UBcJbicPDOEDnTiPLTWU80V87jA&oe=6634C8E8"
//           alt="The Temple"
//           className="h-auto max-w-full"
//         />
//         <p className="mt-4 text-3xl font-semibold text-center text-white">
//           {" "}
//           <CiMapPin className="" />
//           <span>
//             <a
//               href="https://www.google.com/maps/dir//36J7%2B453+Aniyal+East+Road,+East+road,+Edavanakkad,+Kochi,+Kerala+682502/@10.0803023,76.1305356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b081112a6042e7f:0xa152d0bcf7085ae5!2m2!1d76.2129375!2d10.0803125?entry=ttu"
//               target="_blank"
//               className="cursor-pointer underline hover:text-amber-500"
//             >
//               Edavannakad
//             </a>
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { FaFacebook } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdGroups } from "react-icons/md";

const Hero = () => {
  return (
    <div className="lg:px-20 px-6 lg:py-12 py-12 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
      {/* Left Content Section */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-slate-800 space-y-6 lg:space-y-6">
        {/* Main Title */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            <span className="text-amber-500">Aniyil</span>{" "}
            <span className="text-slate-800">Sreekrishna</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-slate-800">
            Swami Temple
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto lg:mx-0 mt-4 rounded-full"></div>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed text-center lg:text-left max-w-2xl">
          Aniyil Sreekrishna Swami temple is one of the oldest temples in Vypin
          Island, Ernakulam, Kerala, managed by Cochin Devaswom Board. The main
          deity is Srikrishna. Upa Devathas are Ganapathi, Ayyappan, Sivan &
          Durga.
        </p>

        {/* Location Card */}
        <div className="bg-white border border-amber-500/30 rounded-xl px-6 py-4 w-full max-w-md hover:bg-amber-50/50 hover:border-amber-500/50 transition-all duration-300 shadow-md">
          <a
            href="https://www.google.com/maps/dir//36J7%2B453+Aniyal+East+Road,+East+road,+Edavanakkad,+Kochi,+Kerala+682502/@10.0803023,76.1305356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b081112a6042e7f:0xa152d0bcf7085ae5!2m2!1d76.2129375!2d10.0803125?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center lg:justify-start group"
          >
            <div className="bg-amber-500/10 p-3 rounded-full mr-4 group-hover:bg-amber-500/20 transition-colors duration-200">
              <FiMapPin className="text-amber-600 text-xl" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                Location
              </p>
              <p className="text-slate-800 font-medium text-lg group-hover:text-amber-600 transition-colors duration-200">
                Edavannakad, Kochi, Kerala
              </p>
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center lg:items-start space-y-3 w-full max-w-md">
          <p className="text-sm text-slate-600 uppercase tracking-wide">
            Follow Us
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a
              href="https://www.facebook.com/profile.php?id=61558311322107"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white border border-amber-500/30 text-amber-600 hover:text-white hover:bg-amber-500 hover:border-amber-500 rounded-lg px-6 py-3 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
              aria-label="Facebook Page"
            >
              <FaFacebook className="text-xl flex-shrink-0" />
              <span className="font-medium">Facebook</span>
            </a>
            <a
              href="https://www.facebook.com/groups/446332617847433"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white border border-amber-500/30 text-amber-600 hover:text-white hover:bg-amber-500 hover:border-amber-500 rounded-lg px-6 py-3 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
              aria-label="Facebook Group"
            >
              <MdGroups className="text-xl flex-shrink-0" />
              <span className="font-medium">Facebook Group</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex justify-center items-center lg:mt-0 mt-8">
        <div className="relative w-full max-w-md lg:max-w-lg group">
          <div className="absolute -inset-4 bg-amber-500/20 rounded-2xl blur-xl group-hover:bg-amber-500/30 transition-all duration-300"></div>
          <img
            src="https://scontent.fcok1-1.fna.fbcdn.net/v/t39.30808-1/434759652_122100653816266533_4818696604508498561_n.jpg?stp=c147.0.785.785a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=Ic40wxOXGM8Q7kNvwF3RorV&_nc_oc=AdmzUM0NALMkF6zI4AZi5ebeYKUo8YeomzlEuKF0Y10MdkMF3EwiCuRMqjcrY_cV0Ndm1Tl-hwET0SFQReFhrfba&_nc_zt=24&_nc_ht=scontent.fcok1-1.fna&_nc_gid=inh5XkWu0M0JkAKfyGtHCw&oh=00_AfrJ9R328cKvZni2EUFpY2-fULG1cqAPNqtn14EB6rPivg&oe=697A82AF"
            alt="Aniyil Sreekrishna Swami Temple"
            className="relative w-full h-auto rounded-2xl shadow-2xl object-cover border-2 border-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
// test
