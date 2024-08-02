import { NavLink } from "react-router-dom";

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { BiX } from "react-icons/bi";

const navData = ["home", "skills", "projects"];

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex items-center pt-4 relative ">
      <div
        className={`overflow-hidden md:static absolute right-0 top-14 md:ml-auto   md:w-auto w-full bg-red ${
          toggleMenu && "z-20"
        }`}
      >
        <ul
          className={` ml-auto md:flex md:items-center md:gap-10 md:flex-row md:bg-inherit uppercase text-sm md:static flex flex-col gap-5  bg-stone-900 items-center opacity-90  md:translate-x-0 top-14 duration-[500ms] transition-all  
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
        </ul>
      </div>

      <p
        onClick={() => setToggleMenu((cur) => !cur)}
        className="absolute top-5 right-5 md:hidden"
      >
        {toggleMenu ? (
          <BiX role="button" className="text-3xl " />
        ) : (
          <MdMenu role="button" className="text-2xl " />
        )}
      </p>
    </nav>
  );
}

export default Nav;
