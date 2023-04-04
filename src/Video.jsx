import React, { useState } from "react";

function Video() {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setListItems([...listItems, inputValue]);
    // Do something with the input value, e.g. submit a form
    console.log(inputValue);

    setInputValue("");
  };
  return (
    <div>
      <h4>Video Downloader</h4>
      <h1>Video Downloader</h1>
      <p>a safe and easy YouTube Downloader</p>
      {/* <p id="line2">paste link here</p> */}
      <input
        type="text"
        placeholder="paste link here"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}> DownLoad</button>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default Video;
