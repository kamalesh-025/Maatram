// Open signup modal
document.querySelector('.signup-btn').onclick = function() {
    document.getElementById('signup-modal').style.display = 'flex';
};

// Open login modal
document.querySelector('.login-btn').onclick = function() {
    document.getElementById('login-modal').style.display = 'flex';
};

// Close any modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    resetForms();
}

// Reset signup forms
function resetForms() {
    document.getElementById('tutor-form').classList.add('hidden');
    document.getElementById('student-form').classList.add('hidden');
}

// Show selected signup form
function showSignupForm(role) {
    resetForms();
    if (role === 'tutor') {
        document.getElementById('tutor-form').classList.remove('hidden');
    } else if (role === 'student') {
        document.getElementById('student-form').classList.remove('hidden');
    }
}
function showLoginForm(role) {
    resetForms();
    if (role === 'tutor') {
        document.getElementById('tutor-form').classList.remove('hidden');
    } else if (role === 'student') {
        document.getElementById('student-form').classList.remove('hidden');
    }
}
    // Automatically scroll to the home section when the page loads
    window.onload = function() {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    };

    // Function to close modals
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    // Function to show signup form based on role
    function showSignupForm(role) {
        document.getElementById('tutor-form').classList.toggle('hidden', role !== 'tutor');
        document.getElementById('student-form').classList.toggle('hidden', role !== 'student');
    }

    // Function to show login form based on role
    function showLoginForm(role) {
        // Implement as needed
    }