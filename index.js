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
