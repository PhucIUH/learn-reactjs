import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Đóa Hồng Nhạc Việt",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/9/b/b/19bb4ac2a382dead0b7acf9e537286bb.jpg",
    },
    {
      id: 2,
      name: "Summer Hits",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/5/9/6/3596143bc42b957220b42d6954d0a346.jpg",
    },
    {
      id: 3,
      name: "EDM Now",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/6/4/0/8640bae04a0f3e79b236986ffa970e0e.jpg",
    },
    {
      id: 4,
      name: "K-Pop: The A-List",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/1/1/d/b11da648070bb6d9a3de836ab767ba5b.jpg",
    },
  ];

  return (
    <div>
      <h2>Lựa chọn hôm nay</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
