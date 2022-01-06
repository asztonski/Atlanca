const root = document.querySelector('html')
const body = document.querySelector('.global');
const header = document.querySelector('header');
const headerNav = document.querySelector('header nav');
const navBtn = document.querySelectorAll('.navBtn');
const sections = document.querySelectorAll('.nav');
const logoDesktop = document.querySelector('.logo.desktop');
const logoMobile = document.querySelector('.logo.mobile');
const menu = document.querySelector('.menu')
const menuBox = document.querySelector('.menuBox');
const menuNav = document.querySelector('.menuNav');
const navBar = document.querySelector('.right');
const navBarBtn = document.querySelectorAll('.right button');
const navBarCircle = document.querySelectorAll('.circle');
const navCover = document.querySelector('.cover')
const videoBtn = document.querySelector('.videoBtn');
const videoBox = document.querySelector('.video');
const video = document.querySelector('iframe');
const closeVideo = document.querySelector('.video button');
const contents = document.querySelectorAll('section');
const bottomBox = document.querySelector('.contact .content');
const bottomText = document.querySelector('.contact .text');
const waveImgDesktop = document.querySelector('.menu img.desktop')
const waveImgMobile = document.querySelector('.menu svg.mobile')
const xBtn = document.querySelector('.menu img.xbutton')
let scrollValue = 0;

menuNav.style.display = 'none'

window.onload = header.classList.add('active');
window.onload = window.scrollTo(0,0)
navBarCircle[0].classList.add('active');

videoBtn.addEventListener('click', () => {
  videoBox.classList.add('active');
  if (window.innerWidth < 1024) {
    root.style.overflow = 'hidden'
  }
})

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

closeVideo.addEventListener('click', () => {
  if (videoBox.classList.contains('active')) {
    stopVideos();
    setTimeout(() => {
      videoBox.classList.remove('active')
      if (window.innerWidth < 1024) {
        root.style.overflow = 'auto'
      }
    }, 850);
  }
})


if (window.innerWidth > 1024) {
  function translateScroll() {
  
    body.style.transform = `translateY(${scrollValue * 100}vh`;

    if (scrollValue === -5) {
        body.style.transform = `translateY(-412vh)`;
        bottomBox.style.opacity = 0;
        bottomText.style.transform = 'translateY(-22.5vh)'
    } else {
      bottomBox.style.opacity = 1;
      bottomText.style.transform = 'translateY(0)'
    }

    if (body.style.transform !== 'translateY(0vh)') {
      menu.classList.add('invert');
    } else menu.classList.remove('invert')


    if (scrollValue === 0 || scrollValue === -3)  {
      navBar.classList.remove('invert');
    } else navBar.classList.add('invert');

    if (scrollValue === -3) {
      navCover.style.display = 'block';
      setTimeout(() => {
        navCover.classList.add('on')
      }, 1000);
    } else {
      navCover.classList.remove('on')
      navCover.style.display = 'none';
    }

    let activeCircle = document.querySelector('.active');
    let indexOfActiveCircle = [...navBarCircle].indexOf(activeCircle)
    // let realActiveCircle = indexOfActiveCircle + 1;


    if (scrollValue === 0) {
      menuNav.classList.remove('open')
      menu.classList.remove('open')
      setTimeout(() => {
        menuNav.style.display = 'none';
      }, 80);
    }

    if (scrollValue > -5) {
      navBarCircle[indexOfActiveCircle].classList.remove('active');
      navBarCircle[-scrollValue].classList.add('active');
    } else return scrollValue

    if (scrollValue < 0) {
      navBarCircle[indexOfActiveCircle].classList.remove('active')
    } 

    navBarCircle.forEach(circle => {
      if (indexOfActiveCircle === -scrollValue) {
        navBarCircle[indexOfActiveCircle].classList.add('active');
      }
    })

    if (scrollValue !== 0) {

      header.classList.remove('active')
      menuBox.style.transform = 'translateY(-10px)'
      menuBox.style.zIndex = '2'
      logoDesktop.src = "projekt/icons/atlanca_logo.svg"
      logoDesktop.style.transform = 'translateY(-10px)'
    } else {

      header.classList.add('active');
      menuBox.style.transform = 'translateY(0)'
      menuBox.style.zIndex = '1'
      logoDesktop.src = "projekt/icons/whitelogo.svg"
      logoDesktop.style.transform = 'translateY(0)'
    };

    if (scrollValue !== -1) {
      contents[0].classList.remove('active')
    } else contents[0].classList.add('active');

    if (scrollValue !== -2) {
      contents[1].classList.remove('active')
    } else contents[1].classList.add('active');

    if (scrollValue !== -3) {
      contents[2].classList.remove('active')
      // menuNav.style.backgroundColor = 'white';
    } else {
      contents[2].classList.add('active');
      menuNav.style.backgroundColor = 'transparent'
    }

    if (scrollValue !== -4) {
      contents[3].classList.remove('active')
    } else contents[3].classList.add('active');
  };



  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};


document.onkeydown = checkKey;

function checkKey(e) {
  if (!videoBox.classList.contains('active')) {
    e = e || window.event;
    
    if (e.keyCode == '38') {
      if (scrollValue !== 0) {
        scrollValue++;
        translateScroll()
      } else return scrollValue;
    }
    else if (e.keyCode == '40') {
      if (scrollValue !== -5) {
        scrollValue--;
        translateScroll();
      } else return scrollValue;
    };
  } else {
    return false
  }
};

function onWheel(e) {
  if (!videoBox.classList.contains('active')) {
    if (e.deltaY < 0)
    {
     if (scrollValue !== 0) {
       scrollValue++;
       translateScroll();
     } else return scrollValue;
    }
    else if (e.deltaY > 0)
    {
     if (scrollValue !== -5) {
       scrollValue--;
       translateScroll();
     } else return scrollValue;
    }
  } else {
    return false
  }
}


document.onwheel = debounce((e) => onWheel(e), 100);


navBtn[0].addEventListener('click', () => {
  scrollValue = -1;
  translateScroll()
})

navBtn[1].addEventListener('click', () => {
    scrollValue = -1;
    translateScroll()
})

navBtn[2].addEventListener('click', () => {
    scrollValue = -2;
    translateScroll()
})

navBtn[3].addEventListener('click', () => {
    scrollValue = -3;
    translateScroll()
})

navBtn[4].addEventListener('click', () => {
    scrollValue = 0;
    translateScroll()
})

navBarBtn[0].addEventListener('click', () => {
  if (scrollValue !== 0) {
    scrollValue++;
    translateScroll()
  } else return scrollValue;
})

navBarBtn[1].addEventListener('click', () => {
  if (scrollValue !== -5) {
    scrollValue--;
    translateScroll();
  } else return scrollValue;
});

navBarCircle.forEach(circle => {
  circle.addEventListener('click', () => {
    let index = [...navBarCircle].indexOf(circle);
    scrollValue = -index;
    translateScroll();
    let activeCircle = document.querySelector('.active');
    let indexOfActiveCircle = [...navBarCircle].indexOf(activeCircle)
    circle.classList.add('active')
  })
});

  menu.addEventListener('click', () => {
    if (scrollValue === 0) {
      if (!headerNav.classList.contains('close')) {
      headerNav.classList.add('close')
      setTimeout(() => {
        headerNav.style.zIndex = '-1'
      }, 200);
    } else {
        headerNav.style.zIndex = '2'
        waveImgDesktop.style.opacity = 1
        xBtn.style.opacity = 0
        setTimeout(() => {
          headerNav.classList.remove('close')
        }, 100);
    }
  }
    if (scrollValue !== 0) {
      waveImgDesktop.style.opacity = 0
      xBtn.style.opacity = 1
    if (menuNav.classList.contains('open')) {
      menuNav.classList.remove('open')
      menu.classList.remove('open')
      waveImgDesktop.style.opacity = 1
      xBtn.style.opacity = 0
      setTimeout(() => {
        menuNav.style.display = 'none';
      }, 200);
    } else {
    menuNav.style.display = 'flex';
    waveImgDesktop.style.opacity = 0
    xBtn.style.opacity = 1
    setTimeout(() => {
      menuNav.classList.add('open');
      menu.classList.add('open');
    }, 50);
  }
} else return scrollValue;
 });
}



// Mobile


window.addEventListener('scroll', (e) => {
  if (window.innerWidth < 1024) {
      
    if (window.scrollY > 40) {
      menuBox.classList.add('after');
      menu.classList.add('invert');
      logoMobile.src = "projekt/icons/atlanca_logo.svg"
      logoMobile.style.transform = 'translateY(-2px)'
    } else {
      menuBox.classList.remove('after')
      menu.classList.remove('invert')
      logoMobile.src = "projekt/icons/whitelogo.svg"
      logoMobile.style.transform = 'translateY(0)'
    }
  
  }
})


menu.addEventListener('click', () => {
  const navbox = document.querySelector('.menuNav.mobile')
  const burger = document.querySelector('.menu svg')
  if (window.innerWidth < 1024) {
    navbox.classList.toggle('open')
  if (navbox.classList.contains('open')) {
    burger.classList.add('open')
    root.style.overflow = 'hidden'
    logoMobile.src = "projekt/icons/atlanca_logo.svg"
    waveImgMobile.style.opacity = 0
    xBtn.style.opacity = 1
  } else {
    burger.classList.remove('open')
    root.style.overflow = 'auto'
    waveImgMobile.style.opacity = 1
    xBtn.style.opacity = 0
    if (window.scrollY < 40) {
      logoMobile.src = "projekt/icons/whitelogo.svg"
    }
  }
 }
})
