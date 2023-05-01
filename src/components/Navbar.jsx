const Navbar = () => {
  return (
    <div>
      <nav className="h-16 bg-[#A91313] flex items-center justify-between">
        <img
          src="/logo.webp"
          alt="The logo in the navbar"
          className="w-24 h-16"
        />
        <div className="flex items-center im text-3xl text-white gap-10 px-6">
          <h1>Home</h1>
          <h1>Gallery</h1>
          <h1>Crew</h1>
          <h1>History</h1>
          <h1>Support Us</h1>
        </div>
      </nav>
      <div className="h-2 w-full bg-black"></div>
    </div>
  );
};

export default Navbar;
