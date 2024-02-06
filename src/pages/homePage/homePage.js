import React, { useState } from 'react'
import SideBar from '../../components/homePage/sideBar/sideBar'
import MiddleBar from '../../components/homePage/middleBar/middleBar'
import './styles.scss'
import ChatContainer from '../../components/homePage/chatContainer/chatContainer'
import { unstable_useViewTransitionState } from 'react-router-dom'
import AddChannelModal from '../../components/homePage/AddChannelModal/AddChannelModal'

function HomePage() {
  const [getActiveCategory, setActiveCategory]= useState('Channels');
  const [ getSelectedData, setSelectedData ] = useState("");
  const [ getModal, setModal ] = useState(false);
  const handleOpenModal = () =>{

    setModal(!getModal);

  }
  return (
    <div className='mainContainer'>
      <SideBar getActiveCategory={getActiveCategory} setActiveCategory={setActiveCategory}/>
      <MiddleBar getActiveCategory={getActiveCategory} handleOpenModal={handleOpenModal} getSelectedData={getSelectedData} setSelectedData={setSelectedData}/>
      <ChatContainer getActiveCategory={getActiveCategory} getSelectedData={getSelectedData}/>
      {
        <AddChannelModal getModal={getModal} handleOpenModal={handleOpenModal}/>
      }
      
    </div>
  )
}

export default HomePage
