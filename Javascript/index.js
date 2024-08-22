// Navigation Bar Functionality
const NavBtn = document.querySelectorAll('.Header li button');
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const hamburgerMenu = document.querySelector(".HamburgerMenu");

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

bars.onclick = () => {
    bars.classList.add("hidden");
    hamburgerMenu.style.display = "block";
    xmark.classList.remove("hidden");
};

xmark.onclick = () => {
    xmark.classList.add("hidden");
    hamburgerMenu.style.display = "none";
    bars.classList.remove("hidden");
};

NavBtn.forEach((btn) => {
    btn.onclick = () => {
        let sectionId = btn.getAttribute('data-custom');
        scrollToSection(sectionId);
    };
});

// Form Handling and Popup Functionality
const form = document.querySelector("form");
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const onSubmit = document.getElementById('SubmitForm');
const PopupNotification=document.querySelector(".popup-overlay");
const PopupClose=document.querySelector(".closePopup");

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');

onSubmit.onclick = (event) => {
    event.preventDefault();

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';

    // Validate inputs
    let hasError = false;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.classList.remove('hidden');
        hasError = true;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        emailError.classList.remove('hidden');
        hasError = true;
    } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format';
        emailError.classList.remove('hidden');
        hasError = true;
    }

    if (phoneInput.value.trim() === '') {
        phoneError.textContent = 'Phone number is required';
        phoneError.classList.remove('hidden');
        hasError = true;
    } else if (!validatePhone(phoneInput.value.trim())) {
        phoneError.textContent = 'Phone number must be 10 digits';
        phoneError.classList.remove('hidden');
        hasError = true;
    }

    if (hasError) {
        console.log("Form not submitted: Fields are missing or invalid.");
        return;
    }else{
        PopupNotification.classList.remove("hidden");
    }


    console.log('Form submitted');
};

PopupClose.onclick=()=>{
    PopupNotification.classList.add("hidden");
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}

// Footter Functionality
const FooterNavigationBar=document.querySelectorAll(".FooterCompany ul li button");
FooterNavigationBar.forEach((btn) => {
    btn.onclick = () => {
        let sectionId = btn.getAttribute('data-custom');
        scrollToSection(sectionId);
    };
});