const fileReader = require('./tools/fileReader');

// placeholder
function doStuff(input) {
  console.log(input);
}

module.exports = function drop(eventSource) {
  eventSource.stopPropagation();
  eventSource.preventDefault();

  const [file] = eventSource.dataTransfer.files;

  fileReader(file).then(doStuff);
};
