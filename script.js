// Link amplificationfor smoother transitions
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            })
        }
    })
})
// Typing animation for hero section and introduction
const text = "Computer Engineering student at the University of Lagos, passionate about Web development, AI and building tech solutions"

function typingLoop(querySelector, text) {
    const element = document.querySelector(querySelector);

    let i = 0;
    let isDeleting = false;

    function loop() {
        if (!element) return;

        if (!isDeleting) {
            element.innerHTML = text.substring(0, i);
            i++;

            if (i > text.length) {
                isDeleting = true;
                setTimeout(loop, 1000);
                return;
            }
        }
        else {
            element.innerHTML = text.substring(0, i);
            i--;

            if (i === 0) {
                isDeleting = false;
            }
        }

        setTimeout(loop, isDeleting ? 70 : 90);
    }

    loop();
}

typingLoop(".bio", text)
typingLoop("#mainText", "I'm Heritage Oluwanifemi Barber")

// smoother nav buttons on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-btn");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
// Smooth appearance of elements on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden")
    observer.observe(section)
})


// Making the buttons push inside on click
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.9)"

        setTimeout(() => {
            btn.style.transform = "scale(1)"
        }, 150)
    })
})

// toggle navbar menu for phone screens

const menuBtn = document.getElementById("menu-btn")
const nav = document.querySelector(".header-nav")

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
    if (nav.classList.contains("active")) {
        menuBtn.textContent = "✕"
    }
    else {
        menuBtn.textContent = "☰"
    }
})

// Countdown in the stats section
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target
        const target = +el.dataset.target
        var count = 0
        const duration = 1200;                    // total time in ms for any counter
        const timer = setInterval(() => {
            count++;
            el.textContent = count + (el.dataset.suffix || "");
            if (count >= target) {
                clearInterval(timer);
            }
        }, duration / target);
    })
})

const counters = document.querySelectorAll(".counter")

counters.forEach(c => {
    counterObserver.observe(c)
})


// Random quotes functionalities
const quotes = [
    {
        quote: "Success isn't about greatness. It's about consistency. Consistent Hardwork leads to success.",
        writer: "Dwayne Johnson"
    },
    {
        quote: "Success is the sum of efforts repeated Day in day out.",
        writer: "Robert Collier"
    },
    {
        quote: "What we do repeatedly do. Excellence, then, is not an act, but a habit.",
        writer: "Aristotle"
    },
    {
        quote: "Without commitment, you will never start. Without consistency, you will never finish.",
        writer: "Denzel Washington"
    },
    {
        quote: "To be the best, you have to be different.",
        writer: "unknown"
    },
    {
        quote: "Motivation keeps you qoing, but discipline keeps you growing.",
        writer: "John C. Maxwell"
    },
    {
        quote: "Winners never quit, quitters never win.",
        writer: "Unknown"
    }
]


var quote = document.getElementById("quote")
var writer = document.getElementById("writer")

setInterval(() => {
    const randIndex = Math.floor(Math.random() * quotes.length)
    quote.textContent = `"${quotes[randIndex].quote},,`
    writer.textContent = quotes[randIndex].writer
}, 4500);

// Typing loop for about page

const texts = [
    "Web Developer",
    "AI/ML Enthusiast",
    "Frontend Engineer",
    "Problem Solver",
    "Computer Engineer"
];

let textIndex= 0
let charIndex= 0
let isDeleting= false

function typeCycle() {
    const element= document.getElementById("intro")
    const currentText= texts[textIndex]
    if (!isDeleting){
        element.textContent= currentText.substring(0, charIndex)
        charIndex++;

        if (charIndex> currentText.length){
            isDeleting= true;
            setTimeout(typeCycle,1000);
            return
        }
    }
    else{
        element.textContent= currentText.substring(0, charIndex)
        charIndex--;
        
        if(charIndex===0){
            isDeleting= false;
            textIndex= (textIndex+1)%texts.length
        }
    }
    setTimeout(typeCycle, isDeleting ? 50:80)
}
typeCycle()

document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.clientWidth) {
        console.log(el);
    }
});