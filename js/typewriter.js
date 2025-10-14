gsap.registerPlugin(TextPlugin);


document.addEventListener("DOMContentLoaded", () => {
    const Tire_mission_text = document.querySelector(".tire_mission_text p"); // Single <p> tag


const Spice = document.getElementById("page_title")
const Solar = document.getElementById("page_title_solar")
const Sprout = document.getElementById("page_title_sprout")
const Music = document.getElementById("page_title_music")
const Sprouts_sec_title = document.getElementById("sprouts_section_title")
const Blog_title = document.getElementById("page_blog_title")
//const Tire_mission_text = document.getElementsByClassName("tire_mission_text")
const Tire_mission_text_01 = document.getElementsByClassName("tire_mission_text");
const mission_02 = document.getElementsByClassName("mission_02");

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
    duration: 3,
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
/*
gsap.to(Tire_mission_text_01, {
    duration: 8,
    text: {
        value: "So much trash is abandon in the woods that we decided to volunteer recycling tires from those places & spaces that we see on my vanlife adventures." + "Please check out one of the vlogs & watch em in Action!",
        oldClass: "start",
        newClass: "end",
    },
    stagger: 2, // Delay between each <p> animation (2 seconds)
    ease: "none"
}); */
gsap.to(mission_02, {
    duration: 8,
    text: {
        value: "Please check out one of the vlogs & watch em in Action!",
        oldClass: "start",
        newClass: "end",
    },
    stagger: 2, // Delay between each <p> animation (2 seconds)
    ease: "none"
});

    
// Combined text with <br> tags
const text = `
So much trash is abandon in the woods that we decided to volunteer recycling tires from those places & spaces that we see on my vanlife adventures.<br><br>
Check out one of the vlogs to get a visual feel!<br><br>
"MOOP" Matter Out Of Place
`;    
    
gsap.to(Tire_mission_text, {
    duration: 13, // Duration for the entire animation
    text: {
        value: text.trim(), // Use the combined text
        oldClass: "start",
        newClass: "end"
    },
    ease: "none"
});
});