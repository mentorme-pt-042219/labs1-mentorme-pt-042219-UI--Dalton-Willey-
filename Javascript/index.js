
// const carousel = document.querySelector("[data-target='carousel']");
// const card = carousel.querySelector("[data-target='card']");
// const leftButton = document.querySelector("[data-action='slideLeft']");
// const rightButton = document.querySelector("[data-action='slideRight']");

// const carouselWidth = carousel.offsetWidth;
// const cardStyle = card.currentStyle || window.getComputedStyle(card)
// const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// let offset = 0;
// const maxX = -((cardCount / 3) * carouselWidth + 
//                (cardMarginRight * (cardCount / 3)) - 
//                carouselWidth - cardMarginRight);


// leftButton.addEventListener("click", function() {
//   if (offset !== 0) {
//     offset += carouselWidth + cardMarginRight;
//     carousel.style.transform = `translateX(${offset}px)`;
//     }
// })
  
// rightButton.addEventListener("click", function() {
//   if (offset !== maxX) {
//     offset -= carouselWidth + cardMarginRight;
//     carousel.style.transform = `translateX(${offset}px)`;
//   }
// })


//accordion 
 (function(){

  const accordion = document.querySelector('.accordion');
  const accordionTitles = document.querySelectorAll('.accordionTitle');

  // console.log(accordionTitles);
  [].forEach.call(accordionTitles, function(accordionTitle){
    accordionTitle.addEventListener('click', function() {
      const activeTitle = accordion.querySelector('.accordionTitle--active');
      const activeDescript = accordion.querySelector('.accordionDescription.accordionDescription--visible');
      const clickedDescription = accordionTitle.parentElement.querySelector('.accordionDescription');

      if(activeTitle){
        activeTitle.classList.remove('accordionTitle--active');
      }
      accordionTitle.classList.toggle('accordionTitle--active');

      if (activeDescript){
        activeDescript.classList.remove('accordionDescription--visible');
        activeDescript.style.maxHeight = null; 
      }
      
      clickedDescription.classList.toggle('accordionDescription--visible');
      clickedDescription.style.maxHeight = `${clickedDescription.scrollHeight}px`
    });
  });
})();
