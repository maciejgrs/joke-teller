const btn = document.querySelector("#button");
const jokeUrlApi = `https://v2.jokeapi.dev/joke/Programming`;
const apiVoiceKey = `3be5d71254ef47758cc9943f8aa4b7f7`;
let joke;

const fetchTheJokes = async () => {
  try {
    const response = await fetch(jokeUrlApi).then((response) =>
      response.json()
    );

    displayJoke(response);
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", fetchTheJokes);

const displayJoke = (response) => {
  if (response.type === "single") {
    joke = `Single: ${response.joke} `;
    console.log(joke);
    playJoke();
  } else {
    joke = `Twopart: ${response.setup} ${response.delivery} `;
    console.log(joke);
    playJoke();
  }
};

const playJoke = () => {
  const audio = `http://api.voicerss.org/?key=${apiVoiceKey}&hl=en-us&c=MP3&f=16khz_16bit_stereo&src=${joke}`;
  const play = new Audio(audio);
  play.play();
};
 