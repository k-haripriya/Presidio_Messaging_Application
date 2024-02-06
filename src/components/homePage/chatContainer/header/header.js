import React from "react";
import "./styles.scss";
import { IoIosContact } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { useSelector } from "react-redux";

function Header(props) {
  const { data } = props;

  return (
    <div className="headerContainer">
      <div className="nameAndProfile">
        <IoIosContact color="gray" size={32} />
        <h3>{data?.name}</h3>
      </div>
      <div className="icons">
        <FaSearch size={22} color="gray" />
        <IoMdCall size={22} color="gray" />
        <CiVideoOn size={22} color="gray" />
      </div>
    </div>
  );
}

export default Header;
