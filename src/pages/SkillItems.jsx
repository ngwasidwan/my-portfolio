function SkillItems({ children }) {
  return (
    <div className="hover:shadow-md hover:shadow-stone-400  flex flex-col items-center gap-2 md:gap-4 border-2 border-stone-700 md:py-8 py-2 rounded-md transition-all md:text-xl text-lg">
      {children}
    </div>
  );
}

export default SkillItems;
