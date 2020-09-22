var fs = require("fs");

const date = () => {
  let str = new Date();
  process.stdout.write(`${str}`);
};

const ls = async (path = "./") => {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    console.log(dirent.name);
  }
};

const pwd = () => process.stdout.write(process.env.PWD);

const echo = (str) => {
  str = str.slice(1).join(" ");
  if (str.includes("$")) {
    process.stdout.write(process.env[str.slice(1)]);
    return;
  }
  process.stdout.write(str)
};

const cat = (filename, print = true) => {
  let file = fs.readFileSync(filename, "utf-8");
  if (print) process.stdout.write(file);
  return file;
};

const head = (filename) => {
  let file = cat(filename, false).split("\n").slice(0, 10).join("\n");
  process.stdout.write(file);
};
const sort = (filename) => {
  let file = cat(filename, false).split("\n").sort().join("\n")
  process.stdout.write(file)
}

const tail = (filename) => {
  let file = cat(filename, false).split("\n").slice(-10).join("\n");
  process.stdout.write(file);
};

const wc = (filename) => {
  let file = cat(filename, false).split("\n").length
  process.stdout.write(`${file}`);
}

const uniq = (filename) => {
  let file = cat(filename, false).split("\n")
  let unico = [...new Set(file)].join("\n")
  process.stdout.write(`${unico}`);
}

module.exports = {
  date,
  ls,
  pwd,
  echo,
  cat,
  head,
  tail,
  //curl,
  sort,
  wc,
  uniq
};
