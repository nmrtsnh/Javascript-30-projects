function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slideImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  slideImages.forEach((slideImage) => {
    // halfway through the image
    const slideInAt =
      window.scrollY + window.innerHeight - slideImage.height / 2;
    // console.log(slideInAt);
    // bottom of the image
    const bottomImage = slideImage.offsetTop + slideImage.height;
    // console.log(bottomImage);
    const isHalfShown = slideInAt > slideImage.offsetTop;
    // console.log(isHalfShown);
    const isNotScrolledPast = window.scrollY < bottomImage;
    if (isHalfShown && isNotScrolledPast) {
      slideImage.classList.add("active");
    } else {
      slideImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
