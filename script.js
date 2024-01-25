gsap.from(".nav>ul",{
    y:-50,
    duration:2,
    opacity:0,
    stagger:1,
})
gsap.from(".mid>.left",{
    x:-100,
    opacity:0,
    duration:2,
})
gsap.from(".mid>.right",{
    x:100,
    opacity:0,
    duration:2,
})
var mid= gsap.timeline({
    scrollTrigger:{
        trigger:`.page2`,
        start:`top 70%`,
        end:`top 0%`,
        // markers:true,
        scrub:.5
    }
})
mid.from(".page2>.lefti>.std",{
    Y:50,
    opacity:0,
    rotate:180,
})
mid.from(".page2>.righti",{
    Y:10,
    opacity:0,
})