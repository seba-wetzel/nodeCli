const { dispatch } = require("./dispath");
const done = result => {
  process.stdout.write(`${result}`)
  process.stdout.write("\nprompt > ");
}


if (process.argv.length > 2) {
  dispatch(process.argv.slice(2));
  process.stdout.write("\n");
  process.exit();
}

// Output un prompt
process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  var cmd = data.toString().trim().split(" "); // remueve la nueva línea
  //process.stdout.write("You typed: " + cmd[0] + "\r\n");
  dispatch(cmd, done);
});
