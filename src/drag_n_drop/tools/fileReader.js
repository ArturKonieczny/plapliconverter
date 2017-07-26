/**
 * Reads content of a file.
 * @param  {File} fileNode Raw file buffer.
 * @return {Promise}          On resolve - contents of file, on reject - errors.
 */
module.exports = function readFile(fileNode) {
  return new Promise((resolve, reject) => {
    const freader = new FileReader();

    freader.onload = function(fileData) {
      resolve(fileData.target.result);
    };
    freader.onerror = reject;
    freader.readAsText(fileNode, 'CP1250');
  });
};
