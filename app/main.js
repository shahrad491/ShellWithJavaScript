import readline from "readline";

console.log("shell is running");

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

const type = (input) => {
  // this will return the type if its is built in function
  const builtIn = ["exit", "echo", "type"];
  if (!cmdWord(input, 1)) {
    return;
  }
  if (builtIn.includes(cmdWord(input, 1))) {
    return true;
  } else {
    return false;
  }
};

const misingPra = () => {
  return "missing Parameter";
};

const startShell = () => {
  rl.prompt();

  rl.on("line", (cmd) => {
    cmd = cmd.trimStart();
    if (cmd === "exit 0" || cmd === "exit") Exit();
    else if (cmdWord(cmd, 0) === "echo") {
      Echo(cmd);
      rl.prompt();
    } else if (cmdWord(cmd, 0) === "type") {
      const res = type(cmd);
      if (!res && res !== false) {
        console.log(misingPra());
      } else {
        console.log(
          `${cmdWord(cmd, 1)}${res ? " is a shell builtin" : ": not found"}`
        );
      }
      rl.prompt();
    } else {
      console.log(`${cmd}: command not found`);
      rl.prompt();
    }
  });
};
startShell();
