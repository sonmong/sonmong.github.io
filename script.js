$(document).ready(function() {
 
  // jQuery Slider
$(document).ready(function() {
    $('.slides').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });
    // FAQ Toggler function
    const faqItems = document.querySelectorAll('.faq');
      
    faqItems.forEach(item => {
      item.querySelector('h3').addEventListener('click', () => {
        const content = item.querySelector('p');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });
  
   // Example JavaScript function using an array and a loop
  function highlightServices() {
    const serviceTitles = document.querySelectorAll(".service h3");
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

    for (let i = 0; i < serviceTitles.length; i++) {
      serviceTitles[i].style.color = colors[i % colors.length];
    }
  }

  // Call the highlightServices function to apply colors to service titles
  highlightServices();

  // Example jQuery element - Add smooth scrolling to the navigation links
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate({ scrollTop: $(hash).offset().top }, 800, function() {
        window.location.hash = hash;
      });
    }
  });

  // Example jQuery element - Animate the FAQ section on mouseover
  $(".faq").on("mouseover", function() {
    $(this).animate({ marginLeft: "20px" }, 200);
  }).on("mouseleave", function() {
    $(this).animate({ marginLeft: "0" }, 200);
  });

});