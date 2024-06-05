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
    <div className="bg-stone-900  h-svh text-xl text-gray-300">
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
          className="text-[3.5rem] fixed right-20 bottom-10 text-blue-200  z-10"
          role="button"
          title="email me"
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default AppLayout;
