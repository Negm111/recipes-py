import React from 'react';

interface VideoPlayerProps {
    videoUrl: string;
    title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
    return (
        <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg aspect-video"
            ></iframe>
        </div>
    );
};

export default VideoPlayer;