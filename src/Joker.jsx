import { useState, useEffect } from "react";

function Joker() {
  let [joke, setJoke] = useState({});

  let URL = "https://official-joke-api.appspot.com/random_joke";

  let getNewJoke = async () => {
    let response = await fetch(URL);
    let joke = await response.json();
    console.log(joke);
    setJoke(joke);
  };

  function getJoke() {
    getNewJoke();
  }

  useEffect(() => {
    async function newJoke() {
      let response = await fetch(URL);
      let joke = await response.json();
      console.log(joke);
      setJoke(joke);
    }
    newJoke();
  },[]);

  return (
    <>
      <h2>Jokes!</h2>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={getJoke}>Get a New Joke</button>
    </>
  );
}

export default Joker;
