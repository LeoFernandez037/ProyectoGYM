import React, { useState } from 'react';
import './Playlist.css'; // Asegúrate de que este archivo exista y esté importado

const Playlist = ({ playlist, addToPlaylistFromFile, removeFromPlaylist }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Función para manejar la selección de archivos locales
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      addToPlaylistFromFile(file);
      setSelectedFile(null); // Limpiar el archivo seleccionado después de agregarlo
    }
  };

  // Función para eliminar una canción de la lista de reproducción y del reproductor
  const handleRemove = (index) => {
    removeFromPlaylist(index);
  };

  return (
    <div className="playlist-container">
      <nav className="playlist-navigation">
        <h2>Lista de Archivos</h2>
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className="file-label">
          Añadir Canción desde Archivo
        </label>
      </nav>
      {selectedFile && <p>Archivo seleccionado: {selectedFile.name}</p>}
      <div className="playlist">
        <ul>
          {playlist.map((song, index) => (
            <li key={index}>
              <span className="song-title">{song.title}</span>
              <button onClick={() => handleRemove(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Playlist;
