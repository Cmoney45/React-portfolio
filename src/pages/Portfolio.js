// client.src.pages.Home.js

import React, { Component } from "react";
import "./css-temp/portfolio.css";

class Home extends Component {

    render() {
        return (
            <div
                // className="hidden-part"
                id="portfolioBody"
            >
                <a
                    className="project"
                    href="https://cmoney45.github.io/Word-Guess-Game/"
                >
                    <div>
                        <img className="propic" src="images/dcDefault.jpg" alt="word-Guess-Game"></img>
                    </div>
                    <div className="protitle">Superhero - Word Guess Game</div>
                </a>
                <a className="project" href="https://cmoney45.github.io/unit-4-game/">
                    <div>
                        <img className="propic" src="images/starwars.png" alt="star-wars-rpg"></img>
                    </div>
                    <div className="protitle">
                        Star Wars RPG
             </div>
                </a>
                <a className="project" href="https://cmoney45.github.io/TriviaGame/">
                    <div>
                        <img className="propic" src="images/trivia.jpg" alt="trivia-game"></img>
                    </div>
                    <div className="protitle">
                        Trivia Game
            </div>
                </a>
                <a className="project" href="https://cmoney45.github.io/GifTastic/">
                    <div>
                        <img className="propic" src="images/giphytastic.gif" alt="giftastic"></img>
                    </div>
                    <div className="protitle">
                        Giphytastic!
            </div>
                </a>
                <a className="project" href="https://cmoney45.github.io/Train-Scheduler/">
                    <div>
                        <img className="propic" src="images/trainScheduler.jpg" alt="trainScheduler"></img>
                    </div>
                    <div className="protitle">
                        Train Scheduler
            </div>
                </a>
                <a className="project" href="https://nicksedillos.github.io/project-1/">
                    <div>
                        <img className="propic" src="images/homeStorage.jpg" alt="Home Manager"></img>
                    </div>
                    <div className="protitle">
                        Home Manager
            </div>
                </a>
            </div>
        );
    }
}

export default Home;
