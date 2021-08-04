import React from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css

const VideoPlayer = () => {
    const sintel_trailer_url = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
    const test_url = "https://cdn.livepeer.com/hls/105dqxa9zszpduw5/index.m3u8";
    const some_youtube_url = "https://www.youtube.com/watch?v=7sDY4m8KNLc";

    return (
        <div>
            {/* React component for video player */}
            <Player
                playsInline
                poster="/assets/poster.png"
                src={some_youtube_url}
            />
        </div>
    );
}

export default VideoPlayer;
