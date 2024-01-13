const test_button = document.querySelector(".cs-toggle");
test_button.addEventListener('click', function() {

    const isNavOpen = navbarMenu.classList.contains("open");
    if (!isNavOpen) {
        test_button.setAttribute("aria-expanded", true);
        test_button.classList.add("clicked");
        navbarMenu.classList.add("open");

        const navbar_links = document.querySelectorAll('.navbar-link');

        navbar_links.forEach((item) => {

          item.addEventListener('click', ()=>{
            navbarMenu.classList.remove("open");
            test_button.classList.remove("clicked");

          })

          if ( screen.width <= 1024 ){

            const currentPage = location.href;
            const linkPage = item.href;

            if (currentPage.includes("/services/")){

              if ( linkPage.includes("/services/")){
                item.style.color = 'var(--decoration)';
                item.style.transform = 'scale(1, 1)';
              }
            }
            else if (currentPage.includes("/about/")){

              if ( linkPage.includes("/about/")){
                item.style.color = 'var(--decoration)';
                item.style.transform = 'scale(1, 1)';
              }
            }
            else if (currentPage.includes("/contact/")){

              if ( linkPage.includes("/contact/")){
                item.style.color = 'var(--decoration)';
                item.style.transform = 'scale(1, 1)';
              }
            }
            else{

              if ( !linkPage.includes("/services/") && !linkPage.includes("/about/") && !linkPage.includes("/contact/")){
                item.style.color = 'var(--decoration)';
                item.style.transform = 'scale(1, 1)';
              }

            }

          }


        })

    } else {

        test_button.setAttribute("aria-expanded", false);
        test_button.classList.remove("clicked");
        navbarMenu.classList.remove("open");
    }
});

const logo = document.querySelector(".logo");

function loadPageLinks(){

  const navbar_links = document.querySelectorAll('.navbar-link');

        navbar_links.forEach((item) => {

          item.addEventListener('click', ()=>{
            navbarMenu.classList.remove("open");
            test_button.classList.remove("clicked");

          })

          if ( screen.width >= 1024 ){

            const currentPage = location.href;
            const linkPage = item.href;

            if (currentPage.includes("/services/")){

              if ( linkPage.includes("/services/")){
                item.style.color = 'var(--decoration)';
                item.style.transform = 'scale(1.5, 1.5)';
              }
            }
            else if (currentPage.includes("/about/")){

              if ( linkPage.includes("/about/")){
                item.style.color = 'var(--decoration)';
                item.style.transform = 'scale(1.5, 1.5)';
              }
            }
            else if (currentPage.includes("/contact/")){

              if ( linkPage.includes("/contact/")){
                item.style.color = 'var(--decoration)';
                item.style.transform = 'scale(1.5, 1.5)';
              }
            }
            else{

              if ( !linkPage.includes("/services/") && !linkPage.includes("/about/") && !linkPage.includes("/contact/")){
                item.style.color = 'var(--decoration)';
                item.style.transform = 'scale(1.5, 1.5)';
              }

            }

          }


        })

}

loadPageLinks();



//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
// const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

// hamburgerMenu.addEventListener('click', function() {
//     const isNavOpen = navbarMenu.classList.contains("open");
//     if (!isNavOpen) {
//         hamburgerMenu.setAttribute("aria-expanded", true);
//         hamburgerMenu.classList.add("clicked");
//         navbarMenu.classList.add("open");
//     } else {
//         hamburgerMenu.setAttribute("aria-expanded", false);
//         hamburgerMenu.classList.remove("clicked");
//         navbarMenu.classList.remove("open");
//     }
// });


var prevScrollpos = window.pageYOffset;


window.onscroll = function() {
  const isNavOpen = navbarMenu.classList.contains("open");

  if (screen.width <= 1024){
    var currentScrollPos = window.pageYOffset;
    var narbarContainer = document.querySelector('.container');
    var containerBackground = document.querySelector('.background-color-div');

    if (prevScrollpos > currentScrollPos) {
        narbarContainer.style.top= '1px';
        containerBackground.style.height= '65px';
        containerBackground.style.transition = 'all 0.3s';


    } else {

        if (prevScrollpos > 0 && !isNavOpen){

            narbarContainer.style.top= '-58px';
            containerBackground.style.height= '0px';
        }

    }
    prevScrollpos = currentScrollPos;
  }
}



function loadAnimations(){

  const currentPage = location.href


  if (currentPage.includes('about')){

    // Create the observer
    const observer = new IntersectionObserver(entries => {
      // We will fill in the callback later...

      entries.forEach(entry => {

        if (entry.isIntersecting){

          entry.target.classList.add('aboutd-list-item-animation');
        }

      })
    });

    const as_card_observer = new IntersectionObserver(entries => {
      // We will fill in the callback later...

      entries.forEach(entry => {

        if (entry.isIntersecting){

          entry.target.classList.add('as-card-animation');
          return;
        }

      })
    });

    // // Tell the observer which elements to track
    observer.observe(document.querySelector('.ali-1'));
    observer.observe(document.querySelector('.ali-2'));
    observer.observe(document.querySelector('.ali-3'));
    observer.observe(document.querySelector('.ali-4'));
    observer.observe(document.querySelector('.ali-5'));
    observer.observe(document.querySelector('.ali-6'));

    as_card_observer.observe(document.querySelector('.as-card-1'));
    as_card_observer.observe(document.querySelector('.as-card-2'));
    as_card_observer.observe(document.querySelector('.as-card-3'));
    as_card_observer.observe(document.querySelector('.as-card-4'));


  }

  else if (currentPage.includes('services')){

    // Create the observer
    const observer = new IntersectionObserver(entries => {
      // We will fill in the callback later...

      entries.forEach(entry => {

        if (entry.isIntersecting){

          entry.target.classList.add('services-animation');
        }

      })
    });


    // // Tell the observer which elements to track
    observer.observe(document.querySelector('.services-1'));
    observer.observe(document.querySelector('.services-2'));
    observer.observe(document.querySelector('.services-3'));
    observer.observe(document.querySelector('.services-4'));
    observer.observe(document.querySelector('.services-5'));
    observer.observe(document.querySelector('.services-6'));


  }

  else if (currentPage.includes('contact')){

    // const submit_button = document.querySelector('#submit-button');
    // submit_button.addEventListener('click', () => {

    //   const cs_form = document.querySelector('#cs-form');
    //   const cs_submit_msg = document.querySelector('#cs-submit-msg');

    //   cs_form.style.display = 'none';
    //   cs_submit_msg.style.display = 'flex';


    // })


  }

  else {

    const servicesCardObserver = new IntersectionObserver(entries => {
      // We will fill in the callback later...

      entries.forEach(entry => {

        if (entry.isIntersecting){

          entry.target.classList.add('card-animation');
        }

      })
    });

    servicesCardObserver.observe(document.querySelector('.card-1'));
    servicesCardObserver.observe(document.querySelector('.card-2'));
    servicesCardObserver.observe(document.querySelector('.card-3'));
    servicesCardObserver.observe(document.querySelector('.card-4'));
    servicesCardObserver.observe(document.querySelector('.card-5'));
    servicesCardObserver.observe(document.querySelector('.card-6'));



    const ratingsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {

        if (entry.isIntersecting){

          entry.target.classList.add('card-animation');
          return;
        }

      })
    });

    ratingsObserver.observe(document.querySelector('.slide-1'));
    ratingsObserver.observe(document.querySelector('.slide-2'));
    ratingsObserver.observe(document.querySelector('.slide-3'));
    ratingsObserver.observe(document.querySelector('.slide-4'));
    // ratingsObserver.observe(document.querySelector('.slide-5'));
    // ratingsObserver.observe(document.querySelector('.slide-6'));


  }



}

loadAnimations();


function loadButtons() {

  const url_list = window.location.href.split("/");
  const url_str = url_list[0] + "//" + url_list[2];


  const contact_redirect = document.querySelectorAll('.contact-redirect');
  const about_redirect = document.querySelectorAll('.about-redirect');
  const services_redirect = document.querySelectorAll('.services-redirect');


  contact_redirect.forEach((item) => {

    item.addEventListener('click', ()=>{

      location.href = url_str + "/contact/"

    })
  })

  about_redirect.forEach((item) => {
    item.addEventListener('click', () => {

      location.href = url_str + "/about/";
    })

  })

  services_redirect.forEach((item) => {
    item.addEventListener('click', () => {

      location.href = url_str + "/services/";
    })
  })


}

loadButtons();


