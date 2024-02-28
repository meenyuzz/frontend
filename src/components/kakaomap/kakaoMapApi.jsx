import React, { useEffect, useState, useRef } from "react";
import MyComponent from "./location"; // location.jsx 파일의 경로에 따라 수정

function Kakao() {
  const mapRef = useRef(null);
  const [location, setLocation] = useState("");
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 useEffect 설정

  const initMap = () => {
    if (typeof location !== "string") {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: 2,
      };

      var map = new kakao.maps.Map(container, options);
      mapRef.current = map;
    }
  };

  useEffect(() => {
    kakao.maps.load(() => initMap());
  }, [mapRef, location]);

  return (
    <div
      id="map"
      style={{
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
}

export default Kakao;
