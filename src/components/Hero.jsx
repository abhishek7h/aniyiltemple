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
    <div className="lg:px-20 px-6 lg:py-20 py-12 min-h-[calc(100vh-80px)] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
      {/* Left Content Section */}
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-white space-y-6">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
          <span className="text-amber-500">Aniyil</span>{" "}
          <span className="text-white">Sreekrishna</span>
          <br />
          <span className="text-white">Swami Temple</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed text-center lg:text-left max-w-2xl">
          Aniyil Sreekrishna Swami temple is one of the oldest temples in Vypin
          Island, Ernakulam, Kerala, managed by Cochin Devaswom Board. The main
          deity is Srikrishna. Upa Devathas are Ganapathi, Ayyappan, Sivan &
          Durga.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center lg:justify-start text-white/90 text-lg sm:text-xl">
          <FiMapPin className="mr-2 text-amber-500" />
          <a
            href="https://www.google.com/maps/dir//36J7%2B453+Aniyal+East+Road,+East+road,+Edavanakkad,+Kochi,+Kerala+682502/@10.0803023,76.1305356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b081112a6042e7f:0xa152d0bcf7085ae5!2m2!1d76.2129375!2d10.0803125?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-colors duration-200 underline underline-offset-2"
          >
            Edavannakad, Kochi, Kerala
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start space-x-4 pt-2">
          <a
            href="https://www.facebook.com/profile.php?id=61558311322107"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-400 hover:bg-amber-500/10 rounded-full p-3 transition-all duration-200"
            aria-label="Facebook Page"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/groups/446332617847433"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 hover:text-amber-400 hover:bg-amber-500/10 rounded-full p-3 transition-all duration-200"
            aria-label="Facebook Group"
          >
            <MdGroups className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <img
            src="https://scontent.fcok1-1.fna.fbcdn.net/v/t39.30808-1/434759652_122100653816266533_4818696604508498561_n.jpg?stp=c147.0.785.785a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=Ic40wxOXGM8Q7kNvwF3RorV&_nc_oc=AdmzUM0NALMkF6zI4AZi5ebeYKUo8YeomzlEuKF0Y10MdkMF3EwiCuRMqjcrY_cV0Ndm1Tl-hwET0SFQReFhrfba&_nc_zt=24&_nc_ht=scontent.fcok1-1.fna&_nc_gid=inh5XkWu0M0JkAKfyGtHCw&oh=00_AfrJ9R328cKvZni2EUFpY2-fULG1cqAPNqtn14EB6rPivg&oe=697A82AF"
            alt="Aniyil Sreekrishna Swami Temple"
            className="w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
// test
