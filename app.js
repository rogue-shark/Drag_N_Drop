const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart () {
    this.className += ' hold' //adding space to add it with the class="fill"

    //to make fill image invisible when we drag it 
    setTimeout(() => this.className = 'invisible', 0)  //timeout b/c hold happens first 
}

function dragEnd () {
    //when we stop dragging it refills the box
    this.className = 'fill'
}

function dragOver (e) {
    e.preventDefault()
}

function dragEnter (e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop () {
    this.className = 'empty'
    // this -> div with class of empty
    this.append(fill)
}