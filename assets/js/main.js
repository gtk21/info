/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLinks = document.querySelectorAll('.nav_link');

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar');
    });
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar');
    });
}

/*===== CLOSE SIDEBAR ON LINK CLICK =====*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    });
});


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills_activate')
        })

        target.classList.add('skills_activate')

        tabs.forEach(tab => {
            tab.classList.remove('skills_activate')
        })

        tab.classList.add('skills_activate')
    })
})


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container',{
    selectors:{
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
})

/*===== Link Active Work =====*/

const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=>l.addEventListener("click",activeWork))

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}



/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services_model'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_model-close'); // Corrected class name

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});


/*=============== SWIPER TESTIMONIAL ===============*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 300,
    centeredSlides: true,
    autoplay: {
        delay: 2900,
        disableOnInteraction: false, // Ensure autoplay continues even after user interaction
    },
    loop: true, // Enable continuous loop
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
});



/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if(this.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            // Add focus handler
            input.addEventListener("focus", focusFunc);
            
            // Add blur handler
            input.addEventListener("blur", blurFunc);
            
            // Check initial state (in case form is auto-filled)
            if (input.value !== "") {
                input.parentNode.classList.add("focus");
            }
        });


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    const scrollY = window.scrollY + 50; // Add offset for better highlighting

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute("id");

        const link = document.querySelector(`.nav_menu a[href*="${sectionId}"]`);

        // Special case for the home section
        if (sectionId === "home" && scrollY < sectionTop + sectionHeight) {
            link?.classList.add("active-link");
        }
        // General case for all other sections
        else if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            link?.classList.add("active-link");
        } else {
            link?.classList.remove("active-link");
        }
    });
}







/*=============== SHOW SCROLL UP ===============*/
