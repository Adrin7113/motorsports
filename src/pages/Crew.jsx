const Crew = () => {
  return (
    <div className="min-h-screen ">
      {/* Team Intro */}

      <div className="h-[1000px] relative flex items-end p-16">
        <img src="/crew.png" className="w-full h-full absolute top-0 left-0" />
        <div className="h-1/2 w-[350px] bg-black/60 rounded-3xl text-white relative z-20 flex flex-col justify-center">
          <h1 className="text-3xl mont font-bold text-center">Meet The Crew</h1>
          <h1 className="text-xl mont p-4">
            Our crew consists of interdisciplinary students who are keen to put
            in their theoretical knowledge into practice to build an efficient
            ev go kart. Within this team we have a group for marketing,
            designing, research and analysis who work constantly to find out
            ways to build an efficient go kart.
          </h1>
        </div>
      </div>
      {/* Team Lead */}
      <div className="h-[800px] relative p-16">
        <img
          src="/v.webp"
          className="w-full h-full absolute top-0 left-0 z-[-10]"
        />
        <h1 className="mont text-7xl text-center text-white">Team Lead</h1>
        <div className="h-full w-full flex ">
          <div className="w-1/2 h-full flex flex-col justify-center items-center gap-5">
            <img src="/leadOne.webp" className="w-44 h-44" />
            <h1 className="text-4xl mont font-bold">Captain</h1>
            <h1 className="text-4xl mont">Laveena Wels</h1>
            <img
              src="/linkedIn.webp"
              alt="The LinkedIn Logo"
              className="w-12 h-12"
            />
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center gap-5">
            <img src="/leadTwo.webp" className="w-44 h-44" />
            <h1 className="text-4xl mont font-bold">Vice Captain</h1>
            <h1 className="text-4xl mont">Malavika NR</h1>
            <img
              src="/linkedIn.webp"
              alt="The LinkedIn Logo"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
      {/* Our Team Graph*/}
      <img
        src="ourTeam.png"
        alt="A graph depicting our team"
        className="h-[600px] w-screen"
      />

      {/* Our Team Members*/}
      <div className="bg-[#A30000] h-[50px]"></div>
      <div className="bg-[#960018] h-[50px]"></div>
      <div className=" bg-[#750000] text-white pt-32">
        {/* Design */}
        <div className="flex flex-col items-center pb-32">
          <h1 className="text-5xl mont font-bold pb-10">Design</h1>
          <div className="flex gap-5 w-full">
            <div className="mont  w-1/3 flex flex-col items-center gap-5">
              <img
                src="/designOne.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className=" text-2xl">Vaibhav Krishna</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="w-1/3 flex flex-col items-center gap-5">
              <img
                src="/designTwo.webp"
                alt="Design Guy Two"
                className="w-28 h-28"
              />
              <h1 className=" text-2xl">Athul T Sajeevan</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="w-1/3 flex flex-col items-center gap-5">
              <img
                src="/designThree.webp"
                alt="Design Guy Three"
                className="w-28 h-28"
              />
              <h1 className=" text-2xl">Albin T Biju</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* Analysis */}
        <div className="flex flex-col items-center pb-32">
          <h1 className="text-5xl mont font-bold pb-10">Analysis</h1>
          <div className="flex gap-5 w-full">
            <div className=" w-1/2 mont flex flex-col items-center gap-5">
              <img
                src="/analysisOne.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className=" text-2xl">Abhinand Rajesh</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center gap-5">
              <img
                src="/analysisTwo.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className=" text-2xl">Febin Thomas</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* Materials and Bodyworks */}
        <div className="flex flex-col items-center pb-32">
          <h1 className="text-5xl mont font-bold pb-10">
            Materials and Bodyworks
          </h1>
          <div className="flex gap-5 w-full">
            <div className=" w-1/2 mont flex flex-col items-center gap-5">
              <img
                src="/materialOne.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className=" text-2xl">Nandu Rajeev</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center gap-5">
              <img
                src="/materialTwo.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className=" text-2xl">Midhul Manoj</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* High Voltage System */}
        <div className="flex flex-col items-center pb-32">
          <h1 className="text-5xl mont font-bold pb-10">High Voltage System</h1>
          <div className="flex gap-5 w-full">
            <div className=" w-1/2 mont flex flex-col items-center gap-5">
              <img
                src="/highOne.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className="text-2xl">Anantha Krishnan</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center gap-5">
              <img
                src="/highTwo.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className="text-2xl">Prithviraj K </h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* Low Voltage System */}
        <div className="flex flex-col items-center pb-32">
          <h1 className="text-5xl mont font-bold pb-10">Low Voltage System</h1>
          <div className="flex gap-5 w-full">
            <div className="mont w-1/3 flex flex-col items-center gap-5">
              <img
                src="/lowOne.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className="text-2xl">T Anandhakrishnan</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="w-1/3 flex flex-col items-center gap-5">
              <img
                src="/lowTwo.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className="text-2xl">Navneeth Menon</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="w-1/3 flex flex-col items-center gap-5">
              <img
                src="/lowThree.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className="text-2xl">Nirosh Ebby Mathew</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* Protective Equipments */}
        <div className="flex flex-col items-center pb-32">
          <h1 className="text-5xl mont font-bold pb-10">
            Protective Equipments
          </h1>
          <div className="flex gap-5 w-full">
            <div className="mont w-1/2 flex flex-col items-center gap-5">
              <img
                src="/leadTwo.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className="text-2xl">Malavika N R</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center gap-5">
              <img
                src="/protectOne.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className="text-2xl">Sudhev Pradeep</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* Marketing */}
        <div className="flex flex-col items-center pb-32">
          <h1 className="text-5xl mont font-bold pb-10">Marketing</h1>
          <div className="flex gap-5 w-full">
            <div className="flex flex-col gap-20 w-1/3">
              <div className=" w-full mont flex flex-col items-center gap-5">
                <img
                  src="/leadOne.webp"
                  alt="Design Guy One"
                  className="w-28 h-28"
                />
                <h1 className="text-2xl">Laveena Wels</h1>
                <img
                  src="/linkedIn.webp"
                  alt="The LinkedIn Logo"
                  className="w-12 h-12"
                />
              </div>
              <div className="w-full flex flex-col items-center gap-5">
                <img
                  src="/analysisTwo.webp"
                  alt="Design Guy One"
                  className="w-28 h-28"
                />
                <h1 className="text-2xl">Febin Thomas</h1>
                <img
                  src="/linkedIn.webp"
                  alt="The LinkedIn Logo"
                  className="w-12 h-12"
                />
              </div>
            </div>

            <div className="flex flex-col w-1/3 pt-44">
              <div className="w-full flex flex-col items-center gap-5">
                <img
                  src="/founderTwo.webp"
                  alt="Design Guy One"
                  className="w-28 h-28"
                />
                <h1 className="text-2xl">Roshan Prince</h1>
                <img
                  src="/linkedIn.webp"
                  alt="The LinkedIn Logo"
                  className="w-12 h-12"
                />
              </div>
            </div>

            <div className="flex flex-col gap-20 w-1/3">
              <div className=" w-full flex flex-col items-center gap-5">
                <img
                  src="/leadTwo.webp"
                  alt="Design Guy One"
                  className="w-28 h-28"
                />
                <h1 className="text-2xl">Malavika NR</h1>
                <img
                  src="/linkedIn.webp"
                  alt="The LinkedIn Logo"
                  className="w-12 h-12"
                />
              </div>
              <div className="w-full flex flex-col items-center gap-5">
                <img
                  src="/protectOne.webp"
                  alt="Design Guy One"
                  className="w-28 h-28"
                />
                <h1 className="text-2xl">Sudhev P</h1>
                <img
                  src="/linkedIn.webp"
                  alt="The LinkedIn Logo"
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Website Design */}
        <div className="flex flex-col items-center pb-32">
          <h1 className="text-5xl mont font-bold pb-10">Web Design</h1>
          <div className="flex gap-5 w-full">
            <div className="mont w-1/3 flex flex-col items-center gap-5">
              <img
                src="/founderTwo.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className="text-2xl">Roshan Prince</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="w-1/3 flex flex-col items-center gap-5">
              <img
                src="/me.webp"
                alt="Design Guy One"
                className="w-28 h-28 rounded-full"
              />
              <h1 className="text-2xl">Adrin Jose</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="w-1/3 flex flex-col items-center gap-5">
              <img
                src="/leadTwo.webp"
                alt="Design Guy One"
                className="w-28 h-28"
              />
              <h1 className="text-2xl">Malavika NR</h1>
              <img
                src="/linkedIn.webp"
                alt="The LinkedIn Logo"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
