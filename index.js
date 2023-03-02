const { readdir, readFile } = require('fs');

/**
 * Part 4: Install an external dependency for making an HTTP requests.
 */
const axios = require('axios');

/**
 * Part 1: Write a function to determine whether a string is a palindrome.
 */
function isPalindrome(string) {
  let length = string.length;

  for(let i = 0; i < length / 2; i++) {
    if(string[i] !== string[length - 1 - i])
      return false;
  }

  return true;
}

console.log(isPalindrome("mom"));
console.log(isPalindrome("notmom"));

/**
 * Part 2: Write a function to list all files in a directory. Hint: https://nodejs.org/docs/latest-v17.x/api/
 */
function listFilesInDirectory(directoryPath) {
  return new Promise((resolve, reject) => {
    readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

listFilesInDirectory('./')
  .then((files) => console.log(files))
  .catch((error) => console.error(error));

/**
 * Part 3: Write a function to read the contents of a file asynchronously.
 */
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync('./samplefile.txt')
  .then((content) => console.log(content))
  .catch((error) => console.error(error));

/**
 * Part 4: Write a function that makes an HTTP request asynchronously and logs the status and response.
 */
axios.get('https://api.weather.gov/gridpoints/ILN/37,34/forecast/hourly')
  .then((response) => {
    let { temperature } = response.data.properties.periods[0]
    console.log(`The current temperature is ${temperature}`);
  })
  .catch((error) => console.error(error));