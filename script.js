const panels = document.querySelectorAll('.panel')

function toggleOpen() {
    this.classList.toggle("open")
}

function toggleAcive(e) {
    if(e.propertyName.includes === 'flex') {
        this.classList.toggle('open-acive')
    }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))