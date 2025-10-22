// Basit client-side authentication demo (sessionStorage bazlı)
// NOT: Gerçek uygulamada kimlik doğrulama sunucuda yapılmalıdır.

document.addEventListener('DOMContentLoaded', function () {
  // Helper: get session user
  function getSession() {
    try { return JSON.parse(sessionStorage.getItem('mylib_user')); } catch (e) { return null; }
  }

  function setSession(obj) {
    sessionStorage.setItem('mylib_user', JSON.stringify(obj));
  }

  function clearSession() {
    sessionStorage.removeItem('mylib_user');
  }

  // Show welcome message if container exists
  var welcomeEls = document.querySelectorAll('[data-welcome-user]');
  var user = getSession();
  if (user && welcomeEls.length) {
    welcomeEls.forEach(function (el) {
      el.textContent = 'Hoşgeldin ' + (user.displayName || user.username) + '!';
    });
  }

  // Attach logout links
  document.querySelectorAll('[data-logout]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault(); clearSession(); window.location.href = 'index.html';
    });
  });

  // Protect pages by role: elements with data-require-role attribute
  document.querySelectorAll('[data-require-role]').forEach(function (el) {
    var required = el.getAttribute('data-require-role');
    if (!user || (required && user.role !== required)) {
      // If not authorized, redirect to login
      window.location.href = 'login.html';
    }
  });

  // Handle login form (if present)
  var loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.target;
      var email = form.querySelector('input[name="email"]').value.trim();
      var password = form.querySelector('input[name="password"]').value.trim();

      // Very small demo credential check
      // For demo: admin@ -> role admin, else member. Password must be '1234' for demo
      var role = email.toLowerCase().startsWith('admin') ? 'admin' : 'member';

      if (!email || !password) {
        alert('Lütfen kullanıcı adı ve parola girin.');
        return;
      }

      // Demo password check (replace with server-side auth in real app)
      if (password !== '1234') {
        alert('Geçersiz parola (demo: 1234).');
        return;
      }

      // Create session object
      var username = email.split('@')[0];
      setSession({ username: username, displayName: username, role: role, email: email });

      // Redirect based on role
      if (role === 'admin') window.location.href = 'admin.html';
      else window.location.href = 'index.html';
    });
  }

  // Handle profile change (change username / password) if present
  var profileForm = document.querySelector('.profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var u = getSession();
      if (!u) { alert('Önce giriş yapın.'); window.location.href = 'login.html'; return; }
      var newName = profileForm.querySelector('input[name="displayName"]').value.trim();
      var newPass = profileForm.querySelector('input[name="newPassword"]').value.trim();
      if (newName) u.displayName = newName;
      // NOTE: password not actually checked/stored in this demo
      setSession(u);
      alert('Bilgiler güncellendi.');
      // Update welcome texts immediately
      document.querySelectorAll('[data-welcome-user]').forEach(function (el) {
        el.textContent = 'Hoşgeldin ' + (u.displayName || u.username) + '!';
      });
    });
  }
});
