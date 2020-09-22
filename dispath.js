const commands = require("./commands.js");

const dispatch = (cmd, done) => {
  let [comand, arg] = [...cmd]
  switch (comand) {
    case "ls":
      commands.ls(arg, done);
      break;
    case "pwd":
      commands.pwd(arg, done);
      break;
    case "date":
      commands.date(arg, done);
      break;
    case "echo":
      commands.echo(cmd, done);
      break;
    case "cat":
      commands.cat(arg, done);
      break;
    case "head":
      commands.head(arg, done);
      break;
    case "tail":
      commands.tail(arg, done);
      break;
    case "sort": commands.sort(arg, done)
      break
    case "wc": commands.wc(arg, done)
      break
    case "uniq": commands.uniq(arg, done)
      break;
    case "curl": commands.curl(arg, done)
      break;
    case "find": commands.find();
      break;
    default: done("comando no encontrado")
  }
};

module.exports = {
  dispatch,
};
