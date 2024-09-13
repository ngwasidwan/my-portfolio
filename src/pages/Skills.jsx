import { IoLogoGithub, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import SkillItems from "./SkillItems";

function Skills() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 mt-10 gap-5  pb-5">
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
        <RiNextjsFill className="text-3xl" />
        <p>Next js</p>
      </SkillItems>

      <SkillItems>
        <IoLogoNodejs className="text-3xl" />
        <p>Node.js</p>
      </SkillItems>

      <SkillItems>
        <SiExpress className="text-3xl" />
        <p>Express</p>
      </SkillItems>

      <SkillItems>
        <SiMongodb className="text-3xl" />
        <p>MongoDB</p>
      </SkillItems>

      <SkillItems>
        <SiMongoose className="text-3xl" />
        <p>Mongoose</p>
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
        <IoLogoGithub className="text-3xl" />
        <p>Git and Github</p>
      </SkillItems>
    </div>
  );
}

export default Skills;
