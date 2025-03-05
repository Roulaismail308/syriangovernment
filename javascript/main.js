// القائمة في وضع الموبايل
document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.querySelector(".menu-toggle");
    let mainMenu = document.querySelector(".main-menu");
    let hamburgerMenu = document.querySelector(".hamburger-menu");

    menuToggle.addEventListener("change", function () {
        if (menuToggle.checked) {
            mainMenu.style.display = "block"; // إظهار القائمة عند التحديد
        } else {
            mainMenu.style.display = "none"; // إخفاء القائمة عند إلغاء التحديد
        }
    });

    // // إغلاق القائمة عند النقر خارجها
    // document.addEventListener("click", function (event) {
    //     if (!mainMenu.contains(event.target) && !hamburgerMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    //         menuToggle.checked = false;
    //         mainMenu.style.display = "none"; // إخفاء القائمة
    //     }
    // });
});
// التحكم في الفيديو
const video = document.querySelector(".video-container video");
const controlBtn = document.querySelector(".control-btn");
const icon = controlBtn.querySelector("i");

controlBtn.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    } else {
        video.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
});
// tabs
function showTab(tabId) {
    // Hide all tabs
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Remove the 'active' class from all buttons
    const allButtons = document.querySelectorAll('.tab-button');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab and add 'active' class to the corresponding button
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Set the default active tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('tab1');
});


