const cards = document.querySelectorAll('.card'); //these are todo items
const lists = document.querySelectorAll('.list'); // theses are category boxes

for (const card of cards) {
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
}

for (const list of lists) {
    list.addEventListener("dragover", dragOver)
    list.addEventListener('dragenter', dragEnter)
    list.addEventListener('dragleave', dragLeave)
    list.addEventListener('drop', dragDrop)

}

function dragStart(e) {
    // this allows the drop location to know which element is being moved when you realse it
    e.dataTransfer.setData('text/plain', this.id)
}
function dragEnd(e) {
    console.log("drag ended");

}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('over');
}
function dragLeave(e) {
    this.classList.remove('over');
}
function dragDrop(e) {
    const id = e.dataTransfer.getData('text/plain')
    const card = document.getElementById(id)
    this.appendChild(card)
    this.classList.remove('over');
}