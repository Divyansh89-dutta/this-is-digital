
var tl = gsap.timeline()
tl.from("#img1 ",{
    opacity:0,
    duration:0.4,
    y:-60
})
tl.from("#img2 ",{
    opacity:0,
    duration:0.4,
    x:60
})
tl.from("#img3 ",{
    opacity:0,
    duration:0.4,
    x:60
})
tl.from("#nav",{
    opacity:0,
    duration:0.4,
    x:-60
})

tl.from("#page1 h1",{
    opacity:0,
    duration:0.4,
    y:60,
})
gsap.from("#page2 h5, #page2 h1, #page2 #about-us",{
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#page3 #box1 #img4",{
    opacity:0,
    y:60,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#page3 #box1 #img5",{
    opacity:0,
    x:60,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top -10%",
    }
})
gsap.from("#page3 #box1 #img6",{
    opacity:0,
    y:-60,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#page3 #box1 #img7",{
    opacity:0,
    x:60,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#page3 #box2 h1, #text2 ",{
    opacity:0,
    stagger:0.4,
    y:60,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 40%",
    }
})
gsap.from("#page3 #box2 ",{
    opacity:0,
    stagger:0.4,
    y:60,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 20%",
    }
})
gsap.from("#page4",{
    opacity:0,
    stagger:0.4,
    y:60,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        markers:true,
        start:"top 70%",
    }
})
gsap.from("#page5 #logo1 img",{
    opacity:0,
    stagger:0.2,
    y:60,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#page6 #box1 , #box2",{
    opacity:0,
    stagger:0.8,
    y:60,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#page6 #text3 ",{
    opacity:0,
    stagger:0.8,
    y:60,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        markers:true,
        start:"top 10%",
    }
})
gsap.from("footer #img-text ",{
    opacity:0,
    stagger:0.8,
    y:60,
    scrollTrigger:{
        trigger:"footer",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
