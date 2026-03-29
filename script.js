// Ensure script runs after HTML loads
document.addEventListener('DOMContentLoaded', () => {

    // 1. Welcome Message (Option 5)
    alert("Welcome to Noor Wael's Interactive CV!");

    // 2. Dark/Light Mode Toggle (Option 3)
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = "Switch to Light Mode";
        } else {
            themeToggle.textContent = "Switch to Dark Mode";
        }
    });

    // 3. Dynamic Skills List (Option 4)
    const addSkillBtn = document.getElementById('add-skill-btn');
    const skillInput = document.getElementById('skill-input');
    const skillList = document.getElementById('skills-list');

    addSkillBtn.addEventListener('click', () => {
        const skillValue = skillInput.value.trim();
        if (skillValue !== "") {
            const li = document.createElement('li');
            li.textContent = skillValue;
            skillList.appendChild(li);
            skillInput.value = ""; // Clear input
        }
    });

    // 4. Contact Form Validation (Option 1)
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            feedback.textContent = "Please enter a valid email address.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Message sent successfully!";
            feedback.style.color = "green";
            contactForm.reset();
        }
    });
});