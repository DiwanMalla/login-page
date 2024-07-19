const SocialMedia = () => {
  const images = ["facebook.jpg", "apple.jpg", "google.jpg"];
  return (
    <div className="flex gap-2 items-center justify-center">
      {images.map((image) => (
        <div>
          <img className="bg-white rounded-full w-12 h-12 p-2" src={image} />
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
