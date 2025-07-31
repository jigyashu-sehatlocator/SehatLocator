document.getElementById('forgotForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.find(user => user.email === email);

  if (!userExists) {
    alert('No account found with this email.');
    return;
  }

  alert('A reset link (simulated) has been sent to your email.');
  window.location.href = 'login.html';
});
