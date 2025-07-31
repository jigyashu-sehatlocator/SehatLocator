document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  const userFound = storedUsers.find(user => user.email === email && user.password === password);

  if (userFound) {
    alert('Login successful!');
    window.location.href = 'dashboard.html'; // Redirect to dashboard
  } else {
    alert('Invalid email or password!');
  }
});
