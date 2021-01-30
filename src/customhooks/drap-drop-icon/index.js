export default function useDragDropIcon (e) {

  let env = e.target.parentNode.parentNode.id
  // console.log(env);
  let droppables = document.querySelectorAll('.desktop-droppable');
  if (env === "desktop") {
    e.target.setAttribute("draggable", true)
  } else {
    e.target.setAttribute("draggable", false)
    return
  }
  let AppIcon = e.target

  AppIcon.addEventListener('dragstart', dragStart);
  AppIcon.addEventListener('dragend', dragEnd);
  function dragStart (e) {
    this.className += ' dragging';
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
    // 当 drappable 中没有内容时才添加
    if (!this.innerHTML) {
      this.append(AppIcon);
    }
  }
}