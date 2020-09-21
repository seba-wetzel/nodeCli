const commands = require("./commands.js");

const dispatch = (cmd) => {
  switch (cmd[0]) {
    case "ls":
      commands.ls();
      break;
    case "pwd":
      commands.pwd();
      break;
    case "date":
      commands.date();
      break;
    case "echo":
      commands.echo(cmd);
      break;
    case "cat":
      commands.cat(cmd[1]);
      cmd = [];
      break;
    case "head":
      commands.head(cmd[1]);
      break;
    case "tail":
      commands.tail(cmd[1]);
      break;
  }
};

module.exports = {
  dispatch,
};
