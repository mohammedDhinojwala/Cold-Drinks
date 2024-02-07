let tl= gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl.to("#fantacan",{
    top:"93%",
    left:"-25%"
},'orange')

tl.to("#sliced-orange",{
    top:"162%",
    left:"23%"
},'orange');

tl.to("#oranges",{
    top:"165%",
    left:"75%",
    width:"39vh",
},'orange');

tl.to("#leaf1",{
    top:"110%",
    left:"73%",
    rotate:"120deg",
    width:"18vh",
    
},'orange');

tl.to("#leaf2",{
    top:"110%",
    left:"13%",
    rotate:"110deg",
    width:"30vh",
    zIndex:"5",
    
},'orange');

let tl2= gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"40% 95%",
    end:"50% 50%",
    scrub:5,
    // markers:true,
}});

tl2.from(".lemon1",{
    rotate:"190deg",
    right:"900px",
    top:"100px",
},'ca');

tl2.from("#sprite",{
    rotate:"90deg",
    right:"900px",
    top:"1000px",
    width:"10vh",
},'ca');

tl2.from(".lemon2",{
    rotate:"190deg",
    left:"80px",
    top:"110px",
},'ca');

tl2.from("#coke",{
    rotate:"-90deg",
    left:"80px",
    top:"100px",
},'ca');

tl2.to("#fantacan",{
    top:"186%",
    left:"0.8%",
},'ca');

tl2.to("#sliced-orange",{
    top:"205%",
    left:"42.7%",
},'ca');