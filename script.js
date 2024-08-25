
var tl = gsap.timeline()
tl.from("#img1 ",{
    delay:0.4,
    opacity:0,
    duration:0.8,
    y:-60
})
tl.from("#img2 ",{
    delay:0.4,
    opacity:0,
    duration:0.8,
    x:60
})
tl.from("#img3 ",{
    delay:0.4,
    opacity:0,
    duration:0.8,
    x:60
})
tl.from("#nav",{
    delay:0.9,
    opacity:0,
    duration:0.8,
    x:-60
})

tl.from("#page1 h1",{
    delay:0.9,
    opacity:0,
    duration:0.8,
    y:60,
})
gsap.from("#page2 h5, #page2 h1, #page2 #about-us",{
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2 h5",
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
gsap.from("#page3 #box2 h1, #text2 h5",{
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
gsap.from("#page3 #text3 ",{
    opacity:0,
    stagger:0.4,
    y:60,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top -30%",
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
