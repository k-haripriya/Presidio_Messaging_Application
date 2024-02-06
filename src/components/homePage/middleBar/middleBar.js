import React, { useEffect, useState } from "react";
import "./styles.scss";
import SearchBar from "../../Common/searchBar/searchBar";
import MessageContainer from "./messageContainer/messageContainer";
import { useSelector } from "react-redux";

function MiddleBar(props) {
  const {
    getActiveCategory,
    handleOpenModal,
    getSelectedData,
    setSelectedData,
  } = props;
  
  const [ getQuery, setQuery ] = useState("");
  const [ getSearchResults, setSearchResults ] = useState("");
  const channeldata = useSelector((state) => state.channels);
  const peopleData = useSelector((state) => state.people);

  const handleSelectedData = (id) => {
    setSelectedData(id);
    console.log("Successfully Set");
  };

  const handleSearch = () =>{
    if(getActiveCategory === "Channels")
    {
      const matchedChannels = channeldata.filter(channel => {
        return channel.name.toLowerCase().includes(getQuery.toLowerCase());
      });
      setSearchResults(matchedChannels);
    }
    else if(getActiveCategory === "People"){

    }
  }

  const handleQuery=(newText) =>{
    setQuery(newText);
  }

  return (
    <div className="middleBarContainer">
      <h3>
        {getActiveCategory === "Home" ? "Recent Chats" : getActiveCategory}
      </h3>
      <SearchBar handleQuery={handleQuery}/>
      {getActiveCategory === "Channels" && (
        <div className="newChannel" onClick={() => handleOpenModal()}>
          <p>Add a new Channel</p>
        </div>
      )}
      <div className="scrollContainer">
        {(getActiveCategory === "People"  || getActiveCategory==="Home")&&
          peopleData.map((item, index) => (
            <MessageContainer
              key={index}
              name={item.name}
              des={item.des}
              Id={item.Id}
              onClick={() => handleSelectedData(item.Id)}
              getSelectedData={getSelectedData}
            />
          ))}

        {(getActiveCategory === "Channels" )&&
          channeldata.map((item, index) => (
            <MessageContainer
              key={index}
              name={item.name}
              des={item.des}
              Id={item.Id}
              onClick={() => handleSelectedData(item.Id)}
              getSelectedData={getSelectedData}
            />
          ))}
      </div>
    </div>
  );
}

export default MiddleBar;
