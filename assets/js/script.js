AOS.init();

// ----- Countdown-datetime
const countdownElement = document.querySelector(".countdown-datetime");

if(countdownElement)
{
   function formatNumber(number)
   {
      return number < 10 ? "0" + number : number;
   }

   const daysElement = countdownElement.querySelector(".countdown-value[days]");
   const hoursElement = countdownElement.querySelector(".countdown-value[hours]");
   const minutesElement = countdownElement.querySelector(".countdown-value[minutes]");
   const secondsElement = countdownElement.querySelector(".countdown-value[seconds]");

   // --- Real data
   // const endValue = countdownElement.getAttribute("date-end");
   // const endDate = new Date(`${endValue}`);
   // --- End real data

   // --- Fake creating new data every day
   const now = new Date();
   const year = now.getFullYear();
   const month = now.getMonth() + 1;
   const day = now.getDate();
   const endDate = new Date(`${year}-${formatNumber(month)}-${formatNumber(day)}T23:59:59`);
   // --- End fake creating new data every day

   const counter = setInterval(() => {
      const currentTime = new Date();
      const distance = endDate - currentTime;

      const daysRemain = Math.floor( distance / (1000 * 60 * 60 * 24) );
      const hoursRemain = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
      const minutesRemain = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) );
      const secondsRemain = Math.floor( (distance % (1000 * 60)) / (1000) );

      if(daysElement) {
         daysElement.innerHTML = formatNumber(daysRemain);
      }

      if(hoursElement) {
         hoursElement.innerHTML = formatNumber(hoursRemain);
      }

      if(minutesElement) {
         minutesElement.innerHTML = formatNumber(minutesRemain);
      }

      if(secondsElement) {
         secondsElement.innerHTML = formatNumber(secondsRemain);
      }

      if(daysRemain == 0 && hoursRemain == 0 && minutesRemain == 0 && secondsRemain == 0) {
         clearInterval(counter);
         return;
      }
   }, 1000);
}
// ----- End countdown-datetime


// ----- Menu for mobile
const menuMobile = document.querySelector(".inner-menu-mobile");

if(menuMobile)
{
   const menuMobileIcon = menuMobile.querySelector(".inner-button");
   const backdrop = menuMobile.querySelector(".inner-backdrop");
   const menuSider = menuMobile.querySelector(".menu-sider");

   menuMobileIcon.addEventListener("click", () => 
      {
         menuMobileIcon.classList.toggle("open");
         backdrop.classList.toggle("open");
         menuSider.classList.toggle("open");
      }
   );

   backdrop.addEventListener("click", () => 
      {
         menuMobileIcon.classList.remove("open");
         backdrop.classList.remove("open");
         menuSider.classList.remove("open");
      }
   );
}
// ----- End menu for mobile


// ----- Switch theme slider
const switchThemeSlider = document.querySelector(".switch-theme .switch-slider");
const htmlTag = document.querySelector("html");

if(switchThemeSlider && htmlTag)
{
   const currentTheme = localStorage.getItem("theme");

   const switchButton = switchThemeSlider.querySelector(".switch-button");
   const themeIcon = switchButton.querySelector(".switch-button .inner-icon");
   
   // Whenenver reload page
   if(currentTheme == "dark") {
      htmlTag.classList.add(currentTheme);

      switchThemeSlider.classList.add("darking");
      switchButton.classList.add("darking");

      themeIcon.innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-7 h-7"><path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd"></path></svg>
      `;
   }
   else {
      switchButton.classList.add("lighting");
   }
   // End whenenver reload page

   
   switchThemeSlider.addEventListener("click", () => 
      {
         htmlTag.classList.toggle("dark");

         if(localStorage.getItem("theme") == "dark") {
            localStorage.setItem("theme", "");
            themeIcon.innerHTML = `
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"></path></svg>
            `;
         }
         else {
            localStorage.setItem("theme", "dark");
            themeIcon.innerHTML = `
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-7 h-7"><path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd"></path></svg>
            `;
         }
      }
   );
}
// ----- End switch theme


// ----- Tour promotion swiper
const tourPromotions = document.querySelector(".tour-promotions");

if(tourPromotions)
{
   const myButtonPrev = document.querySelector(".section-promotion .inner-right-group .inner-previous-button");
   const swiperButtonPrev = tourPromotions.querySelector(".swiper-button-prev");
   const myButtonNext = document.querySelector(".section-promotion .inner-right-group .inner-next-button");
   const swiperButtonNext = tourPromotions.querySelector(".swiper-button-next");

   myButtonPrev.addEventListener("click", () => {
      swiperButtonPrev.click();
   });

   myButtonNext.addEventListener("click", () => {
      swiperButtonNext.click();
   });

   const swiper = new Swiper(".tour-promotions", {
      slidesPerView: 1,
      spaceBetween: 0,
      rewind: true,
      autoplay: {
         delay: 1500,
         disableOnInteraction: false,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         // when window width is >= 576px
         576: {
            slidesPerView: 1,
            spaceBetween: 0
         },
         // when window width is >= 992px
         992: {
            slidesPerView: 2,
            spaceBetween: 20
         },
         // when window width is >= 1200px
         1200: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
      }
   });
}
// ----- End tour promotion swiper


// ----- Video modal
const sectionVideo = document.querySelector(".video-clip");

if(sectionVideo)
{
   const buttonPlayVideo = sectionVideo.querySelector(".inner-video .inner-content .inner-play");
   const videoModal = sectionVideo.querySelector(".inner-modal");
   const header = document.querySelector(".header");
   
   if(buttonPlayVideo && videoModal)
   {
      const backdrop = videoModal.querySelector(".inner-backdrop");
      const buttonCloseModal = videoModal.querySelector(".inner-button-close-modal");
      const videoWrapper = videoModal.querySelector(".video-wrapper");

      buttonPlayVideo.addEventListener("click", () => 
         {
            videoModal.classList.add("open");

            setTimeout(() => {
               backdrop.classList.add("open");
               buttonCloseModal.classList.add("on");
               header.classList.add("hidden");
               videoWrapper.classList.add("open");
            }, 10); // just need to delay a little bit after the modal changed to block
         }
      );

      backdrop.addEventListener("click", () => 
         {
            backdrop.classList.remove("open");
            buttonCloseModal.classList.remove("on");
            header.classList.remove("hidden");
            videoWrapper.classList.remove("open");

            setTimeout(() => {
               videoModal.classList.remove("open");
            }, 250); // this line should be the same as in css file
         }
      );

      buttonCloseModal.addEventListener("click", () => 
         {
            backdrop.classList.remove("open");
            buttonCloseModal.classList.remove("on");
            header.classList.remove("hidden");
            videoWrapper.classList.remove("open");
            
            setTimeout(() => {
               videoModal.classList.remove("open");
            }, 250); // this line should be the same as in css file
         }
      );
   }
}
// ----- End video modal