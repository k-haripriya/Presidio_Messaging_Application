import React, { useEffect, useState } from "react";
import "./styles.scss";
import { SiGooglechat } from "react-icons/si";
import InputField from "../Common/inputField/inputField";
import Button from "../Common/button/button";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../../redux/slices/userSlice";
import { setuser } from "../../redux/slices/setUserSlice";
import { useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUpComponent(props) {
  const { getLogin, setLogin } = props;
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const users = useSelector((state) => state.user);
  const initialState = {
    Email: "",
    Password: "",
    UserName:"",
  };
  const [getData, setData] = useState(initialState);
  let fields ;
  if(getLogin)
  {
    fields=["Email","Password"];
    
  }
  else{
    fields=["Email","Password","UserName"];
  }
  const handleTextInput = (field, newText) => {
    console.log({ ...getData, [field]: newText });
    setData({ ...getData, [field]: newText });
  };

  const handleSubmit = () => {
    console.log("Button Clicked",getData);
    dispatch(adduser(getData));
    setData(initialState);
    toast("SuccessFully Created Your Account");
    setLogin(true);
  };

  const handleLogin = () => {
    let userFound = false;
    users.forEach((user) => {
      console.log(user);
      if (user.email === getData.Email && user.pass === getData.Password) {
        dispatch(setuser(user.Id));
        setData(initialState);
        navigation('/home');
        userFound = true;
        

      }
      
    });
    if(!userFound)
      {
        toast("Please Check your Credentials");
      }
  };

  return (
    <div className="signup-box">
      <div className="header">
        <SiGooglechat size={24} />
        <h1>Welcome to ChatSphere!</h1>
      </div>
      <h3 className="slogan">Seamless Chat, Infinite Connections.</h3>

      <h3>
        {getLogin ? "Login to your Account" : "Create a Free Account Now"}
      </h3>

      <div className="box">
        {fields.map((item, index) => {
          return (
            <InputField
              key={index}
              placeholder={item}
              handleTextInput={handleTextInput}
              value={getData[item]}
            />
          );
        })}
        <Button
          onClick={getLogin ? handleLogin : handleSubmit}
          value={getLogin ? "Login" : "SignUp"}
        />
        <ToastContainer/>
      </div>
      <h4
      className="option"
        onClick={() => {
          setData(initialState);
          setLogin(!getLogin);
        }}
      >
        {getLogin
          ? "Dont have an Account? / SignUp"
          : "Already have an Account? /Login"}
      </h4>
      
    </div>
  );
}

export default SignUpComponent;
