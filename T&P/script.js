//split text into words
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
    loop: true
})

.add({
    targets: '.text span',
    translateY: [-600, 0],
    scale: [10, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})
.add({
    targets: '.text span',
    translateX: [0, -1000],
    scale: [1, 1],
    opacity:[1, 0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(100),
})
.add({
    targets: '.text span',
    translateX: [1000, 0],
    scale: [1, 1],
    opacity:[0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(100),
})
.add({
    targets: '.text span',
    translateX: [0, 0],
    scale: [1, 50],
    opacity:[1, 0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(100),
})



$(function(){
  $(".toggle").on("click", function(){
  if($(".menu").hasClass("active")){
  $(".menu").removeClass("active");
  $(this).find("a").html("<i class='bx bx-menu'></i>")
  }
   else{
  $(".menu").addClass("active");
  $(this).find("a").html("<i class='bx bx-window-close' ></i>")
   }
  });
  });


// onscroll
window.onscroll = () => {
    let headers = document.querySelectorAll('.menu');
    headers.forEach(header => {
        header.classList.toggle('sticky', window.scrollY > 100);
    });
};

    // <!-- scroll reveal -->
ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
  });

ScrollReveal().reveal('.home-content, .container, ', {origin: 'bottom'});
ScrollReveal().reveal('.heading, .contact-container, .middle', {origin: 'top'});
ScrollReveal().reveal('.contact-content, .text1', {origin: 'left'});
// ScrollReveal().reveal('.home-content h3, .home-content h1, .home-content p, .middle', {origin: 'right'});