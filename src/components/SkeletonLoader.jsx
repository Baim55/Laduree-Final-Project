function SkeletonLoader() {
  return (
    <div className="garamond bg-[#fcf6ed] px-4 md:px-8 pt-[130px] pb-20 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex gap-4 flex-col-reverse md:flex-row">
          <div className="flex md:flex-col gap-3">
            <div className="w-[60px] h-[60px] bg-[#e6decb]/55" />
            <div className="w-[60px] h-[60px] bg-[#e6decb]/55" />
            <div className="w-[60px] h-[60px] bg-[#e6decb]/55" />
          </div>
          <div className="flex-1 h-[400px] md:h-[550px] bg-[#e6decb]/55" />
        </div>
        <div className="flex flex-col justify-center space-y-6 px-0 md:px-8">
          <div className="h-8 bg-[#e6decb]/55 w-3/4" />
          <div className="h-6 bg-[#e6decb]/55 w-1/4" />
          <div className="h-20 bg-[#e6decb]/55 w-full mt-4" />
          <div className="h-12 bg-[#e6decb]/55 w-full mt-6" />
        </div>
      </div>
      <div className="mt-20 border-t border-[#e6decb] pt-14">
        <div className="h-6 bg-[#e6decb]/55 w-48 mx-auto mb-10" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col space-y-3">
              <div className="w-full h-[250px] md:h-[320px] bg-[#e6decb]/55" />
              <div className="h-4 bg-[#e6decb]/55 w-3/4 mx-auto" />
              <div className="h-4 bg-[#e6decb]/55 w-1/4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoader;