const ratingState = document.querySelector("#rating-state");
const thankYouState = document.querySelector("#thank-you-state");

const ratingInputs = document.querySelectorAll(".rating-input");
const submitButton = document.querySelector('button[type="submit"]');
const rate = document.querySelector("#rate");


submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    let isRated = false;
    ratingInputs.forEach(ratingInput => {
        if (ratingInput.checked) {
            rate.textContent = ratingInput.value;
            isRated = true;
        }
    })

    if (!isRated) {
        alert('Please select a rating before submitting.');
        return
    }
    
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
})