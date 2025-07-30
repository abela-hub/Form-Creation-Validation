document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Validation variables
        let isValid = true;
        const messages = [];
        
        // Username validation (min 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        
        // Email validation (must contain @ and .)
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }
        
        // Password validation (min 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
        
        // Display feedback
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.className = 'success';
            
            // Optional: Clear form after successful submission
            form.reset();
            
            // Optional: Hide feedback after 3 seconds
            setTimeout(() => {
                feedbackDiv.style.display = 'none';
            }, 3000);
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.className = '';
        }
    });
});