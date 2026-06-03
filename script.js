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

let i = 0
let isDeleting = false
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
