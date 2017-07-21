const fileReader = require('./tools/fileReader');
const mt103plareader = require('mt103plareader');
const createPliLine = require('./tools/createPliLine');
const fileSaver = require('file-saver');
const escDiacs = require('./tools/escapeDiacritics');

module.exports = function drop(eventSource) {
  eventSource.stopPropagation();
  eventSource.preventDefault();

  const [file] = eventSource.dataTransfer.files;

  fileReader(file).then((rawFileData) => {
    const pliFileContent = mt103plareader(rawFileData).reduce(createPliLine, '');
    const blob = new Blob([escDiacs(pliFileContent)]);

    fileSaver.saveAs(blob, file.name.replace('.pla', '.pli'));
  });
};
