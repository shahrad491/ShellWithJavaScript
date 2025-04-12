import readline from "readline";

console.log("app is running");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const shell = () => {
  rl.question("$ ", (answer) => {
    console.log("You said: ", answer);
    shell();
  });
};
shell();
