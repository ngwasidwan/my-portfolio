import { useEffect } from "react";
import { BiX } from "react-icons/bi";

import { SiGithub, SiLinkedin } from "react-icons/si";

function Contact({ setShowContact, showContact }) {
  useEffect(() => {
    function handleClick() {
      setShowContact(false);
    }
    document.body.addEventListener("click", handleClick, true);
    return () => document.body.addEventListener("click", handleClick, true);
  }, [setShowContact]);
  // ? " md:translate-y-[-180%] translate-y-[-90%]"
  // : " md:translate-y-[-300%] translate-y-[-200%]"
  return (
    <div
      className={`flex flex-col  absolute ${
        showContact ? "-translate-y-[30%] " : "-translate-y-[200%] "
      } gap-8 bg-stone-900   px-5 py-10 text-xl rounded-md shadow-sm shadow-stone-500 z-20 opacity-90   transition-all duration-[500ms]`}
    >
      <BiX
        className=" absolute right-0 top-0 cursor-pointer z-10 hover:opacity-50 text-3xl"
        onClick={() => setShowContact(false)}
      />

      <p className="  text-stone-100">sidwanche@gmail.com</p>

      <a
        href="https://github.com/ngwasidwan"
        target="_blank"
        className="flex gap-2 items-center text-stone-200 hover:border-b-stone-100 border border-stone-900 w-1/2"
      >
        <SiGithub />
        <span> GitHub</span>
      </a>
      <a
        href="https://linkedin.com/ngwasidwan"
        target="_blank"
        className="flex gap-2 items-center text-stone-200 hover:border-b-stone-100 border border-stone-900 w-1/2"
      >
        <SiLinkedin />
        <span> LinkedIn</span>
      </a>
    </div>
  );
}

export default Contact;
