function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
   let tabs = document.querySelectorAll(tabsSelector),
      tabsContent = document.querySelectorAll(tabsContentSelector),
      tabsParent = document.querySelector(tabsParentSelector);

   function hideTabContent() { //скрытие табов меню

      tabsContent.forEach(item => {
         //item.style.display = 'none';//испольхзование инлайн стилей(заменили на классы)
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove(activeClass);
      });
   }

   function showTabContent(i = 0) {// показ нужных табов
      //tabsContent[i].style.display = 'block';//испольхзование инлайн стилей(заменили на классы)
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add(activeClass);
   }

   hideTabContent();
   showTabContent(); //берем 0 элемент(стартовый и назначаем его)

   tabsParent.addEventListener('click', function (event) {
      const target = event.target;
      if (target && target.classList.contains(tabsSelector.slice(1))) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });
}

export default tabs;
