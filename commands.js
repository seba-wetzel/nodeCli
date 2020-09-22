const fs = require("fs");
const path = require('path')
const request = require('request');

const date = (arg, done) => {
  let str = new Date();
  done(`${str}`);
};

const ls = async (dirfolder = "./", done) => {
  const dir = await fs.promises.opendir(dirfolder);
  for await (const dirent of dir) {
    done(dirent.name);
  }
};

const pwd = (arg, done) => done(process.env.PWD);

const echo = (str, done) => {
  str = str.slice(1).join(" ");
  if (str.includes("$")) {
    done(process.env[str.slice(1)]);
    return;
  }
  done(str)
};

const cat = (filename, done, print = true) => {
  let file = fs.readFileSync(filename, "utf-8");
  if (print) done(file);
  return file;
};

const head = (filename, done) => {
  let file = cat(filename, null, false).split("\n").slice(0, 10).join("\n");
  done(file);
};
const sort = (filename, done) => {
  let file = cat(filename, null, false).split("\n").sort().join("\n")
  done(file)
}

const tail = (filename, done) => {
  let file = cat(filename, null, false).split("\n").slice(-10).join("\n");
  done(file);
};

const wc = (filename, done) => {
  let file = cat(filename, null, false).split("\n").length
  done(`${file}`);
}

const uniq = (filename, done) => {
  let file = cat(filename, null, false).split("\n")
  let unico = [...new Set(file)].join("\n")
  done(`${unico}`);
}

const curl = (url, done) => {
  request(`http://${url}`, function (error, response, body) {
    if (error) console.log(error);
    done(`${body}`);
  });
}

const find = (filename, done) => {
  ls('./', (file) => {
    file = path.resolve('./', file);
    console.log(file)
  })
}

module.exports = {
  date,
  ls,
  pwd,
  echo,
  cat,
  head,
  tail,
  curl,
  sort,
  wc,
  uniq,
  find
};
