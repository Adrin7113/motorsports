const Support = () => {
  return (
    <div className="min-h-screen">
      {/*Support */}
      <div className="h-[500px] flex items-center pt-16 flex-col">
        <h1 className="text-5xl font-bold mont w-1/2 text-center">
          Support Us
        </h1>
        <p className="text-2xl mont w-2/3 pt-16">
          Sponsoring our electric go kart project offers numerous benefits for
          companies looking to increase their visibility and reputation. We plan
          to feature our sponsors prominently on our website, social media
          handles, and at racing events where the go kart will be showcased.
          <br />
          <br /> By associating your brand with us, you are supporting progress
          in the field of electric vehicles and sustainability. In addition,
          sponsoring our project demonstrates your commitment to enhance the
          practical knowledge in students and provide them an opportunity to get
          hands-on experience and be industry ready.
        </p>
      </div>
      {/*Social Media */}
      <div className="h-[400px]  mont flex items-center pt-16 flex-col">
        <h1 className="text-5xl mont font-bold  w-1/2 text-center">
          Social Media Handles
        </h1>
        <div className="pt-16 flex gap-20">
          <img src="/linkedIn.webp" alt="LinkedIn Logo" className="w-24 h-24" />
          <img src="/yt.webp" alt="Youtube Logo" className="w-32 h-24" />
          <img src="/insta.webp" alt="Instagram Logo" className="w-24 h-24" />
        </div>
      </div>
      {/*Contact */}
      <div className="h-[425px] bg-black mont font-medium text-white flex pt-16 flex-col pl-16 gap-5">
        <h1 className="text-5xl ">Contact Us</h1>
        <div className="flex gap-5 items-center">
          <img src="/phone.webp" alt="An icon of a phone" className="w-8 h-8" />
          <h1 className="text-3xl">Phone</h1>
        </div>
        <div className="text-3xl">
          <h1>Laveena Wels: +91 94952 11592</h1>
          <h1>Malavika NR: +91 96052 91699</h1>
        </div>
        <div className="text-3xl">
          <h1>Our Address</h1>
          <h1>Muthoot Institute of Technology and Science Varikoli</h1>
          <h1> P.O, Puthencruz- 682308</h1>
        </div>
      </div>
    </div>
  );
};

export default Support;
