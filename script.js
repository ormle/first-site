window.onload = function () {
  /* Accordion buttons */
  const labels = document.querySelectorAll('.accordion .container .label');

  labels.forEach(function (label) {
    label.addEventListener('click', function () {
      // Toggle the 'active' class for the corresponding container
      const container = this.parentElement; // Assuming the container follows the label
      container.classList.toggle('active');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar a');

    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        //Prevent default anchor behavior
        event.preventDefault();
        //Remove active class from other link
        links.forEach(function (otherLink) {
          otherLink.classList.remove('active');
      });

      //Make clicked one active
      link.classList.add('active');

      //Scroll to content
      const targetId = link.getAttribute('href').split('#')[1];
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth'});
      }
    });
  });
});
};


