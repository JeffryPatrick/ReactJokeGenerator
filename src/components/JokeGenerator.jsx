import "./JokeGenerator.css";
import jokeimg from "../assets/jokeimg.jpeg"
import { useEffect, useState } from "react";

const JokeGenerator = () => {

    const [joke, setJoke] = useState("");

    useEffect(() => {
        fetchJoke();
    }, [])

    const fetchJoke = async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const json = await response.json();
        setJoke(json.value);
    }

    const newJoke = () => {
        fetchJoke();
    }

    return (
        <div className="container">
            <header className="head">
                <p className="title">Joke Generator</p>
            </header>
            <div className="img-div">
                <img src={jokeimg} alt="Joke Image" className="img-section" />
            </div>
            <div className="joke-section">
                <p className="joke-info">{joke}</p>
                <button className="joke-btn" onClick={newJoke}>Next Joke</button>
            </div>
        </div>
    );
}

export default JokeGenerator;