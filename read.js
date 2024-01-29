var fs = require("fs");
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erreur de lecture du fichier:", err);
    return;
  }
  console.log("Données lues depuis hello.txt:", data);
});