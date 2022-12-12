const carouselExampleControls = document.querySelector("#carouselExampleControls")

if(window.matchMedia("(min-width:576px)").matches) {
    const carousel = new bootstrap.Carousel(carouselExampleControls, {
        interval: false
      })

    //Width of the carousel
    var carouselWidth = $(".carousel-inner")[0].scrollWidth; 

    //Width of a single card 
    var cardWidth = $(".carousel-item").width();

    //Set scroll position
    var scrollPosition = 0;

    //Function for clicking on the next button
    $(".carousel-control-next").on("click", function() {
        if(scrollPosition < (carouselWidth - (cardWidth * 4))) {
            console.log("next");
            scrollPosition = scrollPosition + cardWidth;
            //600 stands for duration 600 milliseconds
            $(".carousel-inner").animate({scrollLeft: scrollPosition}, 600)
        }
    });

    $(".carousel-control-prev").on("click", function() {
        if(scrollPosition > 0) {
            console.log("prev");
            scrollPosition = scrollPosition - cardWidth;
            //600 stands for duration 600 milliseconds
            $(".carousel-inner").animate({scrollLeft: scrollPosition}, 600)
        }
    })
}
else {
    $(carouselExampleControls).addClass("slide");
}






/* //Width of the carousel
let carouselWidth = document.getElementsByClassName("carousel-inner").offsetWidth;; 

//Width of a single card 
let cardWidth = document.getElementsByClassName("carousel-item").clientWidth;;

let nextButton = document.getElementsByClassName("carousel-control-next");

//Set scroll position
let scrollPosition = 0;

//Function for clicking on the next button
nextButton.addEventListener("click", () => {
    console.log("next");
    scrollPosition = scrollPosition + cardWidth;
    //600 stands for duration 600 milliseconds
    $(".carousel-inner").animate({scrollLeft: scrollPosition}, 600)
}) */