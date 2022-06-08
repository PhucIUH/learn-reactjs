import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Summer Hip",
      thumbnailUrl:
        "https://zingmp3.vn/album/Summer-Hip-tlinh-Binz-MCK-Gill/60FBUD88.html",
    },
    {
      id: 2,
      name: "Ballad Việt Ngày Nay",
      thumbnailUrl:
        "https://zingmp3.vn/album/Ballad-Viet-Ngay-Nay-Ha-Nhi-Thieu-Bao-Tram-Noo-Phuoc-Thinh-Trung-Quan-Idol/67WWC0AI.html",
    },
    {
      id: 3,
      name: "K-Pop DaeBak",
      thumbnailUrl:
        "https://zingmp3.vn/album/K-Pop-Daebak-aespa-NCT-Dream-TAEYEON-LISA/ZOCCU87Z.html",
    },
    {
      id: 4,
      name: "Giai Điệu V-Pop Tươi Vui",
      thumbnailUrl:
        "https://zingmp3.vn/album/Giai-Dieu-V-Pop-Tuoi-Vui-Hoang-Duyen-LyLy-AMEE-Lena/ZOED000C.html",
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
