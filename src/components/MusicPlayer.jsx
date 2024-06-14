import React, { useState, useEffect, useRef } from "react";
import Player from "./Player";
import Playlist from "./Playlist";
import "./MusicPlayer.css"; // Asegúrate de importar los estilos CSS si es necesario

const MusicPlayer = () => {
  const [playlist, setPlaylist] = useState([]);
  const playerRef = useRef(null); // Referencia al reproductor para controlarlo directamente

  // Cargar lista de reproducción guardada al iniciar
  useEffect(() => {
    loadPlaylist();
  }, []);

  // Función para cargar lista de reproducción desde localStorage
  const loadPlaylist = () => {
    const savedPlaylist = JSON.parse(localStorage.getItem("playlist"));
    if (savedPlaylist) {
      setPlaylist(savedPlaylist);
    }
  };

  // Guardar lista de reproducción actual en localStorage
  const savePlaylist = () => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
    alert("Lista de reproducción guardada");
  };

  // Añadir una canción a la lista de reproducción desde archivo local
  const addToPlaylistFromFile = (file) => {
    const song = {
      src: URL.createObjectURL(file),
      title: file.name,
    };
    setPlaylist([...playlist, song]);
  };

  // Eliminar una canción de la lista de reproducción y del reproductor
  const removeFromPlaylist = (index) => {
    const newPlaylist = [...playlist];
    newPlaylist.splice(index, 1);
    setPlaylist(newPlaylist);

    // Eliminar la canción del reproductor también
    if (playerRef.current) {
      playerRef.current.removeFromPlayer(index);
    }
  };

  return (
    <div className="music-player">
      <br></br>
      <h1 className="Titulito1">Reproductor de Música</h1>
      <br></br>
      <br></br>

      <Playlist
        playlist={playlist}
        addToPlaylistFromFile={addToPlaylistFromFile}
        removeFromPlaylist={removeFromPlaylist}
      />

      <div className="player">
        <button className="botones5" onClick={savePlaylist}>
          Guardar Lista de Reproducción
        </button>
        <button className="botones5" onClick={loadPlaylist}>
          Cargar Lista de Reproducción
        </button>
      </div>
      <Player ref={playerRef} playlist={playlist} />
    </div>
  );
};

export default MusicPlayer;
