import React, { useEffect ,useState} from 'react'
import './styles.scss'
import MessageBubble from './messageBubble/messageBubble'
import { useSelector } from 'react-redux';
function Messages(props) {

  const { getSelectedData } = props;

  const channels = useSelector((state) => state.channels);
  const peoples = useSelector((state)=> state.people);
  let getMessages;

  const channel = channels.find((channel) => channel.Id === getSelectedData);
  const people = peoples.find((people) => people.Id === getSelectedData);

  
  if (channel) {
    getMessages=channel.messages;
  } else {
    getMessages=people.messages;
  }

  return (
    <div className='messagesContainer'>
      {
        getMessages?.map((item,index)=>{
          return <MessageBubble message={item.message} sender={item.sender} time={item.timestamp}></MessageBubble>
        })
      }
    </div>
  )
}

export default Messages
