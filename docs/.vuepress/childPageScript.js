// var fs = require("fs");
import fs from "fs";

export default function (path) {
  const parentPath = path.split("/").slice(2).join("/");
  var files = fs.readdirSync(path);
  var list = [];
  for (var i in files) {
    var filename = files[i]; //.split(".").slice(0, -1).join(".");
    if (filename.toLowerCase() !== "readme")
      list.push("/" + parentPath + "/" + filename);
  }
  console.log(`${path}: `, list);
  return list;
}
