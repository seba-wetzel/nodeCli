var fs = require("fs");

const date = () => console.log(new Date());

const ls = async (path = "./") => {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    console.log(dirent.name);
  }
};

const pwd = () => console.log(process.env.PWD);

const echo = (str) => {
  str = str.slice(1).join(" ");

  if (str.includes("$")) {
    let env = str.slice(1);
    process.stdout.write(process.env[env]);
    return;
  }
  console.log(str);
};

const cat = (filename, print = true) => {
  //console.log(filename);
  let file = fs.readFileSync(filename, "utf-8");
  if (print) process.stdout.write(file);
  return file;
};

const head = (filename) => {
  let file = cat(filename, false);
  file = file.split("\n").slice(0, 10).join("\n");
  process.stdout.write(file);
};

const tail = (filename) => {
  let file = cat(filename, false);
  file = file.split("\n").slice(-10).join("\n");
  process.stdout.write(file);
};

module.exports = {
  date,
  ls,
  pwd,
  echo,
  cat,
  head,
  tail,
};
