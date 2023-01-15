var tl = gsap.timeline();
tl.from("nav #links a", {
  opacity: 0,
  y: -30,
  duration: 1,
  stagger: 0.2,
})
  .from("nav #icons i", {
    opacity: 0,
    x: 30,
    duration: 1,
    stagger: 0.25,
  })
  .from("#main1 #content h1", {
    opacity: 0,
    duration: 2,
  });
