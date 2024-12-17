var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() 
}


resetTimeAnimation()


document.addEventListener('scroll', function() {
    const container = document.getElementById('product-container');
    const containerPosition = container.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (containerPosition < screenPosition) {
        container.classList.add('visible');
    }
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const icon = document.getElementById(`icon-${id}`);
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
    } else {
        answer.classList.add('hidden');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
    }
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('menu-button');
    const menuItems = document.querySelectorAll('.menu-item');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden', 'slide-out-left');
        menu.classList.add('slide-in-left');
        button.innerHTML = `
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('fade-in');
            }, index * 100);
        });
    } else {
        menu.classList.remove('slide-in-left');
        menu.classList.add('slide-out-left');
        button.innerHTML = `
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        `;
        setTimeout(() => {
            menu.classList.add('hidden');
            menuItems.forEach(item => {
                item.classList.remove('fade-in');
            });
        }, 500);
    }
}

function closeMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('menu-button');
    const menuItems = document.querySelectorAll('.menu-item');

    menu.classList.remove('slide-in-left');
    menu.classList.add('slide-out-left');
    button.innerHTML = `
        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    `;
    setTimeout(() => {
        menu.classList.add('hidden');
        menuItems.forEach(item => {
            item.classList.remove('fade-in');
        });
    }, 500);
}

function closeMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('menu-button');
    const menuItems = document.querySelectorAll('.menu-item');

    menu.classList.remove('slide-in-left');
    menu.classList.add('slide-out-left');
    button.innerHTML = `
        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    `;
    setTimeout(() => {
        menu.classList.add('hidden');
        menuItems.forEach(item => {
            item.classList.remove('fade-in');
        });
    }, 500);
}


    window.onscroll = function() {toggleScrollButton()};

    function toggleScrollButton() {
        var button = document.getElementById("scrollButton");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.classList.remove("hidden"); // Show the button
        } else {
            button.classList.add("hidden"); // Hide the button when at the top
        }
    }


    


    document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        fadeInElements.forEach(element => {
            const box = element.getBoundingClientRect();
            if (box.top < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});




document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.count');
    let countingStarted = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countingStarted) {
                countingStarted = true;
                counters.forEach(counter => {
                    countUp(counter);
                });
            }
        });
    });

    
    observer.observe(document.querySelector('.grid'));

    function countUp(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        let currentCount = 0;
        const increment = Math.ceil(target / 100); 
        const duration = 6000;
        const intervalTime = duration / (target / increment);

        const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
                currentCount = target;
                clearInterval(interval);
            }
            counter.innerText = currentCount + "+"; 
        }, intervalTime);
    }
});