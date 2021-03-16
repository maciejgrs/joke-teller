const btn = document.querySelector("#button");
const jokeUrlApi = `https://v2.jokeapi.dev/joke/Programming`;

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
console.log(`Single: ${response.joke} `);
} else {
console.log(`Twopart: ${response.setup} ${response.delivery} `);
}
};
