import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import InputField from '../../Common/inputField/inputField';
import Button from '../../Common/button/button';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { addChannel } from '../../../redux/slices/channelsSlice';

function AddChannelModal(props) {
  const { getModal, handleOpenModal } = props;
  const dispatch = useDispatch();
  const fields = ["ChannelName","Description"];
  const initialState = {
    ChannelName:"",
    Description:""

  }
  

  const [ getData, setData ] = useState(initialState);


  const handleTextInput = (field, newText) => {
    console.log({ ...getData, [field]: newText });
    setData({ ...getData, [field]: newText });
  };

  const addChannelReq = () =>{
    dispatch(addChannel(getData));
    handleOpenModal();
  }
  return (
    <Modal open={getModal} onClose={handleOpenModal} center>
        <div className='modalContainer'>
    <h2> Add a new channel</h2>
    {
        fields.map((item,index)=>{
            return <InputField placeholder={`${item}`} handleTextInput={handleTextInput}/>
        })
    }

    <Button value={"Add Channel"} onClick={addChannelReq}/>
    </div>
  </Modal>
  )
}

export default AddChannelModal
