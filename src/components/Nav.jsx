import { NavLink } from "react-router-dom";
import Contact from "../pages/Contact";

import { MdMenu } from "react-icons/md";
import { useState } from "react";

import { AiOutlineX } from "react-icons/ai";

const navData = ["home", "skills", "projects"];

function Nav({ showContact, setShowContact }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleClick() {
    setShowContact((cur) => !cur);
    setToggleMenu(false);
  }

  return (
    <nav className="flex items-center pt-4 relative ">
      <div
        className={`overflow-hidden md:static absolute right-0 top-14 md:ml-auto   md:w-auto w-full bg-red ${
          toggleMenu ? "z-20" : ""
        }`}
      >
        <ul
          className={` ml-auto md:flex md:items-center md:gap-10 md:flex-row md:bg-inherit uppercase text-sm md:static flex flex-col gap-5  bg-stone-900 items-center opacity-70    md:translate-x-0 top-14 transition-all  
          h-[90vh] md:h-auto md:pt-2 pt-20 ${
            toggleMenu ? "translate-x-[0%]" : "translate-x-[100%]"
          }  `}
        >
          {navData.map((item) => (
            <li key={item} onClick={() => setToggleMenu(false)}>
              <NavLink
                to={`/${item}`}
                className="md:bg-stone-800 md:px-3 md:py-1 md:rounded-md  hover:border-b-stone-300  md:hover:border-r-stone-300 border-b  md:border-r border-stone-700 block  
            
            "
              >
                {item}
              </NavLink>{" "}
            </li>
          ))}
          <button
            onClick={handleClick}
            className="md:bg-red-700 font-semibold  px-3 py-1  rounded-lg border-2 md:border-red-700 hover:bg-stone-800 md:hover:text-red-500 transition-all hover:opacity-70"
          >
            CONTACT
          </button>
        </ul>
      </div>

      <p
        onClick={() => setToggleMenu((cur) => !cur)}
        className="absolute top-5 right-5 md:hidden"
      >
        {toggleMenu ? (
          <AiOutlineX role="button" className="text-2xl text-red-700" />
        ) : (
          <MdMenu role="button" className="text-2xl " />
        )}
      </p>

      {showContact && <Contact setShowContact={setShowContact} />}
    </nav>
  );
}

export default Nav;
