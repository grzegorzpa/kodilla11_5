$(function(){
    console.log('DOM loaded');
    var carouselList = $("#carousel ul");
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    carouselList.animate({'marginLeft':-400}, 500, (moveFirstSlide));
    setInterval(changeSlide, 3000);
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
});







/*

$(changeSlide(function) {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    $(moveFirstSlide(function){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        carouselList.css({marginLeft:0});
    })
});
*/
