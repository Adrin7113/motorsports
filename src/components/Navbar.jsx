import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="h-28 bg-[#A91313] flex items-center justify-between">
        <img
          src="/logo.png"
          alt="The logo in the navbar"
          className="w-32 h-full"
        />
        <div className="flex items-center dm text-3xl text-white gap-10 px-6">
          <Link to="/">
            <h1 className="hover:scale-105 hover:text-white/80">Home</h1>
          </Link>
          <Link to="/gallery">
            <h1 className="hover:scale-105 hover:text-white/80">Gallery</h1>
          </Link>
          <Link to="/crew">
            <h1 className="hover:scale-105 hover:text-white/80">Crew</h1>
          </Link>
          <Link to="/history">
            <h1 className="hover:scale-105 hover:text-white/80">History</h1>
          </Link>
          <Link to="/sponsors">
            <h1 className="hover:scale-105 hover:text-white/80">Sponsors</h1>
          </Link>
          <Link to="/support">
            <h1 className="hover:scale-105 hover:text-white/80">Support Us</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
