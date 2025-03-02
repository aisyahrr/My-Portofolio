
const skills = [
    { name: "Tailwind CSS", img: "./img/Img icon/Tailwind CSS.png", level: "70%" },
    { name: "JavaScript", img: "./img/Img icon/JavaScript.png", level: "40%" },
    { name: "Reactjs", img: "./img/Img icon/React.png", level: "50%" },
    { name: "PHP", img: "./img/Img icon/PHP.png", level: "50%" },
    { name: "HTML5", img: "./img/Img icon/HTML5.png", level: "90%" },
    { name: "Figma", img: "./img/Img icon/Figma.png", level: "75%" },
    { name: "Framer", img: "./img/Img icon/Framer.png", level: "20%" }
];

const container = document.getElementById("skills-container");

skills.forEach(skill => {
    const skillCard = `
        <div class="skill-card max-w-44 mx-2 w-full">
            <div class="grid place-items-center p-8 rounded-3xl space-y-5 border border-transparent
            hover:border-first duration-300">
                <img src="${skill.img}" alt="${skill.name}" class="max-w-20">
                <p class="text-2xl font-bold text-indigo-500 dark:text-indigo-200">${skill.level}</p>
            </div>
            <p class=" text-center text-secondary mt-3 capitalize font-semibold dark:text-white">${skill.name}</p>
        </div>
    `;
    container.innerHTML += skillCard;
});

//Skill 
const tabContainer = document.getElementById("tab-container");

const tabsData = [
    { label: "All", value: "all" },
    { label: "UI/UX", value: "uiux" },
    { label: "Web", value: "web" },
    { label: "Apps", value: "apps" }
];

// Render tab
tabsData.forEach((tab, index) => {
    const button = document.createElement("button");
    button.className = `tab relative block h-8 px-3 rounded-full md:h-10 md:px-6 font-semibold ${index === 0 ? "text-white" : ""}`;
    button.setAttribute("data-tabs", tab.value);
    button.textContent = tab.label;
    tabContainer.appendChild(button);
});

// Pastikan kode indikator dieksekusi setelah tab dibuat
setTimeout(() => {
    let tabs = document.querySelectorAll('.tab');
    let indikator = document.querySelector(".indicator");

    indikator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indikator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            indikator.style.width = tab.getBoundingClientRect().width + "px";
            indikator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";
    
            tabs.forEach(t => t.classList.remove("text-white"));
            tab.classList.add("text-white");
    
            let selectedValue = tab.getAttribute("data-tabs");
            let workCards = document.querySelectorAll(".work_card");
    
            workCards.forEach(card => {
                if (selectedValue === "all" || card.classList.contains(selectedValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
    
}, 10);

const projects = [
    {
        title: "LandingPage - Coffe Friend",
        description: "Design using the Framer app",
        category: "uiux",
        image: "./img/img_content/coffefriend.png",
        link: "https://caffe-friends.framer.ai/"
    },
    {
        title: "LandingPage - NCT",
        description: "Built with HTML, CSS, and JavaScript",
        category: "web",
        image: "./img/img_content/landingpageNCT.png",
        link: "https://aisyahrr.github.io/LandingPage-NCT/"
    },
    {
        title: "Mobile App - Spotify",
        description: "Design using the Figma app",
        category: "uiux apps",
        image: "./img/img_content/spotify.png",
        link: "https://www.figma.com/proto/RhHBbPUQE443glp0kE79IU/Spotify?node-id=0-1&t=AFqPISAMjcj2g9kj-1"
    },
    {
        title: "Kalkulator",
        description: "Built with HTML, CSS, and JavaScript",
        category: "web",
        image: "./img/img_content/calcu.png",
        link: "https://aisyahrr.github.io/Kalkulator/"
    },
    {
        title: "LandingPage - Arte & Aroma",
        description: "Design using the Wordpress",
        category: "uiux",
        image: "./img/img_content/wordpress.png",
        link: "https://aisyhrr.wordpress.com/?_gl=1*1k7oa4j*_gcl_au*NTg3ODk1NDc4LjE3Mzg4NDU3NjE."
    },
    {
        title: "Portfolio",
        description: "Design using the Figma app",
        category: "uiux",
        image: "./img/img_content/Protofolio.png",
        link: "https://www.figma.com/proto/ON9IonwczZhmou7DBeVFmN/Portofolio?node-id=0-1&t=eOdlne4iJkOM0ssz-1"
    },
    {
        title: "LandingPage-ISC",
        description: "Built with HTML, Tailwindcss, JavaScript",
        category: "web",
        image: "./img/img_content/LandingpageISC.png",
        link: "https://aisyahrr.github.io/LandingPage-ISC/"
    },
    {
        title: "SeoulFlix Web",
        description: "Built with PHP, CSS, JavaScript",
        category: "web",
        image: "./img/img_content/SeoulFlix.png",
        link: "#"
    },
    {
        title: "Urban'attire Web",
        description: "Built with Reactjs, Tailwindcss, JavaScript",
        category: "web",
        image: "./img/img_content/URBANWEB.png",
        link: "#"
    },
    {
        title: "NjunngYum Web",
        description: "Design using the Figma app",
        category: "uiux apps",
        image: "./img/img_content/NjunngYum.png",
        link: "https://www.figma.com/proto/32y2x061fAxz2mQmF8Q83o/BurgerJun?node-id=0-1&t=yD9JGunMmQLaybwD-1"
    },
];

const projectContainer = document.querySelector(".project"); // Ambil elemen ul

// Cek apakah perangkat touchscreen
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

// Render proyek ke dalam ul
projects.forEach(project => {
    const li = document.createElement("li");
    li.className = `work_card ${project.category} relative bg-indigo-100 dark:bg-secondary p-5 border dark:border-secondary bg-opacity-70 backdrop-blur-lg overflow-hidden rounded-xl`;

    li.innerHTML = `
        <img src="${project.image}" alt="Project Image" class="w-full">
        <div class="overlay absolute left-0 right-0 bottom-[-100%]">
            <div class="items-center bg-gradient-to-r from-first to-secondary text-white p-5 rounded-t-2xl">
                <div>
                    <p class="font-bold text-lg">${project.title}</p>
                    <p class="text-sm">${project.description}</p>
                    <a href="${project.link}" class="flex items-end justify-end right-0 pt-2 gap-2">
                        View Project <i class="ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>
        </div>
    `;

    // Tambahkan event click untuk touchscreen
    if (isTouchDevice) {
        li.addEventListener("click", () => toggleCard(li));
    }

    projectContainer.appendChild(li);
});

// Fungsi untuk toggle overlay (klik di touchscreen)
function toggleCard(card) {
    const overlay = card.querySelector(".overlay");
    overlay.style.bottom = overlay.style.bottom === "0px" ? "-100%" : "0px";
}
