import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Message from "./Message";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

function AppLayout() {
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function handleClick() {
    setShowMessageForm(true);
    setShowContact(false);
  }
  return (
    <div className="   text-xl text-gray-300">
      <main className="w-11/12 mx-auto  ">
        <Nav showContact={showContact} setShowContact={setShowContact} />

        <Outlet />
      </main>
      {showMessageForm ? (
        <Message
          setShowMessageForm={setShowMessageForm}
          showMessageForm={showMessageForm}
        />
      ) : (
        <AiOutlineMessage
          className="text-[4rem] fixed right-8 md:bottom-10 text-stone-200 z-10 bottom-20 bg-stone-700 p-2 rounded-full"
          role="button"
          title="email me"
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default AppLayout;
