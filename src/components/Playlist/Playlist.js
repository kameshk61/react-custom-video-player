import React from "react";
import styles from "./Playlist.module.css";
import ReactPlayer from "react-player";

function Playlist(props) {
  const playlist = [
    {
      name: "Mai Koi Aisa Geet",
      url: "https://www.youtube.com/watch?v=kl4VNWXaST0",
    },
    {
      name: "Yahin Hoon Main",
      url: "https://www.youtube.com/watch?v=0cGj4prWlFk",
    },

    {
      name: "Mera Mann",
      url: "https://www.youtube.com/watch?v=8kxufj_snhI",
    },

    {
      name: "Ghar Se Nikalte Hi",
      url: "https://www.youtube.com/watch?v=f1qz8vn3XbY",
    },
    {
      name: "Nazm Nazm",
      url: "https://www.youtube.com/watch?v=DK_UsATwoxI",
    },
    {
      name: "Pehli Dafa",
      url: "https://www.youtube.com/watch?v=SxTYjptEzZs",
    },
    {
      name: "Mere Bina",
      url: "https://www.youtube.com/watch?v=XvUSsh3gdO4",
    },
    {
      name: "Baari",
      url: "https://www.youtube.com/watch?v=h18s7zlYOyg",
    },
    {
      name: "Sukoon Mila",
      url: "https://www.youtube.com/watch?v=rRx88tN2LYo",
    },
    {
      name: "Mere Bina",
      url: "https://www.youtube.com/watch?v=LMnJp_dSdnw",
    },
  ];

  return (
    <div className={styles.playlist}>
      {playlist.map((item) => (
        <div
          className={styles.item}
          key={item.url}
          onClick={() => props.getURL(item.name, item.url)}
        >
          <ReactPlayer
            playIcon
            light={true}
            url={item.url}
            height="60px"
            width="94px"
            playing={false}
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Playlist;
