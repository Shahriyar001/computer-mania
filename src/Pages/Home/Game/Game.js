import React from 'react';

const Game = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmCZ5fsJX2MsV8L00P_DoP_YEiFseVkEj-A&usqp=CAU")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Game Lovers</h1>
                    <p className="mb-5 text-xl">We are going to launch a game canter for game lovers. We will give discount to our old mambers. So enroll now for take your position</p>
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Game;