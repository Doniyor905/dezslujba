const navBurger = document.querySelector(".nav__burger");
const navList = document.querySelector(".nav__list");
const counterInner = document.querySelector(".counter__inner");
const counterNumber = document.querySelectorAll(".counter__number");
const modalClose = document.querySelectorAll(".modal__close");


window.addEventListener("scroll", function scroll() {
    if (window.scrollY > counterInner.offsetTop - counterInner.clientHeight * 2) {
        for (let i = 0; i < counterNumber.length; i++) {
            const countNumber = counterNumber[i];
            let count = +countNumber.getAttribute("count");
            function rec(j = 0) {
                countNumber.innerHTML = j++
                if (countNumber.innerHTML < count) {
                    setTimeout(() => {
                        rec(j)
                    });
                }
            }
            rec()

        }
        window.removeEventListener("scroll", scroll)
    }
})



document.querySelectorAll(".accordion__title").forEach((el) => {
    el.addEventListener("click", () => {
        let content = el.nextElementSibling;
        if (content.style.maxHeight) {
            document.querySelectorAll(".accordion__content").forEach((el) => el.style.maxHeight = null);
        } else {
            document.querySelectorAll(".accordion__content").forEach((el) => el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
})


navBurger.addEventListener("click", function () {
    navBurger.classList.toggle("active");
    navList.classList.toggle("active");
})

var swiper = new Swiper(".mySwiper", {
    allowSlideNext: true,
    loop: true,
    autoplay: true,
});

const dezPopModal = document.querySelector(".dez-pop-modal"),
    dezinPopModal = document.querySelector(".dezin-pop-modal"),
    fumPopModal = document.querySelector(".fum-pop-modal"),
    deraPopModal = document.querySelector(".dera-pop-modal"),
    dezoPopModal = document.querySelector(".dezo-pop-modal");

const dezPop = document.querySelector(".dez-pop"),
    dezinPop = document.querySelector(".dezin-pop"),
    fumPop = document.querySelector(".fum-pop"),
    deraPop = document.querySelector(".dera-pop"),
    dezoPop = document.querySelector(".dezo-pop");
    
    
dezPop.addEventListener("click", function () {
    dezPopModal.classList.add("active");
    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener("click", function () {
            dezPopModal.classList.remove("active");
        })
    }

});

dezinPop.addEventListener("click", function () {
    dezinPopModal.classList.add("active");
    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener("click", function () {
            dezinPopModal.classList.remove("active");
        })
    }
});
fumPop.addEventListener("click", function () {
    fumPopModal.classList.add("active");
    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener("click", function () {
            fumPopModal.classList.remove("active");
        })
    }
});
deraPop.addEventListener("click", function () {
    deraPopModal.classList.add("active");
    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener("click", function () {
            deraPopModal.classList.remove("active");
        })
    }
});
dezoPop.addEventListener("click", function () {
    dezoPopModal.classList.add("active");
    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener("click", function () {
            dezoPopModal.classList.remove("active");
        })
    }
});


let azudkfg = document.querySelector