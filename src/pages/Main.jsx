import { useEffect } from "react";
const Main = () => {
  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };
  useEffect(() => {
    const onRender = async () => {
      await delay(1000);
      const introImg = document.getElementById("introImg");
      const fadeIn = document.getElementsByClassName("fadeIn");
      for (let i = 0; i < fadeIn.length; i++) {
        fadeIn[i].classList.remove("opacity-0");
        fadeIn[i].classList.add("opacity-100");
      }
      introImg.classList.remove("w-0");
      introImg.classList.add("w-[320px]");
    };
    onRender();
  }, []);

  const textOne = () => {
    const textOne = document.getElementById("textOne");
    textOne.classList.remove("opacity-0");
    textOne.classList.add("opacity-100");
  };

  const textTwo = () => {
    const textTwo = document.getElementById("textTwo");
    textTwo.classList.remove("opacity-0");
    textTwo.classList.add("opacity-100");
  };
  return (
    <>
      <div className="max-w-screen h-[900px] relative flex justify-center items-start pt-44">
        <img
          src="/introMainImg.webp"
          className="w-full h-full absolute top-0 left-0"
        />
        <div className="bg-black/70 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative z-20 flex items-center gap-5">
          <div className="relative w-[320px] h-[250px] flex justify-center">
            <div
              id="introImg"
              className="w-0 h-[250px] bg-[#DB2222] absolute right-0  transition-all  duration-2000"
            ></div>
            <img
              src="/logo.png"
              alt="The logo"
              className="w-[320px] h-[250px] absolute left-0"
            />
          </div>
          <div className="flex flex-col gap-5 mont font-bold text-white text-7xl">
            <h1 className="fadeIn opacity-0 transition-opacity ease-in-out duration-2000">
              MITS
            </h1>
            <h1 className="fadeIn opacity-0 transition-opacity ease-in-out duration-2000">
              MotorSports
            </h1>
            <div className="w-full flex justify-end text-3xl">
              <h1 className="fadeIn opacity-0 transition-opacity ease-in-out duration-2000">
                Engineered to win
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*Second Image */}
      <div
        onMouseEnter={() => textOne()}
        className="max-w-screen  relative flex  p-16"
      >
        <img
          src="/introTwo.jpg"
          className="w-full h-full absolute top-0 left-0"
        />
        <div
          id="textOne"
          className="h-full w-[600px] rounded-3xl bg-black/60 text-white relative z-20 p-16 opacity-0 transition-all ease-in-out duration-2000"
        >
          <h1 className="text-4xl mont text-[#D71B1B] font-bold">
            Muthoot Institute of Technology And Science
          </h1>
          <h1 className="text-xl mont pt-10">
            Muthoot Institute of Technology and Science (MITS) is promoted by
            Muthoot M. George Institute of Technology, a Section 25 Company
            within the Muthoot Group. MITS is a self financing technical
            institution offering postgraduate and undergraduate engineering
            programmes. The promoters with their commanding presence in the
            domains of Financial Services, Hospitality, Healthcare, Renewable
            Energy and Information Technology, are committed to building MITS as
            a centre of excellence, focusing purely on merit. This “temple of
            learning” will provide to the students, state-of-the-art
            infrastructure, highly qualified and proficient teachers from
            various faculty of engineering and allied streams, embedded in a
            conducive environment where focus will be on their harmonious
            development.
          </h1>
        </div>
      </div>

      {/*Third Image */}

      <div
        onMouseEnter={() => textTwo()}
        className="max-w-screen h-[900px] relative flex  p-16 justify-end"
      >
        <img
          src="/introThird.webp"
          className="w-full h-full absolute top-0 left-0"
        />
        <div
          id="textTwo"
          className="h-full w-[600px] rounded-3xl bg-black/60 text-white relative z-20 p-16 opacity-0 transition-all ease-in-out duration-2000"
        >
          <h1 className="text-4xl mont text-white text-center font-bold">
            About
          </h1>
          <h1 className="text-lg mont pt-2">
            We are a group of passionate students who share a common interest in
            motorsports and engineering. Our mission is to design, build, and
            race electric go-karts that are both efficient and exciting to
            drive. Our club is exclusively for students who are interested in
            hands-on experience with engineering, design, and racing. We offer
            opportunities to learn about electric vehicle technology,
            participate in design challenges, and compete in national
            competitions. Our members include both mechanical and electrical
            engineering students. Through our club, students have the
            opportunity to gain practical skills and real-world experience in
            engineering, design, and project management. Our projects are
            designed to challenge students to think creatively and work
            collaboratively to solve complex problems. We are excited to share
            our passion for go-karts with the world and hope to inspire others
            to join us in our journey. Thank you for visiting our website and we
            hope to see you at our next race!
          </h1>
        </div>
      </div>
    </>
  );
};

export default Main;
