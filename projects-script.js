// ===== Projects page: filter tabs =====
const filterBtns = document.querySelectorAll(".filter");
const projItems = document.querySelectorAll(".proj-item");

if (filterBtns.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // highlight the active button
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const choice = btn.dataset.filter;

            // show or hide each project
            projItems.forEach(item => {
                const cats = (item.dataset.cat || "").split(" ");
                const match = choice === "all" || cats.includes(choice);
                item.classList.toggle("hide", !match);
            });
        });
    });
}


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