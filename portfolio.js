const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const slider = document.getElementById('john');

nextButton.addEventListener("click", function(event) {
    slider.scrollLeft += 300;
});

prevButton.addEventListener("click", function(event) {
    slider.scrollLeft -= 300;
});