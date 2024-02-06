import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function MessageBubble(props) {
  const { message, sender, time } = props;
  const loggedInUserId = useSelector((state) => state.setuser);
  const users = useSelector((state) => state.users);
  console.log("Users", users);

  // const findUserName = () => {
  //   const loggedInUser = users?.find((user) => user.Id === loggedInUserId);
  //   return loggedInUser.username;
  // };

  const utcDate = new Date(time);

  const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000);

  const hours = utcDate.getUTCHours();
  const minutes = utcDate.getUTCMinutes();
  const seconds = utcDate.getUTCSeconds();
  
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  return (
    <>
      <div
        className={
          loggedInUserId === sender ? "mesBubble sent" : "mesBubble received"
        }
      >
        <p>{message}</p>
        <p className="time">{formattedTime}</p>
      </div>
      
    </>
  );
}

export default MessageBubble;
