// Banner duration timer start time
var startTime;


// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  tl = gsap.timeline({ 
    // repeat: 1, 
    // repeatDelay: 1.5
   });

  animate();
  setRollover();
}

function animate() {
  tl.set(["#main"], { autoAlpha: 1, force3D: true });
  
  // Target the text elements
  const texts = document.querySelectorAll('.text');
  // Define the bounce animation for each text element
  
  texts.forEach((text, index) => {
    gsap.from(text, 0.5,{
        // duration: 1,
        y: -15, 
        ease: 'bounce.out',
        autoAlpha: 0,
        delay: index * 1.5, 
        onComplete: () => {
          gsap.to(text, 0.5, {
            // duration: 1,
            y: 0,
            ease: 'bounce.out',
            autoAlpha: 1
          });
        }
      }, "1");
    });
  tl.to(cta, 0.5, {autoAlpha:1, ease: "power2.inOut"},"3.8");
  tl.to(horse, {autoAlpha:0,},"4");
  tl.to(horse_gif, {autoAlpha:1,},"<");

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("bgExit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("bgExit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  TweenMax.to(["#cta span"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0, backgroundColor:"#014732", color:"#fff" });
  TweenMax.to(["#cta span svg"], 0.3, { fill:"#fff" },"<");
}

function default_out(event) {
  TweenMax.to(["#cta span"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0, backgroundColor:"#fff", color:"#000" });
  TweenMax.to(["#cta span svg"], 0.3, { fill:"#000" },"<");
}


