window.onload = function(){
  /*Accordion buttons */
const accordion = document.getElementsByClassName('label');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
}

