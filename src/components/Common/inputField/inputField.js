import React from "react";
import "./styles.scss";

function InputField(props) {
  const { placeholder, handleTextInput, value} = props;
  const handleOnChange = (event) =>{
    const newText = event.target.value;
    handleTextInput(placeholder,newText); 
  }
  return (
    <div>
      <input
        className="input"
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default InputField;
