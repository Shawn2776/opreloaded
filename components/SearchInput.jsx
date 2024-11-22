import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SearchInput = () => {
  return (
    <section className="bg-gray-50 pb-10 pt-2 mt-10 w-full">
      <h2 className="text-center text-[25px] text-gray-400 mt-8 mb-1">
        Plan your next adventure
      </h2>
      <div className="flex justify-center">
        <div className="flex bg-gray-100 p-1 rounded-full px-5 gap-2 divide-x-2">
          <div className="flex items-center">
            <FaLocationDot className="text-black w-5 h-5" />

            <input
              type="text"
              placeholder="Location"
              className="p-2 outline-none bg-transparent"
            />
          </div>
          <div className="pl-12">
            <input
              type="date"
              className="p-2 outline-none bg-transparent text-gray-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchInput;

// <div>
//   <h2 className="text-center text-[20px] text-gray-400 mb-4 mt-5">
//     Plan Your Next Adventure
//   </h2>
//   <div className="flex gap-24 justify-center">
//     <div className="flex bg-gray-100 gap-10 divide-x-2 p-2 px-5 rounded-full">
//       {/* Location Input */}
//       <div className="flex items-center">
//         <IoLocationSharp className="text-gray-500" size={25} />
//         <input
//           type="text"
//           placeholder="Location"
//           className="pl-10 p-2 outline-none bg-white"
//         />
//       </div>
//       <div className="flex items-center gap-2 pl-10">
//         {/* <FaRegCalendarAlt className="text-gray-500" size={20} /> */}
//         <input type="date" />
//       </div>
//     </div>
//   </div>
// </div>
