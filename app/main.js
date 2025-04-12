import readline from "readline";

console.log("app is running");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("$ ", (answer) => {
  console.log("You said: ", answer);
  rl.close();
});
