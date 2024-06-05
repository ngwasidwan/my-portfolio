import { AiOutlineX } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SiGithub, SiWhatsapp } from "react-icons/si";
function Contact({ setShowContact }) {
  return (
    <div className="flex flex-col  absolute  right-2 top-14 gap-8 bg-stone-900  text-stone-900 px-5 py-10 text-xl rounded-md shadow-sm shadow-stone-500 z-10 opacity-90">
      <AiOutlineX
        className="text-red-500 absolute right-10 top-5 cursor-pointer z-10 hover:opacity-50 "
        onClick={() => setShowContact(false)}
      />
      <div className="flex gap-2 items-center text-red-400">
        <IoLocation />
        <span>: Cameroon</span>
      </div>

      <div className="flex gap-2 items-center text-stone-100">
        <MdEmail />
        <span>: sidwanche@gmail.com</span>
      </div>

      <div className="flex gap-2 items-center text-green-500">
        <SiWhatsapp />
        <span> : +237 675 970 381</span>
      </div>

      <div className="flex gap-2 items-center text-stone-200">
        <SiGithub />
        <span>: github.com/ngwasidwan</span>
      </div>

      <div>
        <span className=" text-red-500">📞: +237 675 970 381</span>
      </div>
    </div>
  );
}

export default Contact;
