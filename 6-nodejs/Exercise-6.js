const figlet = require("figlet");

const text = "merhaba ben ömer can";

figlet(text, function (err, data) {
  if (err) {
    console.log("we have an error");
    console.dir(err);
    return;
  }
  console.log(data);
});
