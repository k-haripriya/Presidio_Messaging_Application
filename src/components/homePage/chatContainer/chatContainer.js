import React from "react";
import "./styles.scss";
import Header from "./header/header";
import SendMessage from "./sendMessage/sendMessage";
import Messages from "./messages/messages";
import { useSelector } from "react-redux";
import { Images } from "../../../assets";

function ChatContainer(props) {
  const { getActiveCategory, getSelectedData } = props;
  const channels = useSelector((state) => state.channels);
  const users = useSelector((state) => state.people);

  let data;
  if (getActiveCategory === "Channels") {
    data = channels?.find((channel) => channel.Id === getSelectedData);
  } else {
    data = users?.find((user) => user.Id === getSelectedData);
  }
  return (
    data ? (
      <div className="chatContainer">
        <Header data={data} />
        <SendMessage getSelectedData={getSelectedData}/>
        <Messages getSelectedData={getSelectedData}/>
      </div>
    ):(
      <div className="chatContainer">
        <img src={Images.notFound} className="notFound"/>
        <h2>Please select a chat to view messages</h2>
      </div>
    )
  )
}

export default ChatContainer;
