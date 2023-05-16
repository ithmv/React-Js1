import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import { getComments } from "../data/api";

function Center() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const comments = await getComments();
      const commentNames = comments.map(comment => comment.name);
      setNames(commentNames);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }

  const MAX_TILES = 220; // Максимальное количество отображаемых компонентов Tile

  const visibleNames = names.slice(0, MAX_TILES); // Получаем только первые MAX_TILES имен

  return (
    <div className="center">
      {visibleNames.map((name, index) => (
        <Tile key={index} name={name} />
      ))}
    </div>
  );
}

export default Center;
