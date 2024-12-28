gsap.registerPlugin(TextPlugin);

const Spice = document.getElementById("page_title")
const Solar = document.getElementById("page_title_solar")
const Sprout = document.getElementById("page_title_sprout")
const Music = document.getElementById("page_title_music")
const Sprouts_sec_title = document.getElementById("sprouts_section_title")
const Blog_title = document.getElementById("page_blog_title")

gsap.to(Spice, {
    duration: 3,
    text: {
        value: "Shop My Vlogs & Blogs",
        //delimiter: " ",
        oldClass:"start",
        newClass:"end",
    },
});
gsap.to(Solar, {
    duration: 2,
    text: {
        value: "🌞 Solar Gear 🌞",
        //delimiter: " ",
        oldClass:"start",
        newClass:"end",
    },
});
gsap.to(Sprout, {
    duration: 2,
    text: {
        value: "🌱 Sprouting Gear 🌱",
        //delimiter: " ",
        oldClass:"start",
        newClass:"end",
    },
});

gsap.to(Music, {
    duration: 2,
    text: {
        value: "🎵 Music Gear 🎵",
        //delimiter: " ",
        oldClass:"start",
        newClass:"end",
    },
});

gsap.to(Sprouts_sec_title, {
    duration: 3,
    text: {
        value: "Sprouting Products From Our Youtube",
        //delimiter: " ",
        oldClass:"start",
        newClass:"end",
    },
});

gsap.to(Blog_title, {
    duration: 3,
    text: {
        value: "Blog & Vlog Adventures!!",
        //delimiter: " ",
        oldClass:"start",
        newClass:"end",
    },
});