import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getAllAnimalsByLetter(letter) {
  const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;

  return fetch(url, {
    headers: { "X-Api-Key": "S9EFtF26ey9GqqM8N4TujRaXNeEDn9qYWgrZ788C" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Found ${data.length} animals`);
      return data;
    });
}

rl.question("Enter first alphabet: ", function (textInput) {
  const letter = textInput.trim()[0].toLowerCase();

  getAllAnimalsByLetter(letter)
    .then((animals) => {
      console.log(animals.map((animal) => animal.name));
    })
    .catch((error) => {
      console.error("Something went wrong!", error);
    });
  rl.close();
});
