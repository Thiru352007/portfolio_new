/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

const navItems =
    document.querySelectorAll(".nav-link");


/* Open / close mobile menu */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");


        if (navLinks.classList.contains("open")) {

            menuToggle.textContent = "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation"
            );

        } else {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    });

}



/* =====================================================
   CLOSE MENU AFTER CLICKING LINK
===================================================== */

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("open");

        }


        if (menuToggle) {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    });

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNav() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );


                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =====================================================
   SMOOTH SCROLL
===================================================== */

navItems.forEach((link) => {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                const header =
                    document.querySelector(".header");


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.offsetTop -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        }
    );

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Fields */

            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");


            /* Error messages */

            const nameError =
                document.getElementById("nameError");

            const emailError =
                document.getElementById("emailError");

            const messageError =
                document.getElementById("messageError");

            const formSuccess =
                document.getElementById("formSuccess");


            /* Clear previous messages */

            nameError.textContent = "";

            emailError.textContent = "";

            messageError.textContent = "";

            formSuccess.textContent = "";


            let valid = true;



            /* Name validation */

            if (
                name.value.trim().length < 2
            ) {

                nameError.textContent =
                    "Please enter your name.";

                valid = false;

            }



            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    email.value.trim()
                )
            ) {

                emailError.textContent =
                    "Please enter a valid email address.";

                valid = false;

            }



            /* Message validation */

            if (
                message.value.trim().length < 10
            ) {

                messageError.textContent =
                    "Message must contain at least 10 characters.";

                valid = false;

            }



            /* Success */

            if (valid) {

                formSuccess.textContent =
                    "Message validated successfully!";

                contactForm.reset();

            }

        }
    );

}



/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    (event) => {

        if (!navLinks || !menuToggle) {

            return;

        }


        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedToggle
        ) {

            navLinks.classList.remove(
                "open"
            );


            menuToggle.textContent =
                "☰";


            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    }
);



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            if (navLinks) {

                navLinks.classList.remove(
                    "open"
                );

            }


            if (menuToggle) {

                menuToggle.textContent =
                    "☰";


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        }

    }
);