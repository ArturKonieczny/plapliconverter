module.exports = function dragover(eventSource) {
  eventSource.stopPropagation();
  eventSource.preventDefault();
  eventSource.dataTransfer.dropEffect = 'copy';
};
