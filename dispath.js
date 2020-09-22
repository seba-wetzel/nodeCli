const commands = require("./commands.js");

const dispatch = (cmd) => {
  let [comand, arg] = [...cmd]
  switch (comand) {
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
      commands.cat(arg);
      break;
    case "head":
      commands.head(arg);
      break;
    case "tail":
      commands.tail(arg);
      break;
    case "sort": commands.sort(arg)
      break
    case "wc": commands.wc(arg)
      break
    case "uniq": commands.uniq(arg)
  }
};

module.exports = {
  dispatch,
};
