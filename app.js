const track = document.querySelector(".carousel__track")
const slides = Array.from(track.children)
const nextButton = document.querySelector(".carousel_right")
const prevButton = document.querySelector(".carousel_left")
const dotsNav = document.querySelector(".carousel__nav")
const dots = Array.from(dotsNav.children)
const slideWidth = slides[0].getBoundingClientRect().width
console.log(slideWidth)

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px"
}
slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")"
    currentSlide.classList.remove("current")
    targetSlide.classList.add("current")
}

const updateDot = (currentDot, targetDot) => {
        currentDot.classList.remove("current");
        targetDot.classList.add("current");
}

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current")
    const nextSlide = currentSlide.nextElementSibling
     const currentDot = dotsNav.querySelector(".current");
     const nextDot = currentDot.nextElementSibling
    moveToSlide(track,currentSlide,nextSlide)
     updateDot(currentDot, nextDot);
})

prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current")
    const prevSlide = currentSlide.previousElementSibling
         const currentDot = dotsNav.querySelector(".current");
         const prevDot = currentDot.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide)
    updateDot(currentDot, prevDot)
})

dotsNav.addEventListener('click', e => {
    // what indicator was clicked
    const targetDot = e.target.closest("button")
    if(!targetDot) return

    const currentSlide = track.querySelector('.current')
    const currentDot = dotsNav.querySelector('.current')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    // console.log(dots)
    const targetSlide = slides[targetIndex]
    moveToSlide(track, currentSlide, targetSlide);
    updateDot(currentDot, targetDot)

})