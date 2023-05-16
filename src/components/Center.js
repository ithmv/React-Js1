import React, { useEffect, useState, useRef } from "react";
import Tile from "./Tile";
import { getComments } from "../data/api";

function Center() {
  const [names, setNames] = useState([]);
  const centerRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (centerRef.current) {
      const tileWidth = 180; // ширина плитки с учетом margin
      const tileHeight = 130; // высота плитки с учетом margin
      const centerElement = centerRef.current;
      const centerWidth = centerElement.offsetWidth - 60; // ширина поля Center с учетом отступов
      const centerHeight = centerElement.offsetHeight - 60; // высота поля Center с учетом отступов
      const maxTilesHorizontally = Math.floor(centerWidth / tileWidth);
      const maxTilesVertically = Math.floor(centerHeight / tileHeight);
      const maxTiles = maxTilesHorizontally * maxTilesVertically;
      const MAX_TILES = maxTiles;
      setMaxTiles(MAX_TILES);
    }
  }, [centerRef]);

  async function fetchData() {
    try {
      const comments = await getComments();
      const commentNames = comments.map((comment) => comment.name);
      setNames(commentNames);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  }

  const [maxTiles, setMaxTiles] = useState(0);

  return (
    <div className="center" ref={centerRef}>
      {names.slice(0, maxTiles).map((name, index) => (
        <Tile key={index} name={name} />
      ))}
    </div>
  );
}

export default Center;
