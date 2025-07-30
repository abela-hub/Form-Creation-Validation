document.addEventListener("DOMContentLoaded", function() {
    // Your code that should run after the DOM is fully loaded
    console.log("DOM fully loaded and parsed");
    
    // Example: Add click event to a button
    const button = document.querySelector("#myButton");
    if (button) {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registration-form");

  if (registrationForm) {
    registrationForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission

      // Get form data
      const formData = new FormData(registrationForm);
      const userData = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      // Example: Log data (replace with fetch() for backend submission)
      console.log("Registration data:", userData);

      // Optional: Display success message
      alert("Registration successful!");
      registrationForm.reset(); // Clear the form
    });
  } else {
    console.warn("Registration form not found!");
  }
});
function displayFeedback(isValid, messages) {
  const feedbackDiv = document.getElementById('feedbackDiv');
  feedbackDiv.style.display = 'block';
  
  if (isValid) {
    feedbackDiv.textContent = 'Registration successful!';
    feedbackDiv.style.color = '#28a745';
  } else {
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = '#dc3545';
  }
}

// Validation functions
function validateUsername(username) {
  const errors = [];
  
  if (!username) {
    errors.push('Username is required');
  } else {
    if (username.length < 4) {
      errors.push('Username must be at least 4 characters');
    }
    if (username.length > 20) {
      errors.push('Username must be less than 20 characters');
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      errors.push('Username can only contain letters, numbers, and underscores');
    }
  }
  
  return errors;
}

function validatePassword(password) {
  const errors = [];
  
  if (!password) {
    errors.push('Password is required');
  } else {
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }
  }
  
  return errors;
}

function validateEmail(email) {
  const errors = [];
  
  if (!email) {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Please enter a valid email address');
    }
  }
  
  return errors;
}

// Main validation function
function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  
  const usernameErrors = validateUsername(username);
  const passwordErrors = validatePassword(password);
  const emailErrors = validateEmail(email);
  
  const allErrors = [...usernameErrors, ...passwordErrors, ...emailErrors];
  const isValid = allErrors.length === 0;
  
  displayFeedback(isValid, allErrors);
  
  return isValid;
}

// Example usage with a form submit event
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  validateForm();
});