const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
const sideMenu = document.querySelector('#sideMenu');
//Funtion sideMenu

function openMenu() {
    sideMenu.style.right = "0";  
}

function closeMenu() {
    sideMenu.style.right = "-16rem";  
}



//scroll navbar
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-transparent', 'bg-opacity-50', 'backdrop-blur-xl',
            'shadow-sm')
    } else {
        navBar.classList.remove('bg-transparent', 'bg-opacity-50', 'backdrop-blur-xl',
            'shadow-sm')
    }
})

//navbar 
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll(".menu-item a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    menuItems.forEach((item) => {
                        item.classList.remove("current");
                        if (item.getAttribute("href") === `#${entry.target.id}`) {
                            item.classList.add("current");
                        }
                    });
                }
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
});



//sertifikat 
    const slider = document.getElementById("slider");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    const scrollAmount = 400; 
    next.addEventListener("click", () => {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prev.addEventListener("click", () => {
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    function flipCard(element) {
        element.querySelector('.card').classList.toggle('[transform:rotateY(180deg)]');
    }


//darkmode
if (!localStorage.theme) {
    localStorage.theme = 'light';
}

// Dark mode jika ada preferensi user
if (localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}
