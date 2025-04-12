import readline from "readline";

console.log("app is running");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

const Exit = () => {
  // this is exit and exit 0 cmd
  rl.close();
  process.exit(0);
};

const Echo = (input) => {
  // this is echo cmd
  return console.log(input.slice(5));
};

const cmdWord = (input, num) => {
  // this will return the word of the cmd based of num
  return input.split(" ")[num];
};

const startShell = () => {
  rl.prompt();

  rl.on("line", (cmd) => {
    if (cmd === "exit 0" || cmd === "exit") Exit();
    else if (cmdWord(cmd, 0) === "echo") {
      Echo(cmd);
      rl.prompt();
    } else {
      console.log(`${cmd}: command not found`);
      rl.prompt();
    }
  });
};
startShell();

// rl.question("$ ", (answer) => {
//     // console.log("You said: ", answer);
//     // console.log(cmdWord(answer, 0));
//     if (answer === "exit 0" || answer === "exit") {
//       Exit();
//     }
//     if (cmdWord(answer, 0) === "echo") Echo(answer);
//     shell();
//   });
