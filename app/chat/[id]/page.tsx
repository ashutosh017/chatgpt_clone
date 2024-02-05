import Chat from "@/components/Chat";
import Chatinput from "@/components/Chatinput";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};
const ChatPage = ({params: {id}}:Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId = {id} />
      <Chatinput chatId = {id} />
    </div>
  );
};

export default ChatPage;
