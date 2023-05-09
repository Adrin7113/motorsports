const Gallery = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center">
      <img
        src="/galleryOne.png"
        alt="Gallery Image One"
        className="w-5/6 mx-10 mb-10 mt-5 border-4 border-[#750000]"
      />
      <div className="flex justify-center mb-10 mx-10 w-5/6">
        <img
          src="/galleryTwo.png"
          alt="Gallery Image One"
          className="w-1/2 border-4 border-[#750000]"
        />
        <img
          src="/galleryThree.png"
          alt="Gallery Image One"
          className="w-1/2 border-4 border-[#750000]"
        />
      </div>
      <img
        src="/galleryFour.png"
        alt="Gallery Image One"
        className="w-5/6 mx-10 mb-10 border-4 border-[#750000]"
      />
      <img
        src="/galleryFive.png"
        alt="Gallery Image One"
        className="w-5/6 mx-10 mb-10 border-4 border-[#750000]"
      />
      <div className="flex justify-center mb-5 mx-10 w-5/6">
        <img
          src="/gallerySix.png"
          alt="Gallery Image One"
          className="w-1/3 border-4 border-[#750000]"
        />
        <img
          src="/gallerySeven.png"
          alt="Gallery Image One"
          className="w-1/3 border-4 border-[#750000]"
        />
        <img
          src="/galleryEight.png"
          alt="Gallery Image One"
          className="w-1/3 border-4 border-[#750000]"
        />
      </div>
    </div>
  );
};

export default Gallery;
