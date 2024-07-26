const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${
            currentIndex * (cards[0].offsetWidth + 20)
        }px)`;
        updateButtons();
    }
}

function nextCard() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(-${
            currentIndex * (cards[0].offsetWidth + 20)
        }px)`;
        updateButtons();
    }
}

window.addEventListener("resize", () => {
    carousel.style.transform = `translateX(-${
        currentIndex * (cards[0].offsetWidth + 20)
    }px)`;
});
