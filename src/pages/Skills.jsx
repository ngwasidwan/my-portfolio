import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
} from "react-icons/io";
import SkillItems from "./SkillItems";
import { IoLogoReact } from "react-icons/io5";
import {
  SiPython,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 mt-10 gap-5 ">
      <SkillItems>
        <IoLogoHtml5 className="text-3xl" />
        <p>HTML</p>
      </SkillItems>

      <SkillItems>
        <IoLogoCss3 className="text-3xl" />
        <p>CSS</p>
      </SkillItems>

      <SkillItems>
        <IoLogoJavascript className="text-3xl" />
        <p>Javascript</p>
      </SkillItems>

      <SkillItems>
        <IoLogoReact className="text-3xl" />
        <p>React</p>
      </SkillItems>
      <SkillItems>
        <SiRedux className="text-3xl" />
        <p>Redux / RTK</p>
      </SkillItems>

      <SkillItems>
        <SiReactquery className="text-3xl" />
        <p>React Query</p>
      </SkillItems>

      <SkillItems>
        <SiTailwindcss className="text-3xl" />
        <p>Tailwind CSS</p>
      </SkillItems>

      <SkillItems>
        <SiStyledcomponents className="text-3xl" />
        <p>Styled Components</p>
      </SkillItems>

      <SkillItems>
        <SiPython className="text-3xl" />
        <p>Python</p>
      </SkillItems>

      <SkillItems>
        <IoLogoGithub className="text-3xl" />
        <p>Git and Github</p>
      </SkillItems>
    </div>
  );
}

export default Skills;
