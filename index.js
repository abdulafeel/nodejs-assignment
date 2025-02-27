const fs = require("fs").promises;

// promise to display a mesaage
const showMessage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, this is your promise message!");
    }, 1000);
  });
};

showMessage()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

//To Create a file using fs module and async/await.

const fileName = "message.txt";
const content = "This file was created using fs module and async/await.";
const createFile = async () => {
  try {
    await fs.writeFile(fileName, content);
    console.log("File created successfully.");
  } catch (error) {
    console.error("Error creating file:", error);
  }
};

createFile();
