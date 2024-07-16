function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();






gsap.to("#page6>video",{
  scrollTrigger:{
   scroller:'#main',
   trigger:'#page6',
   start:"1% top" ,
   end:"bottom top",
  //  markers:true,
   pin:true
  },
   onStart:()=>{
      document.querySelector("#page6 video").play()
  }
})

function canvas1(){


    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data=`
 assets/canva-1st/1 (1).jpg
 assets/canva-1st/2 (1).jpg
 assets/canva-1st/3 (1).jpg
 assets/canva-1st/4 (1).jpg
 assets/canva-1st/5 (1).jpg
 assets/canva-1st/6 (1).jpg
 assets/canva-1st/7 (1).jpg
 assets/canva-1st/8 (1).jpg
 assets/canva-1st/9 (1).jpg
 assets/canva-1st/10 (1).jpg
 assets/canva-1st/11 (1).jpg
 assets/canva-1st/12 (1).jpg
 assets/canva-1st/13.jpg
 assets/canva-1st/14.jpg
 assets/canva-1st/15.jpg
 assets/canva-1st/16.jpg
 assets/canva-1st/17.jpg
 assets/canva-1st/18.jpg
 assets/canva-1st/19.jpg

  `;
  return data.split("\n")[index];
}

const frameCount = 19;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page11`,
    // markers:true,
    pin:true,
    //   set start end according to preference
    start: `top top`,
    end: `100% top`,
    scroller: `#main`,
    
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page11 canvas",
  // pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top 0`,
  end: `100% top`,

});

gsap.from("#page11 img",{
  opacity:0,
  ease:Power4
  
})
}

canvas1()

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 video",
        scroller:"#main",
        start:"top 0%",
        end:"+=100%",
        scrub:2,
        // ease:Power1.inOut,
        delay:2,
        duration:4,
        // markers:true,
        pin:true,
        stagger:5,
    }
    })
    
    tl.to("#page1 .bottom-part",{
        top:"-50%",
        
    })

    var tl2 = gsap.timeline({
      scrollTrigger:{
          trigger:"#device img",
          scroller:"#main",
          start:"top 0%",
          end:"+=360% ",
          scrub:2.3,
          ease:Power3,
          delay:2,
          duration:2,
          // markers:true,
          stagger:3,
          yoyo:true
      },
      })

    tl2.to("#device img",{
      rotate:19,
      transform: `rotate(19deg)`,

      stagger:.35
      
  })


  gsap.from("#page12>img",{
    scrollTrigger:{
  
     scroller:'#main',
     trigger:'#page12',
     start:"top top" ,
     end:"bottom 100%",
     // markers:true,
     pin:true,
     scrub:2
    },
    width:"125%",
    height:"130%",
    ease:Power1,
  })
  
  
  gsap.to("#page11 #vid-canva video",{
    scrollTrigger:{
  
     scroller:'#main',
     trigger:'#page11',
     start:"top bottom",
     start:"0.99% 0" ,
     end:"10% 50%",
     pin:true,
     scrub:2,
     },
    // duration:6,
    // delay:6,
    // width:'50%',
    // height:'100%',
    // left:"50%",
    // top:"50%",
    // transform:`translate(-50%,-50%)',
    // opacity:1,
    // gap:'-10vw', 
    // ease:Power2,
    });





gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");
// we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true, 
    pinSpacing:false 
  });
});

ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
          snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
      return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
    },
    duration: 0.5
  }
});
