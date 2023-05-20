const History = () => {
  return (
    <div
      onMouseEnter={() => {
        const carName = document.getElementById("carName");
        carName.classList.remove("opacity-0");
        carName.classList.add("opacity-100");
      }}
      className="min-h-screen"
    >
      {/* Collage */}
      <div className="h-[800px] flex">
        <div
          id="carName"
          className="bg-black/70 h-[300px] w-full absolute top-80 z-[20] flex justify-center items-center transition-all ease-in-out opacity-0 duration-2000"
        >
          <h1 className="dm text-9xl text-white">Aethon.v1</h1>
        </div>
        <img src="/collage.png" alt="A Collage" className="w-full" />
      </div>
      {/* Founders */}
      <div className="h-[800px] flex flex-col items-center pt-16 justify-center">
        <h1 className="dm text-7xl pb-10">Founders</h1>
        <div className="h-full w-full flex justify-center">
          <div className="flex flex-col items-center h-full w-1/6 justify-center">
            <img
              src="/founderOne.webp"
              alt="Image of our first founder"
              className="w-44 h-44 pb-5"
            />
            <h1 className="dm text-2xl text-center">Nobel Saju</h1>
            <h1 className="dm text-lg text-center font-light">Vice Captian</h1>
          </div>
          <div className="flex flex-col justify-center items-center h-full w-1/6 gap-20">
            <div>
              <img
                src="/founderTwo.webp"
                alt="Image of our second founder"
                className="w-44 h-44 pb-5"
              />
              <h1 className="dm text-2xl text-center">Roshan Prince</h1>
              <h1 className="dm text-lg text-center font-light">Captian</h1>
            </div>
            <div>
              <img
                src="/founderThree.webp"
                alt="Image of our third founder"
                className="w-44 h-44 pb-5"
              />
              <h1 className="dm text-2xl text-center">Rohith Venu</h1>
            </div>
          </div>
          <div className="flex flex-col items-center h-full w-1/6 justify-center">
            <img
              src="/founderFour.webp"
              alt="Image of our fourth founder"
              className="w-44 h-44 pb-5"
            />
            <h1 className="dm text-2xl text-center">Ayyappadas NP</h1>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative p-6 pt-44 flex items-end justify-between">
        <img
          src="/historyEnd.png"
          className="w-full h-full absolute top-0 left-0 "
        />
        <div className="h-5/6 w-[600px] bg-white/10 relative z-20">
          <h1 className="text-xl ya font-medium p-4 text-white">
            It all began with a casual conversation between Nobel and a friend
            from a different college who had formed a go-kart team. Fascinated
            by the idea, Nobel shared it with me. I recall he brought it up
            after a semester exam, and I immediately agreed to embark on our own
            go-kart adventure. Thus, a year and a half-long journey began. While
            it was challenging, it was also deeply fulfilling. I was fortunate
            to have a small group of skilled and, most importantly, disciplined
            individuals. Our success was due to our sheer commitment to stay
            back every day, even if it was just for a small amount of work. I am
            grateful for the unwavering support we received from our faculty,
            especially Principal Sir, who believed in our vision from day one.
            Special thanks go to our lab staff and CIDRIE for their valuable
            technical advice. Our success required sacrifices, and with each
            step, we gave up a little bit more. We relinquished our leisure time
            and instant gratification to achieve this long-term goal. Now i look
            forward to my juniors to take this club to greater heights.
          </h1>
          <h1 className="text-lg dm font-medium text-right pr-5 text-white">
            -Roshan Prince
          </h1>
        </div>
        {/* <div className="h-5/6 w-[600px] bg-white/20 relative z-20">
          <h1 className="text-xl ya font-medium p-4 text-white">
            It all began with a casual conversation between Nobel and a friend
            from a different college who had formed a go-kart team. Fascinated
            by the idea, Nobel shared it with me. I recall he brought it up
            after a semester exam, and I immediately agreed to embark on our own
            go-kart adventure. Thus, a year and a half-long journey began. While
            it was challenging, it was also deeply fulfilling. I was fortunate
            to have a small group of skilled and, most importantly, disciplined
            individuals. Our success was due to our sheer commitment to stay
            back every day, even if it was just for a small amount of work. I am
            grateful for the unwavering support we received from our faculty,
            especially Principal Sir, who believed in our vision from day one.
            Special thanks go to our lab staff and CIDRIE for their valuable
            technical advice. Our success required sacrifices, and with each
            step, we gave up a little bit more. We relinquished our leisure time
            and instant gratification to achieve this long-term goal. Now i look
            forward to my juniors to take this club to greater heights.
          </h1>
          <h1 className="text-lg dm font-medium text-right pr-5 text-white">
            -Roshan Prince
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default History;
