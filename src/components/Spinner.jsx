function Spinner() {
  return (
    <div className="w-full flex items-center justify-center h-svh">
      <div className="w-[4rem] h-[4rem]  rounded-full border-2 border-r-stone-100 border-b-stone-100 border-l-stone-100 border-t-stone-500 animate-spin">
        &nbsp;
      </div>
    </div>
  );
}

export default Spinner;
