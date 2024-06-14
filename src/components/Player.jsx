import React, { useRef, useEffect, useState } from 'react';
import './Player.css';

const Player = ({ playlist }) => {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Efecto para cargar y reproducir la canción actual al cambiar de canción o de lista de reproducción
  useEffect(() => {
    if (playlist.length > 0) {
      audioRef.current.load(); // Cargar la canción al cambiar la fuente
      audioRef.current.play(); // Reproducir la canción automáticamente
    }
  }, [currentSongIndex, playlist]);

  // Manejar el evento al finalizar la reproducción de la canción actual
  const handleSongEnd = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  // Función para cambiar a la canción anterior
  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  // Función para cambiar a la siguiente canción
  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  return (
    <div className="player">
      <audio ref={audioRef} controls onEnded={handleSongEnd}>
        <source src={playlist[currentSongIndex]?.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="controls">
        <button className="botones5" onClick={handlePrev}>
          Anterior Canción
        </button>
        <button className="botones5" onClick={handleNext}>
          Siguiente Canción
        </button>
      </div>
    </div>
  );
};

export default Player;

        
