var fs = require("fs");

module.exports = function (path) {
  const parentPath = path.split("/").slice(-1).join("/");
  console.log("parentPath: ", parentPath);
  console.log("path: ", path);
  var files = fs.readdirSync(path);
  console.log("files in path", files);
  var list = [];
  for (var i in files) {
    var filename = files[i].split(".").slice(0, -1).join(".");
    if (filename.toLowerCase() !== "readme")
      list.push(parentPath + "/" + filename);
  }
  console.log(`${path}: `, list);
  return list;
};
