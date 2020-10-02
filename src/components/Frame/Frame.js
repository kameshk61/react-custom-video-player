import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styles from "./Frame.module.css";
import Playlist from "../Playlist/Playlist";

function Frame(props) {
  const [currentURL, setCurrentURL] = useState({
    songname: "",
    songurl: "",
  });

  const getCurrentURL = (name, url) => {
    console.log(url);
    setCurrentURL({
      songname: name,
      songurl: url,
    });
  };

  //console.log(currentURL.songname);

  return (
    <div>
      <div className={styles.frame}>
        <ReactPlayer
          url={currentURL.songurl}
          controls
          height="100%"
          width="100%"
        />
      </div>
      <div className={styles.playlist}>
        <Playlist getURL={getCurrentURL} />
      </div>
    </div>
  );
}

export default Frame;
