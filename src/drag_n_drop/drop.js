const fileReader = require('./tools/fileReader');
const mt103plareader = require('mt103plareader');
const createPliLine = require('./tools/createPliLine');

module.exports = function drop(eventSource) {
  eventSource.stopPropagation();
  eventSource.preventDefault();

  const [file] = eventSource.dataTransfer.files;

  fileReader(file).then((rawFileData) => {
    const pliFileContent = mt103plareader(rawFileData).reduce(createPliLine, '');

    console.log(pliFileContent);
  });
};
