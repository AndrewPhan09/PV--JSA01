var index = 0;
changeImage = function() {
    var imgs = ["Image/Image1.jpg", "Image/Image2.png", "Image/Image3.jpg"];
    
    index = (index + 1) % imgs.length;
    
    document.getElementById('slide').src = imgs[index];
}
setInterval(changeImage,5000);

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sidenav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            const targetElement = document.getElementById(targetId);


            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  var quantityInputs = document.querySelectorAll('.input-number');

  quantityInputs.forEach(function (quantityInput) {
      quantityInput.addEventListener('input', function () {
          var currentValue = parseInt(quantityInput.value);
          if (currentValue > 100) {
              quantityInput.value = 100;
          }
      });
  });

  window.adjustQuantity = function (event, value) {
    var quantityInput = event.target.parentElement.querySelector('.input-number');
    var currentValue = parseInt(quantityInput.value);
    var newValue = currentValue + value;

    if (newValue < 0) {
        newValue = 0;
    } else if (newValue > 100) {
        newValue = 100;
    }

    quantityInput.value = newValue;
}
});