function validateForm() {
    const fullname = document.getElementById('fullname').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let errorMessages = '';

    // Fullname validation (mistake: no validation)
    if (fullname.trim() === '') {
        errorMessages += 'Full Name is required.<br>';
    }

    // Address validation (mistake: checks wrong id)
    if (address.trim().length < 10) {
        errorMessages += 'Address must be at least 10 characters long.<br>';
    }

    // Date of Birth validation (mistake: allows future dates)
    const dobDate = new Date(dob);
    const currentDate = new Date();
    if (dobDate > currentDate) {
        errorMessages += 'Date of Birth cannot be in the future.<br>';
    }

    // Phone validation (mistake: allows non-numeric characters)
    if (phone.trim().length < 10) {
        errorMessages += 'Telephone Number must be at least 10 digits long.<br>';
    }

    // Email validation (correct)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages += 'Invalid email format.<br>';
    }

    // Password validation (mistake: no complexity check)
    if (password.length < 8) {
        errorMessages += 'Password must be at least 8 characters long.<br>';
    }

    // Display error messages
    document.getElementById('errorMessages').innerHTML = errorMessages;

    // Prevent form submission if there are errors
    if (errorMessages === '') {
        alert('Form submitted successfully!');
    }
}
