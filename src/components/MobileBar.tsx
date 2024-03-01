import { CiViewList } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function MobileBar() {
  return (
    <div className="md:hidden bg-white z-10 fixed bottom-0 left-0 w-full h-16 border flex gap-8 justify-center items-center">
      <Link to="/">
        <CiViewList className="h-10 w-10 group-hover:text-white" />
      </Link>
      <Link to="/categories">
        <BiCategory className="h-10 w-10 group-hover:text-white" />
      </Link>
    </div>
  );
}
