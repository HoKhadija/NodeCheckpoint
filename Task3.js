// Require the fs module
const fs = require("fs");

// Write the "Hello Node" string to a file named "welcome.txt"
fs.writeFile("welcome.txt", "Hello Node\n", (err) => {
    if (err) throw err;
    console.log("File created successfully!"); // Log a success message
});

// Read the contents of a file named "hello.txt"
fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data); // Log the contents of the file
});