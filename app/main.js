import readline from "readline";

console.log("app is running");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Exit = () => {
  rl.close();
  process.exit(0);
};

const shell = () => {
  rl.question("$ ", (answer) => {
    console.log("You said: ", answer);
    if (answer === "exit 0" || answer === "exit") {
      Exit();
    }
    shell();
  });
};
shell();
