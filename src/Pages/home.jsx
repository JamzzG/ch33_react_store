import "./home.css";
import React, { useRef, useEffect } from "react";

function WelcomeSong() {
    // Declare a reference to the audio element
    const audioRef = useRef(null);

    // Use the useEffect hook to play the audio file when the component is first rendered
    useEffect(() => {
        // Check if the audio element has been rendered before trying to play the audio
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    return (
        <div>
            <audio
                ref={audioRef}
                src="/audio/The Good The Bad And The Ugly Main Theme - BGM.mp3"
                // Add onEnded event to loop the audio
                // onEnded={() => audioRef.current.play()
            />
        </div>
    );
}

function Home() {
    return (
        <div>
            <WelcomeSong />
            <div className="home">
                <div className="welcome">
                    Our online store brings the <span>Wild West</span> to your
                    front door!
                </div>
            </div>

            <div className="vulture-container">
                <img
                    src={"/images/vulture-drawing-18.png"}
                    className="vulture"
                    alt="vulture"
                />
            </div>
        </div>
    );
}

export default Home;
