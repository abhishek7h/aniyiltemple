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
    <div className="lg:px-100 px-10 lg:py-0 py-20 text-center lg:text-left gap-5 flex flex-col lg:flex-row justify-between items-center">
      <div className="lg:w-1/2 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          Welcome to the website of{" "}
          <span className="text-amber-500">
            Aniyil Shree Krishna Swami Temple
          </span>
        </h1>
        <p className="text-xl">
          Aniyil Shree Krishna Swami temple is one of the oldest temples in
          Vypin Island, Ernakulam, Kerala, managed by Cochin Devaswam Board. The
          main diety is Shree Krishna. Upa Devathas are Ganapathi, Ayyappan,
          Sivan & Durga.
        </p>
        <div className="mt-8 flex justify-center lg:justify-start space-x-2">
          <a
            href="https://www.facebook.com/profile.php?id=61558311322107"
            className="text-amber-500 hover:text-amber-400 rounded-full glow p-2"
            target="_blank"
          >
            <FaFacebook className="text-[28px]" />
          </a>
          <a
            href="https://www.facebook.com/groups/446332617847433"
            className="text-amber-500 hover:text-amber-400 rounded-full glow p-2"
            target="_blank"
          >
            <MdGroups className="text-[28px]" />
          </a>
        </div>
        <p className="text-3xl font-semibold text-white mt-4 flex items-center">
          <FiMapPin className="mr-2" />
          <span>
            <a
              href="https://www.google.com/maps/dir//36J7%2B453+Aniyal+East+Road,+East+road,+Edavanakkad,+Kochi,+Kerala+682502/@10.0803023,76.1305356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b081112a6042e7f:0xa152d0bcf7085ae5!2m2!1d76.2129375!2d10.0803125?entry=ttu"
              target="_blank"
              className="cursor-pointer underline hover:text-amber-500"
            >
              Edavannakad
            </a>
          </span>
        </p>
      </div>
      <div className="lg:w-25 mt-10 lg:flex justify-center items-center">
        {/* Image for both desktop and mobile */}
        <div className="lg:mr-4">
          <img
            src="https://scontent.fccj6-1.fna.fbcdn.net/v/t31.18172-8/415030_359448197462762_29979831_o.jpg?stp=dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QyobCXG25aUAX_E-Ln-&_nc_ht=scontent.fccj6-1.fna&oh=00_AfB0c0j8oqWB0xGgvU5UBcJbicPDOEDnTiPLTWU80V87jA&oe=6634C8E8"
            alt="The Temple"
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
