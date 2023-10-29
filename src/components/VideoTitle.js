const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video sm:pt-[20%] px-4 sm:px-8 md:px-12 lg:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-center sm:text-left">{title}</h1>
      <p className="py-6 text-lg text-center sm:text-left sm:w-full md:w-1/2">
        {overview}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
        <button className="bg-white  rounded-lg text-black text-xl p-4 px-8 md:px-12 my-2 sm:my-0 sm:mr-2 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 rounded-lg text-white text-xl p-4 px-8 md:px-12 my-2 sm:my-0 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
//       <h1 className="text-6xl font-bold">{title}</h1>
//       <p className="py-6 text-lg w-1/4">{overview}</p>

//       <div>
//         <button className="bg-gray-500 bg-opacity-50 rounded-lg text-white text-xl p-4 px-12 ">
//           ▶️Play
//         </button>
//         <button className="bg-gray-500 bg-opacity-50 mx-2 rounded-lg text-white text-xl p-4 px-12 ">
//           More Info
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoTitle;
