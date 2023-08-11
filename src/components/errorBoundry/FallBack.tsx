function FallBack({ errMsg }: { errMsg: string }) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <p className="text-white">Error Boundry</p>
      <p className="text-error">{errMsg}</p>
    </div>
  );
}

export default FallBack;
