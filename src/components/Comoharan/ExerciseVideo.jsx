import React from 'react';

const ExerciseVideo = ({ videoThumbnail, title, duration }) => {
  return (
    <div className="exercise-video">
      <img src={videoThumbnail} alt="Video Thumbnail" className="exercise-video-thumbnail" />
      <div className="exercise-video-info">
        <span className="exercise-video-title">{title}</span>
        <span className="exercise-video-duration">{duration}</span>
      </div>
    </div>
  );
};

export default ExerciseVideo;
