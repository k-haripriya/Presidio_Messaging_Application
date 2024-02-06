import React, { useState } from 'react'
import { Images } from '../../assets'
import './styles.scss';
import SignUpComponent from '../../components/signUp/signUpComponent';

function SignUp() {
  const [ getLogin, setLogin ] = useState(false);
  return (
    <div className='container'>
        <div className='component'>
            <SignUpComponent getLogin={getLogin} setLogin={setLogin}/>
            
        </div>
        <div>
            <img src={Images.chatImage} className='img'></img>
        </div>

    </div>
  )
}

export default SignUp
