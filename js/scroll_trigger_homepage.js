// js/scroll_trigger_homepage.js
gsap.registerPlugin(ScrollTrigger);

// ---------- helpers ----------
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => gsap.utils.toArray(sel, root);
const mm = gsap.matchMedia();
const DEBUG = false; // set true to see markers

// Recalc after images load (prevents early triggers when images change layout)
window.addEventListener("load", () => ScrollTrigger.refresh());

// ---------- 1) Polished intro (no product items here) ----------
mm.add("(prefers-reduced-motion: no-preference)", () => {
  const wrapper = $("#main_wrapper_grid");
  if (!wrapper) return;

  gsap.set(wrapper, { opacity: 1 });

  const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" } });

  tl.from(["header", ".aside"], { y: -12, opacity: 0, stagger: 0.08 })
    .from(".top_banner_grid .wrapper h1", { y: 20, opacity: 0 }, "-=0.2")
    .from(".tire_mission_img_01", { y: 24, opacity: 0 }, "-=0.1"); // <-- removed item_frame here
});

// ---------- 1a) Top banner: subtle parallax + icon reveal ----------
mm.add("(prefers-reduced-motion: no-preference)", () => {
  const banner = $(".top_banner_grid");
  if (!banner) return;

  // gentle parallax over first half-viewport of scroll
  gsap.to(banner, {
    y: 20,
    ease: "none",
    scrollTrigger: {
      trigger: banner,
      start: "top top",
      end: "+=50%",
      scrub: 0.4,
      markers: DEBUG
    }
  });

  // reveal YouTube/TikTok icons right when they’re visible
  gsap.from(".top_banner_grid .social_grid a", {
    autoAlpha: 0,
    y: 10,
    duration: 0.45,
    stagger: 0.08,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".top_banner_grid .social_grid",
      start: "top 92%",   // wait until the user nearly sees them
      once: true,
      markers: DEBUG
    }
  });
});

// ---------- 2) Product grids: reveal WHEN visible ----------
function revealGrid(gridSel) {
  // avoid double-animating: skip elements that also have .items
  const items = $$(gridSel + " .item_frame:not(.items)");
  if (!items.length) return;

  gsap.from(items, {
    opacity: 0,
    y: 24,
    duration: 0.5,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: gridSel,
      start: "top 88%",   // nudge to 90–95% if you want it later
      once: true,
      // markers: DEBUG
    }
  });
}

// call for each section you have
revealGrid(".homepage_grid_01");
revealGrid(".homepage_grid_02");
revealGrid(".homepage_grid_03");
revealGrid("#tire_mission_grid");

// ---------- .items: grouped stagger reveal + hover ----------
(() => {
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Grids that contain your product cards
  const containerSelectors = [".sprouting_grid", ".solar_grid", ".music_grid", "#tire_mission_grid"];
  const containers = containerSelectors.map(sel => $(sel)).filter(Boolean);
  if (!containers.length) return;

  containers.forEach(container => {
    // guard so we don't bind twice
    if (container.dataset.gsapItemsGrouped) return;
    container.dataset.gsapItemsGrouped = "1";

    const group = $$(".items", container);
    if (!group.length) return;

    if (reduceMotion) {
      group.forEach(el => { el.style.opacity = 1; el.style.transform = "none"; });
      return;
    }

    // Section-level reveal with stagger when the section first scrolls in
    gsap.from(group, {
      autoAlpha: 0,
      y: 18,
      duration: 0.45,
      ease: "power2.out",
      stagger: { each: 0.06, from: "start" },  // try "edges" or "center" if you prefer
      scrollTrigger: {
        trigger: container,
        start: "top 90%",   // nudge to 92–95% for later
        once: true
        // markers: true
      }
    });

    // Hover / focus micro-pop
    group.forEach(el => {
      const hoverTl = gsap.to(el, {
        y: -4,
        scale: 1.02,
        boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
        duration: 0.18,
        paused: true,
        ease: "power2.out"
      });
      const enter = () => hoverTl.play();
      const leave = () => hoverTl.reverse();
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      el.addEventListener("focus", enter, true);
      el.addEventListener("blur", leave, true);
    });
  });

  // Optional: fallback for any stray .items not in those containers
  $$(".items").forEach(el => {
    if (containers.some(c => c.contains(el))) return; // already handled
    if (reduceMotion) { el.style.opacity = 1; el.style.transform = "none"; return; }
    gsap.from(el, {
      autoAlpha: 0, y: 18, duration: 0.45, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 93%", once: true }
    });
  });
})();


// ---------- #shop_grid: container-only reveal (no opacity; avoids double-fade) ----------
// ---------- Section containers: scrubbed settle-in with subtle 3D ----------
["#shop_grid", ".homepage_grid_01", ".homepage_grid_02", ".homepage_grid_03", "#tire_mission_grid"].forEach(sel => {
  const section = $(sel);
  if (!section || section.dataset.gsapContainerFX) return;
  section.dataset.gsapContainerFX = "1";

  // give transforms depth
  gsap.set(section, { transformPerspective: 900, transformStyle: "preserve-3d" });

  gsap.fromTo(
    section,
    { y: 36, scale: 0.975, rotateX: 3, skewY: 0.3 },
    {
      y: 0,
      scale: 1,
      rotateX: 0,
      skewY: 0,
      ease: "none",
      immediateRender: false,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end:   "top 45%",
        scrub: 0.55,
        markers: DEBUG
      }
    }
  );
});




// ---------- 3) Creative projects boxes ----------
$$("#creative_projects .box").forEach((el, i) => {
  gsap.from(el, {
    opacity: 0,
    y: 28,
    duration: 0.5,
    ease: "power2.out",
    delay: i * 0.03,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",  // later start so it triggers on-screen
      toggleActions: "play none none reverse",
      markers: DEBUG
    }
  });
});
