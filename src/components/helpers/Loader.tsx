const Loader = () => {
  return (
    <div
      id="container"
      className=" absolute flex h-full w-full items-center justify-center bg-white opacity-30"
    >
      <div className="flex h-14  w-14 animate-spin items-center justify-center rounded-full bg-gradient-to-tr from-black to-fuchsia-500">
        <div className="h-9 w-9 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default Loader;
