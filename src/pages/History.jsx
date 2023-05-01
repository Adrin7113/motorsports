const History = () => {
  return (
    <div className="min-h-screen">
      {/* Collage */}
      <div className="h-[800px] bg-red-400 flex">
        <img src="/collage.webp" alt="A Collage" className="w-full" />
      </div>
      {/* Founders */}
      <div className="h-[800px] flex flex-col items-center pt-16 justify-center">
        <h1 className="ice text-7xl pb-10">Founders</h1>
        <div className="h-full w-full flex justify-center">
          <div className="flex flex-col items-center h-full w-1/6 justify-center">
            <img
              src="/founderOne.webp"
              alt="Image of our first founder"
              className="w-44 h-44 pb-5"
            />
            <h1 className="ice text-2xl text-center">Nobel Saju</h1>
            <h1 className="ice text-2xl text-center">Vice Captian</h1>
          </div>
          <div className="flex flex-col justify-center items-center h-full w-1/6 gap-20">
            <div>
              <img
                src="/founderTwo.webp"
                alt="Image of our second founder"
                className="w-44 h-44 pb-5"
              />
              <h1 className="ice text-2xl text-center">Roshan Prince</h1>
              <h1 className="ice text-2xl text-center">Captian</h1>
            </div>
            <div>
              <img
                src="/founderThree.webp"
                alt="Image of our third founder"
                className="w-44 h-44 pb-5"
              />
              <h1 className="ice text-2xl text-center">Rohith Venu</h1>
            </div>
          </div>
          <div className="flex flex-col items-center h-full w-1/6 justify-center">
            <img
              src="/founderFour.webp"
              alt="Image of our fourth founder"
              className="w-44 h-44 pb-5"
            />
            <h1 className="ice text-2xl text-center">Ayyappadas NP</h1>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="h-[800px] relative p-16 pt-32 flex items-end">
        <img
          src="/historyEnd.webp"
          className="w-full h-full absolute top-0 left-0"
        />
        <div className="h-5/6 w-[600px] bg-white/20 relative z-20">
          <h1 className="text-xl lus font-medium p-4 text-white">
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
          <h1 className="text-lg lus font-medium text-right pr-5 text-white">
            -Roshan Prince
          </h1>
        </div>
      </div>
    </div>
  );
};

export default History;
