window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'), // instead of '.info-header-tab' you should write down YOUR tab class
        info = document.querySelector('.info-header'), // instead of '.info-header' you should write down YOUR tab class
        tabContent = document.querySelectorAll('.info-tabcontent'); // instead of '.info-tabcontent' you should write down YOUR tab class

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); // change visibility
            tabContent[i].classList.add('hide'); // change visibility
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide'); // change visibility
            tabContent[b].classList.add('show'); // change visibility
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { // instead of '.info-header-tab' you should write down YOUR tab class
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
});