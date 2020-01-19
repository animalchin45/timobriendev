const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')

window.addEventListener('resize', () => {
    const w = this.document.documentElement.clientWidth
    if(w >= 1200){
        mobileNav.style.opacity = 0
        hamburger.className = 'hamburger hamburger--squeeze'
    }
})

mobileNav.addEventListener('click', () => {
    hamburger.className = 'hamburger hamburger--squeeze'
    mobileNav.style.opacity = 0
    mobileNav.style.left = '-1200px'
})

hamburger.addEventListener('click', (e) => {
    if(hamburger.className === 'hamburger hamburger--squeeze') {
        hamburger.className += ' is-active'
        mobileNav.style.opacity = 1
        mobileNav.style.left = '0'
    } else {
        hamburger.className = 'hamburger hamburger--squeeze'
        mobileNav.style.opacity = 0
        mobileNav.style.left = '-1200px'
    }
})