const logo = document.querySelector('nav.global .logo')


window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('nav.global')
    const logoLink = document.querySelector('nav.global .logolink')
    const burgerBtn = document.querySelector('button.burger')
    if (window.scrollY > 40) {
        nav.classList.add('on')
        logo.src = "projekt/icons/atlanca_logo.svg"
        logoLink.style.transform = 'translateY(-2px)'
        burgerBtn.classList.add('invert')
    } else {
        nav.classList.remove('on')
        logo.src = "projekt/icons/whitelogo.svg"
        logoLink.style.transform = 'translateY(0)'
        burgerBtn.classList.remove('invert')
    }
})


const videoBtn = document.querySelector('.videobtn');
const videobox = document.querySelector('.video')

videoBtn.addEventListener('click', () => {
    videobox.classList.add('on')
    setTimeout(() => {
        root.style.overflow = 'hidden'
    }, 600);
})

const videoExitBtn = document.querySelector('.video button')

videoExitBtn.addEventListener('click', () => {

    var stopVideos = function () {
        var videos = document.querySelectorAll('iframe, video');
        Array.prototype.forEach.call(videos, function (video) {
            if (video.tagName.toLowerCase() === 'video') {
                video.pause();
            } else {
                var src = video.src;
                video.src = src;
            }
        });
    };


    stopVideos();
    setTimeout(() => {
      videobox.classList.remove('on')
      root.style.overflow = 'auto'
    }, 850);
})



// Mobile


// window.addEventListener('scroll', (e) => {
//     if (window.innerWidth < 1024) {
        
//       if (window.scrollY > 40) {
//         menuBox.classList.add('after');
//         menu.classList.add('invert');

//       } else {
//         menuBox.classList.remove('after')
//         menu.classList.remove('invert')

//       }
    
//     }
//   })



const burgerBtn = document.querySelector('.burger')

burgerBtn.addEventListener('click', () => {
    const mobileMenu = document.querySelector('nav.global div')
    const waveBtn = document.querySelector('svg.wave')
    const xBtn = document.querySelector('svg.xbtn')
    mobileMenu.classList.toggle('open')
    if (mobileMenu.classList.contains('open')) {
        waveBtn.style.opacity = 0
        xBtn.style.opacity = 1
        logo.src = "projekt/icons/atlanca_logo.svg"
        root.style.overflow = 'hidden'
    } else {
        waveBtn.style.opacity = 1
        xBtn.style.opacity = 0
        root.style.overflow = 'auto'
        if (window.scrollY < 40) {
            logo.src = "projekt/icons/whitelogo.svg"
        }
    }
})
  