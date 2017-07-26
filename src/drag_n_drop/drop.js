const fileReader = require('./tools/fileReader');
const mt103plareader = require('mt103plareader');
const createPliLine = require('./tools/createPliLine');
const fileSaver = require('file-saver');
const escDiacs = require('./tools/escapeDiacritics');

/**
 * Configure drop event. On PLA file drop creates and triggers PLI file download.
 * @param  {Object} eventSource Event source.
 * @return {unknown}             Nothing.
 */
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
