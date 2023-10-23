const fs = require("fs");

const data = "Ömer Can Söyü";

const filePath =
  "C:\\Users\\shinigami\\Masaüstü\\New folder (2)\\develhope-exercises\\6-nodejs\\Exercise-7for.txt";

fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error("ERROR:", err);
  } else {
    console.log("File has been written successfully.");
  }
});
