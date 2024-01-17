window.onload = function () {
  /* Accordion buttons */
  const labels = document.querySelectorAll('.accordion .label');

  labels.forEach(function (label) {
    label.addEventListener('click', function () {
      // Toggle the 'active' class for the corresponding container
      const container = this.nextElementSibling; // Assuming the container follows the label
      container.classList.toggle('active');
    });
  });
};


