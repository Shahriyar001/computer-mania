import React from 'react';

const VideoSec = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/001/987/497/original/abstract-stripes-golden-lines-diagonal-overlap-on-black-background-luxury-stryle-free-vector.jpg)" }}>
            <div className='grid place-items-center w-full'>
                <iframe
                    className='w-9/15'
                    width="820"
                    height="410"
                    src="https://www.youtube.com/embed/9BjZGH9fcw0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoSec;