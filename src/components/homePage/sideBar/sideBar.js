import React from 'react'
import { IoIosContact } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import './styles.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setuser } from '../../../redux/slices/setUserSlice';


function SideBar(props) {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { getActiveCategory, setActiveCategory } = props
  const fields = ['Home','Channels','People'];

  const handleCategory = (item) =>{
    setActiveCategory(item);
  }

  const handleLogOut = (item) =>{
      dispatch(setuser(""));
      navigation('/');
  }
  return (
    <div className='sideBarContainer'>
        <div className='fields'>
        <IoIosContact size={50} color='gray'/>
        <p>Welcome</p>
        </div>

        <div className='fields'>
            {
                fields.map((item,index)=>{
                    return(
                        <div key={index} className={getActiveCategory===item ? "activeCat":"inActiveCat"} onClick={()=>handleCategory(item)}>
                            <h3 className='itemName'>{item}</h3>
                        </div>
                        
                    )
                })
            }
        </div>
        <div className='logout' onClick={()=>handleLogOut()}>
        <BiLogOutCircle size={30} />
        <h4>Logout</h4>
        </div>

        
      
    </div>
  )
}

export default SideBar
