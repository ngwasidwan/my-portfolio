function SkillItems({ children }) {
  return (
    <div className="hover:shadow-md hover:shadow-stone-400  flex flex-col items-center gap-4 md:gap-6 border-2 border-stone-700 md:py-8 py-6 rounded-md transition-all md:text-xl text-lg z-10">
      {children}
    </div>
  );
}

export default SkillItems;
