    // ===== Contact page: form validation + mailto =====
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    const status = document.getElementById("form-status");

    // helper to show/clear an error under a field
    const setErr = (name, msg) => {
        const span = contactForm.querySelector(`.err[data-for="${name}"]`);
        if (span) span.textContent = msg || "";
    };

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();   // stop the page from reloading

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let ok = true;
        setErr("name"); setErr("email"); setErr("message");

        if (!name) { setErr("name", "Please enter your name."); ok = false; }
        if (!emailPattern.test(email)) { setErr("email", "Enter a valid email."); ok = false; }
        if (message.length < 10) { setErr("message", "Tell me a bit more (10+ characters)."); ok = false; }

        if (!ok) {
            status.textContent = "";
            return;
        }

        // build the mailto link and open the user's email app
        status.textContent = "Opening your mail app...";
        const subject = encodeURIComponent(`Portfolio message from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href =
            `mailto:oluwanifemibarber@gmail.com?subject=${subject}&body=${body}`;

        contactForm.reset();
        setTimeout(() => { status.textContent = "Thanks! Your mail app should be open."; }, 900);
    });
}


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

