const HorizontalLine = () => {
  return (
    <div className="relative flex items-center mb-8 mt-7">
      <hr className="flex-grow border border-white shadow-lg" />
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-primary px-3 py-1 text-white font-bold text-xl">
        Or
      </div>
    </div>
  );
};

export default HorizontalLine;
