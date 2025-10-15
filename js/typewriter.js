// js/typewriter.js
gsap.registerPlugin(TextPlugin);

document.addEventListener("DOMContentLoaded", () => {
  // helpers
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => gsap.utils.toArray(sel, root);
  const mm = gsap.matchMedia();

  // tiny util to animate text only if the element exists
  const typeTo = (el, value, duration = 3) => {
    if (!el) return;
    gsap.to(el, {
      duration,
      text: {
        value,
        oldClass: "start",
        newClass: "end",
      },
      ease: "none"
    });
  };

  // ===== targets =====
  const Tire_mission_text = $(".tire_mission_text p");

  const idsToText = [
    ["#page_title",           "Shop My Vlogs & Blogs"],
    ["#page_title_solar",     "🌞 Solar Gear 🌞"],
    ["#page_title_sprout",    "🌱 Sprouting Gear 🌱"],
    ["#page_title_music",     "🎵 Music Gear 🎵"],
    ["#sprouts_section_title","Sprouting Products From Our Youtube"],
    ["#page_blog_title",      "Blog & Vlog Adventures!!"],
  ];

  // Respect reduced motion: only do the long typer when allowed
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // headline/id targets
    idsToText.forEach(([sel, txt]) => typeTo($(sel), txt, 2.0));

    // .mission_02 can match multiple nodes (convert to array!)
    $$(".mission_02").forEach((el, i) => {
      gsap.to(el, {
        duration: 8,
        text: {
          value: "Please check out one of the vlogs & watch em in Action!",
          oldClass: "start",
          newClass: "end",
        },
        delay: i * 0.25,   // soft stagger
        ease: "none"
      });
    });

    // combined long paragraph with <br> tags
    const longText = `
      So much trash is abandon in the woods that we decided to volunteer recycling tires from those places & spaces that we see on my vanlife adventures.<br><br>
      Check out one of the vlogs to get a visual feel!<br><br>
      "MOOP" Matter Out Of Place
    `.trim();

    // animate only if that <p> exists
    typeTo(Tire_mission_text, longText, 12.5);
  });

  // Fallback for reduced-motion users: set text instantly (no animation)
  mm.add("(prefers-reduced-motion: reduce)", () => {
    idsToText.forEach(([sel, txt]) => { const el = $(sel); if (el) el.innerText = txt; });
    if (Tire_mission_text) {
      Tire_mission_text.innerHTML = `
        So much trash is abandon in the woods that we decided to volunteer recycling tires from those places & spaces that we see on my vanlife adventures.<br><br>
        Check out one of the vlogs to get a visual feel!<br><br>
        "MOOP" Matter Out Of Place
      `.trim();
    }
    $$(".mission_02").forEach(el => { el.innerText = "Please check out one of the vlogs & watch em in Action!"; });
  });
});
