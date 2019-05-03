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