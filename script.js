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

const observer= new IntersectionObserver(entries=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
})

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden")
    observer.observe(section)
})

document.querySelectorAll("button").forEach(btn =>{
    btn.addEventListener("click", ()=>{
        btn.style.transform= "scale(0.9)"

        setTimeout(()=>{
            btn.style.transform= "scale(1)"
        }, 150)
    })
})