const Crew = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="h-[800px] relative">
        <img
          src="/teamIntro.webp"
          className="w-full h-full absolute top-0 left-0"
        />
        <div className="h-1/2 w-[600px] bg-white/20 relative z-20">
          <h1 className="text-xl lus font-medium p-4 text-white">
            Our crew consists of interdisciplinary students who are keen to put
            in their theoretical knowledge into practice to build an efficient
            ev go kart. Within this team we have a group for marketing,
            designing, research and analysis who work constantly to find out
            ways to build an efficient go kart.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Crew;
