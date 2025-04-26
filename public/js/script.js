(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let taxSwitch = document.getElementById("switchCheckReverse");
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    let taxIncluded = document.getElementsByClassName("tax-included");
    let pricesWithoutTax = document.getElementsByClassName("price-without-tax");
    let pricesWithTax = document.getElementsByClassName("price-with-tax");
    
    for(let i = 0; i < taxInfo.length; i++) {
      // Toggle between showing with and without tax
      if(taxSwitch.checked) {
        // Show prices with tax
        pricesWithoutTax[i].style.display = "none";
        pricesWithTax[i].style.display = "inline";
        taxInfo[i].style.display = "none";
        taxIncluded[i].style.display = "inline";
      } else {
        // Show prices without tax
        pricesWithoutTax[i].style.display = "inline";
        pricesWithTax[i].style.display = "none";
        taxInfo[i].style.display = "inline";
        taxIncluded[i].style.display = "none";
      }
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const filtersContainer = document.getElementById("filters-container");
  const filters = document.getElementById("filters");

  const filterWidth = document.querySelector(".filter").offsetWidth + 32;

  leftBtn.addEventListener("click", function () {
    filtersContainer.scrollLeft -= filterWidth;
  });

  rightBtn.addEventListener("click", function () {
    filtersContainer.scrollLeft += filterWidth;
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the elements
  const filtersContainer = document.getElementById('filters-container');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');
  
  // Define scroll amount (you can adjust this value)
  const scrollAmount = 150;
  
  // Add click event listeners to the buttons
  leftBtn.addEventListener('click', function() {
    // Scroll left with smooth animation
    filtersContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
  
  rightBtn.addEventListener('click', function() {
    // Scroll right with smooth animation
    filtersContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});

function confirmDelete(type) {
  if (type === 'listing') {
    return confirm('Are you sure you want to delete this listing? This action cannot be undone.');
  } else if (type === 'review') {
    return confirm('Are you sure you want to delete this review? This action cannot be undone.');
  }
  return false;
}

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}