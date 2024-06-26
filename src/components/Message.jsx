import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import { AiOutlineSend } from "react-icons/ai";

const TIME_OUT = 1000;

const options = {
  duration: 2000,
  className: "bg-stone-200 text-stone-900",
};

function Message({ showMessageForm, setShowMessageForm }) {
  const form = useRef();
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  async function message() {
    try {
      await emailjs.sendForm(
        "service_rhjpsld",
        "template_bvzx32s",
        form.current,
        {
          publicKey: "Imax2V-IUZCenjQCm",
        }
      );

      toast.success("Email sent ", options);

      setTimeout(() => setShowMessageForm(false), TIME_OUT);
    } catch {
      toast.error(
        "Failed to send email. Check you internet connection",
        options
      );
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    message();
  };

  return (
    <div
      className={
        showMessageForm &&
        `bg-opacity-70 bg-stone-800 fixed z-100 w-full z-10 h-svh top-0 `
      }
    >
      <Toaster />
      <div className=" bg-stone-900  z-50 right-5 top-28 text-lg rounded-md  overflow-hidden fixed opacity-90 ">
        <p className=" text-center items-center text-stone-100 mt-4">
          Send Me An Email
        </p>

        <form
          className="px-8 py-4 text-stone-100"
          onSubmit={sendEmail}
          ref={form}
        >
          <div className="mb-6 ">
            <input
              ref={input}
              type="text"
              placeholder="Name"
              name="from_name"
              required
              className="bg-inherit  border-2 py-2 px-3 focus:outline-none w-full rounded-md focus:border-stone-100 border-stone-500 "
            />
          </div>

          <div className="mb-6">
            <input
              name="email"
              type="from_email"
              required
              placeholder="Email"
              className=" border-2 py-2 px-3 focus:outline-none w-full rounded-md focus:border-stone-100 border-stone-500 bg-inherit"
            />
          </div>

          <div className="mb-6">
            <textarea
              className=" border-2 w-full p-4 focus:outline-none focus:border-stone-100 border-stone-500 rounded-md resize-none  bg-inherit"
              placeholder="Message "
              required
              name="message"
            ></textarea>
          </div>

          <div className="flex items-center">
            <button className="flex items-center gap-2 text-stone-200  uppercase px-3 py-1 rounded-md mb-3 hover:bg-inherit hover:border-2 border-2 border-stone-700 hover:border-stone-100 hover:text-stone-100 transition-all font-semibold bg-stone-700">
              <span>Send</span>
              <AiOutlineSend />
            </button>

            <div
              className="flex items-center gap-2 px-2 py-0.5 rounded-md mb-3 ml-auto border-2 border-stone-200 cursor-pointer text-stone-200 hover:opacity-50 transition-opacity"
              onClick={() => setShowMessageForm(false)}
            >
              <span>EXIT</span>
            </div>
          </div>
        </form>
      </div>{" "}
    </div>
  );
}

export default Message;
