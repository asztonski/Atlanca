const logo = document.querySelector('nav.global .logo')

console.log('dhaj')

const burgerBtn = document.querySelector('.burger')

burgerBtn.addEventListener('click', () => {
    const mobileMenu = document.querySelector('nav.global div')
    const waveBtn = document.querySelector('svg.wave')
    const xBtn = document.querySelector('svg.xbtn')
    mobileMenu.classList.toggle('open')
    if (mobileMenu.classList.contains('open')) {
        waveBtn.style.opacity = 0
        xBtn.style.opacity = 1
        root.style.overflow = 'hidden'
        logo.src = "projekt/icons/atlanca_logo.svg"
    } else {
        waveBtn.style.opacity = 1
        xBtn.style.opacity = 0
        root.style.overflow = 'auto'
    }
})
  