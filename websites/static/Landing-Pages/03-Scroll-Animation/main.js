// First star
var svg1TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip1 .clip__inner",
    scrub: 2,
    pin: true,
    pinSpacing: false,
    invalidateOnRefresh: true
  }
});

svg1TL.fromTo("#svg1 video, #svg1 img", { y: "30%" }, { y: 0 }, 0);
svg1TL.to(
  "#svg__star",
  { morphSVG: { shape: "#svg__rec", origin: "50% 50%" }, ease: "none" },
  0
);
svg1TL.fromTo(
  "#svg1",
  {
    width: () => {
      if (window.innerWidth < 600) {
        return 70;
      } else {
        return 200;
      }
    }
  },
  {
    width: () => {
      if (window.innerWidth < window.innerHeight) {
        return "100vh";
      } else {
        return "100vw";
      }
    },
    ease: "none"
  },
  0
);

// Stars 2,3,4 could be in a function
// Second star
gsap.set("#svg2", { y: "100vh" });
gsap.to("#svg2", {
  y: 0,
  x: 0,
  scrollTrigger: {
    trigger: "body",
    scrub: true,
    start: () => window.innerHeight * 2 + " bottom",
    end: () => window.innerHeight * 3 + " bottom"
  },
  ease: "none"
});

var svg2TL = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: 2,
    start: () => window.innerHeight * 3 + " bottom",
    end: () => window.innerHeight * 4 + " bottom",
    invalidateOnRefresh: true
  }
});

svg2TL.fromTo("#svg2 video, #svg2 img", { y: "30%" }, { y: 0 }, 0);
svg2TL.to(
  "#svg__star2",
  { morphSVG: { shape: "#svg__rec2", origin: "50% 50%" } },
  0
);
svg2TL.fromTo(
  "#svg2",
  {
    width: () => {
      if (window.innerWidth < 600) {
        return 70;
      } else {
        return 200;
      }
    }
  },
  {
    width: () => {
      if (window.innerWidth < window.innerHeight) {
        return "100vh";
      } else {
        return "100vw";
      }
    },
    ease: "none"
  },
  0
);

// Third star
gsap.set("#svg3", { y: "100vh" });
gsap.to("#svg3", {
  y: 0,
  x: 0,
  scrollTrigger: {
    trigger: "body",
    scrub: true,
    start: () => window.innerHeight * 4 + " bottom",
    end: () => window.innerHeight * 5 + " bottom",
    invalidateOnRefresh: true
  },
  ease: "none"
});

var svg3TL = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: 2,
    start: () => window.innerHeight * 5 + " bottom",
    end: () => window.innerHeight * 6 + " bottom",
    invalidateOnRefresh: true
  }
});

svg3TL.fromTo("#svg3 video, #svg3 img", { y: "30%" }, { y: 0 }, 0);
svg3TL.to(
  "#svg__star3",
  { morphSVG: { shape: "#svg__rec3", origin: "50% 50%" } },
  0
);
svg3TL.fromTo(
  "#svg3",
  {
    width: () => {
      if (window.innerWidth < 600) {
        return 70;
      } else {
        return 200;
      }
    }
  },
  {
    width: () => {
      if (window.innerWidth < window.innerHeight) {
        return "100vh";
      } else {
        return "100vw";
      }
    },
    ease: "none"
  },
  0
);

// Fourth star
gsap.set("#svg4", { y: () => window.innerHeight });
gsap.to("#svg4", {
  y: 0,
  x: 0,
  scrollTrigger: {
    trigger: "body",
    scrub: true,
    start: () => window.innerHeight * 6 + " bottom",
    end: () => window.innerHeight * 7 + " bottom"
  },
  ease: "none"
});

var svg4TL = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    scrub: 2,
    start: () => window.innerHeight * 7 + " bottom",
    end: () => window.innerHeight * 8 + " bottom"
  }
});

svg4TL.fromTo("#svg4 video, #svg4 img", { y: "30%" }, { y: 0 }, 0);
svg4TL.to(
  "#svg__star4",
  { morphSVG: { shape: "#svg__rec4", origin: "50% 50%" } },
  0
);
svg4TL.fromTo(
  "#svg4",
  {
    width: () => {
      if (window.innerWidth < 600) {
        return 70;
      } else {
        return 200;
      }
    }
  },
  {
    width: () => {
      if (window.innerWidth < window.innerHeight) {
        return "100vh";
      } else {
        return "100vw";
      }
    },
    ease: "none"
  },
  0
);
