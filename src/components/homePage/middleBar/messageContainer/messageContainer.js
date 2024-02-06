import React from "react";
import "./styles.scss";
import { IoIosContact } from "react-icons/io";

function MessageContainer(props) {

  const { name,des,onClick,Id,getSelectedData} = props;
  return (
    <div className={getSelectedData==Id ? "messageContainer ActiveCont":"messageContainer"} onClick={onClick}>
      <div className="profileAndName">
        <IoIosContact size={35} color="gray"/>
        <div>
          <p className="name">{name}</p>
          <p className="message">{des}</p>
        </div>
      </div>
      <p className="time">10:45 AM</p>
    </div>
  );
}

export default MessageContainer;
