gsap.registerPlugin(ScrollTrigger)

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        // markers: true
      }
    })
    .to(".image-container img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(".section.space-01", {
      scale: 1.1,
      transformOrigin: "center center",
      ease: "power1.inOut"
    }, "<")
    .to(".has-transition_text-reveal", {
      color: "white",
      ease: "power1.inOut"
    }, "<")


    document.querySelectorAll(".btn-menu").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btn.classList.toggle("active");
      });
    });
    
    const toggleMenu = document.getElementById("toggleNav");
    const menu = document.getElementById("nav");
    
    toggleMenu.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

})

function hearts() {
  $.each($(".particletext.hearts"), function(){
     var heartcount = ($(this).width()/50)*5;
     for(var i = 0; i <= heartcount; i++) {
        var size = ($.rnd(60,120)/10);
        $(this).append('<span class="particle" style="bottom:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
     }
  });
}

jQuery.rnd = function(m,n) {
     m = parseInt(m);
     n = parseInt(n);
     return Math.floor( Math.random() * (n - m + 1) ) + m;
}

hearts();

