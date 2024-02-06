import React, { useState } from 'react'
import './styles.scss'
import { MdSend } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addMessageToChannel } from '../../../../redux/slices/channelsSlice';
import { addMessageToPeople } from '../../../../redux/slices/peopleSlice';

function SendMessage(props) {

  const { getSelectedData } = props;
  const [ message, setMessage ] = useState('');
  const user = useSelector((state)=>state.setuser);
  const dispatch = useDispatch();

  const channels = useSelector((state) => state.channels);
  const peoples = useSelector((state)=> state.people);

  const channel = channels.find((channel) => channel.Id === getSelectedData);
  const people = peoples.find((people) => people.Id === getSelectedData);

  const handleTextChange = (event)=>{
    const newText = event.target.value;
    setMessage(newText);
    console.log(newText);
  }

  const handleSubmit = () =>{
    if(channel)
    {
      dispatch(addMessageToChannel({
        channelId: getSelectedData,
        message: message,
        sender: user,
        timestamp: new Date(),
    }));

    }
    else{
      dispatch(addMessageToPeople({
        userId: getSelectedData,
        message: message,
        sender: user,
        timestamp: new Date(),
    }));
    }
    
  setMessage('');
  }
  return (
    <div className='sendMessageContainer'>
        <input placeholder='Type your Message' className='messageBox' onChange={handleTextChange} value={message}> 
        </input>
        <div className='sendIcon' onClick={()=>handleSubmit()}>
        <MdSend/>
        </div>
      
    </div>
  )
}

export default SendMessage
