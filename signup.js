document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const userExists = users.some(user => user.email === email);

  if (userExists) {
    alert('Email already exists!');
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Account created successfully!');
  window.location.href = 'login.html';
});
// signup.js - Save user data on form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const userProfile = {
    name: name,
    email: email,
    
  };

  // Save to localStorage
  localStorage.setItem('sehatUserProfile', JSON.stringify(userProfile));

  // Redirect to dashboard
  window.location.href = 'dashboard.html';
});
