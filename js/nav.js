/* ============================================================
   UNBREAKABLE CHANEY — nav.js (Lisa Frank Edition)
   Injects shared nav & footer, highlights active page
   ============================================================ */

(function () {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  const pageMap = {
    'index.html': 'home', '': 'home',
    'about.html': 'about',
    'programs.html': 'programs',
    'events.html': 'events',
    'involved.html': 'involved',
    'donate.html': 'donate',
    'contact.html': 'contact',
  };
  const activePage = pageMap[filename] || 'home';

  const navHTML = `
    <nav>
      <a class="nav-logo" href="index.html">
        Unbreakable
        <span class="logo-line2">Chaney ✨</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html"    data-page="home">Home</a></li>
        <li><a href="about.html"    data-page="about">About</a></li>
        <li><a href="programs.html" data-page="programs">Programs</a></li>
        <li><a href="events.html"   data-page="events">Events</a></li>
        <li><a href="involved.html" data-page="involved">Get Involved</a></li>
        <li><a href="contact.html"  data-page="contact">Contact</a></li>
        <li><a href="donate.html"   data-page="donate" class="nav-donate-btn">💖 Donate</a></li>
      </ul>
    </nav>
  `;

  const footerHTML = `
    <footer>
      <div class="footer-grid">
        <div>
          <div class="footer-brand">Unbreakable Chaney ✨</div>
          <p class="footer-tagline">Breaking cycles of trauma and building resilient, healthy communities — one rainbow at a time. 🌈</p>
          <div class="footer-social">
            <a class="social-btn" href="#" title="Facebook">f</a>
            <a class="social-btn" href="#" title="Instagram">📷</a>
            <a class="social-btn" href="#" title="Twitter">𝕏</a>
            <a class="social-btn" href="#" title="LinkedIn">in</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Navigate 🗺️</div>
          <ul class="footer-links">
            <li><a href="index.html">🏠 Home</a></li>
            <li><a href="about.html">💜 About Us</a></li>
            <li><a href="programs.html">⭐ Programs</a></li>
            <li><a href="events.html">📅 Events</a></li>
            <li><a href="involved.html">🤝 Get Involved</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Resources 📚</div>
          <ul class="footer-links">
            <li><a href="#">🆘 Crisis Resources</a></li>
            <li><a href="#">📊 Annual Report</a></li>
            <li><a href="#">📰 News &amp; Stories</a></li>
            <li><a href="#">🤝 Partner With Us</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Connect 💌</div>
          <ul class="footer-links">
            <li><a href="contact.html">✉️ Send a Message</a></li>
            <li><a href="mailto:info@unbreakablechaney.org">📧 info@unbreakablechaney.org</a></li>
            <li><a href="#">📍 New Albany, Indiana</a></li>
            <li><a href="donate.html">💖 Make a Donation</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Unbreakable Chaney 🌈 All rights reserved. 501(c)(3) Nonprofit Organization.</span>
        <span>Privacy Policy · Terms of Use</span>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    if (link.dataset.page === activePage) link.classList.add('active-link');
  });
})();
