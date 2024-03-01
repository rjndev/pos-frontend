// import { AiOutlineHome } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-white hidden md:block rounded-lg min-w-[250px] max-h-[750px] h-fit ml-[-4px] py-6 ">
      <div className="flex gap-2">
        <h1 className="mx-auto font-bold text-2xl">
          <span className="text-black ">Pay</span>
          <span className="text-purple-600 ">Point</span>
        </h1>
      </div>

      <div className="flex flex-col gap-4 mt-10">
        {/* <div className="flex px-4 items-center  gap-6 rounded-lg mx-4 py-2 group hover:bg-purple-400 hover:cursor-pointer transition-colors">
          <AiOutlineHome className="h-5 w-5 group-hover:text-white" />
          <p className="text-black font-semibold group-hover:text-white">
            Home
          </p>
        </div> */}

        <Link
          to="/"
          className="flex px-4 items-center  gap-6 rounded-lg mx-4 group py-2 hover:bg-purple-400 hover:cursor-pointer transition-colors"
        >
          <CiViewList className="h-5 w-5 group-hover:text-white" />
          <p className="text-black font-semibold group-hover:text-white">
            Items
          </p>
        </Link>

        <Link
          to="/categories"
          className="flex px-4 items-center  gap-6 rounded-lg mx-4 group py-2 hover:bg-purple-400 hover:cursor-pointer transition-colors"
        >
          <BiCategory className="h-5 w-5 group-hover:text-white" />
          <p className="text-black font-semibold group-hover:text-white">
            Categories
          </p>
        </Link>
      </div>
    </div>
  );
}
