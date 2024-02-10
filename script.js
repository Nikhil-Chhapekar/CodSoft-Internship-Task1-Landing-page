var tl=gsap.timeline()

tl.from("#nav p ,#nav h4,#nav h3,#nav button", {
    y:-70,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2,
})
tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.2
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    rotate:360,
    duration:0.5,
    stagger:0.3
})
tl.from("h5",{
    scale:0,
    opacity:0,
    
})
tl.to("h5",{
    y:30,
    repeat:-1,
    duration:0.6,
    yoyo:true

})