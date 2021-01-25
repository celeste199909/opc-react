export default function dndIcon (e) {

  let env = e.target.parentNode.parentNode.id
  let droppables = document.querySelectorAll('.desktop-droppable');
  if (env === "desktop") {
    e.target.setAttribute("draggable", true)
  } else if (env === "status-bar") {
    e.target.setAttribute("draggable", false)
  }
  let AppIcon = e.target

  AppIcon.addEventListener('dragstart', dragStart);
  AppIcon.addEventListener('dragend', dragEnd);
  function dragStart () {
    // this.className += ' dragging';
    // setTimeout(() => {
    //   // this.className = 'invisible';
    // }, 0);
  }

  function dragEnd () {
    // this.className = 'draggable';
    for (const droppable of droppables) {
      droppable.removeEventListener('dragover', dragOver);
      droppable.removeEventListener('dragenter', dragEnter);
      droppable.removeEventListener('drop', dragDrop);
    }
  }

  // // 监听droppable的相关事件
  for (const droppable of droppables) {
    droppable.addEventListener('dragover', dragOver);
    droppable.addEventListener('dragenter', dragEnter);
    droppable.addEventListener('drop', dragDrop);
  }
  function dragOver (e) {
    e.preventDefault();
  }
  function dragEnter (e) {
    e.preventDefault();
  }
  function dragDrop (e) {
    this.append(AppIcon);
  }
}