require('./style.scss');
const events = require('./drag_n_drop');

function init() {
  const dropZone = document.querySelector('#dropZone');

  ['dragover', 'drop']
    .forEach((eventItem) => dropZone.addEventListener(eventItem, events[eventItem]));
}

document.addEventListener('DOMContentLoaded', init);
