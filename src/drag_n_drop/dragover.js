/**
 * Dragoover event configuration.
 * @param  {Object} eventSource Event Source
 * @return {undefined}             Nothing.
 */
module.exports = function dragover(eventSource) {
  eventSource.stopPropagation();
  eventSource.preventDefault();
  eventSource.dataTransfer.dropEffect = 'copy';
};
