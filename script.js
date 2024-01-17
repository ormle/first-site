window.onload = function(){
  /*Accordion buttons 
  --Make it so only clicking on label makes it active?*/
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
}

