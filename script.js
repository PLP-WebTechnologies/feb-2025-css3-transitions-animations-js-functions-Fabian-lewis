// Load saved theme
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        // Initialize moon position
        const moon = document.getElementById("moon");
        moon.style.display = "block";
        setTimeout(() => {
            moon.classList.add("active");
        }, 100);
        enableDarkMode();
    } else {
        // Initialize sun position
        const sun = document.getElementById("sun");
        setTimeout(() => {
            sun.classList.add("active");
        }, 100);
    }
};

document.getElementById("toggleTheme").addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    
    if (isDark) {
        // Transition from dark to light
        moon.classList.remove("active");
        moon.classList.add("exit");
        
        setTimeout(() => {
            moon.classList.remove("exit");
            moon.style.display = "none";
            disableDarkMode();
            sun.style.left = "-150px";
            sun.classList.add("active");
        }, 1500);
        
        localStorage.setItem("theme", "light");
    } else {
        // Transition from light to dark
        sun.classList.remove("active");
        sun.classList.add("exit");
        
        setTimeout(() => {
            sun.classList.remove("exit");
            enableDarkMode();
            moon.style.display = "block";
            moon.style.left = "-150px";
            moon.classList.add("active");
        }, 1500);
        
        localStorage.setItem("theme", "dark");
    }
});

function enableDarkMode() {
    document.body.classList.add("dark");
    document.getElementById("scene").classList.add("dark");
}

function disableDarkMode() {
    document.body.classList.remove("dark");
    document.getElementById("scene").classList.remove("dark");
}