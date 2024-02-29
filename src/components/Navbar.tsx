import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-slate-600">
      <div className="max-container">
        <div className="flex items-center justify-between py-5">
          <h1 className="text-2xl font-semibold text-white hover:text-orange-400 cursor-pointer">
            News
          </h1>
          <nav className="flex items-center gap-4">
            <Link className="text-white text-lg hover:text-orange-400" to={"/"}>
              Home
            </Link>
            <Link
              className="text-white text-lg hover:text-orange-400"
              to={"/news"}
            >
              News
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
