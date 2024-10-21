const ratingState = document.querySelector("#rating-state");
const thankYouState = document.querySelector("#thank-you-state");

const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector('button[type="submit"]');
const rating = document.querySelector("#rating");

ratingButtons.forEach(ratingButton => {
    ratingButton.addEventListener('click', (e) => {
        e.preventDefault();
        rating.textContent = ratingButton.textContent;
    })
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
})