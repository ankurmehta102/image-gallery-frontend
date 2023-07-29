const DisplayPicture = () => {
  return (
    <div className="flex h-9 w-9  items-center justify-center rounded-full bg-stone-900  text-slate-300 max-[575px]:hidden">
      <img
        src={window.electron.env.REACT_APP_PROFILE_ADDRESS}
        className="h-full w-full rounded-full"
      />
    </div>
  );
};

export default DisplayPicture;
