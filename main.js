window.addEventListener('scroll', onScroll); // on scroll, run the onScroll function

onScroll(); // run the onScroll function on page load
function onScroll () { 
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    //Linha Alvo
    const targetLine = scrollY + innerHeight/2;

    //Verificar se a seção passou da linha
    const sectionTop = section.offsetTop; // O topo da seção
    const sectionHeight = section.offsetHeight // a Altura da seção
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop; // O topo da seção chegou ou ultrapassou a linha alvo
    // console.log(sectionTopReachOrPassedTargetLine);
    
    // Verificar se a base está abaixo da linha Alvo

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine;
    // console.log('O fundo da seção passou da linha?',sectionEndPassedTargetLine);

    //Limites da seção 
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove('active');
    if(sectionBoundaries){
        menuElement.classList.add('active');
    }

}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButtonOnScroll(){
    if (scrollY > 550) {
        backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);