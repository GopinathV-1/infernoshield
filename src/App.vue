<template>
  <div>
    <header>
      <div class="navbar-container">
        <!-- <img src="/logo.png" alt="FireSafe Logo" class="logo" /> -->
        <button class="hamburger" @click="toggleMenu">
          <i class="fas fa-bars"></i>
        </button>
        <nav :class="{ show: isMobileMenuOpen }">
          <RouterLink to="/" @click="closeMenuIfMobile">
            <i class="fas fa-home"></i> Home
          </RouterLink>
          <RouterLink to="/about" @click="closeMenuIfMobile">
            <i class="fas fa-info-circle"></i> About
          </RouterLink>
          <RouterLink to="/projects" @click="closeMenuIfMobile">
            <i class="fas fa-hard-hat"></i> Projects
          </RouterLink>
          <RouterLink to="/testimonials" @click="closeMenuIfMobile">
            <i class="fas fa-comments"></i> Testimonials
          </RouterLink>
          <RouterLink to="/contact" @click="closeMenuIfMobile">
            <i class="fas fa-envelope"></i> Contact
          </RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
    <footer>
      <p>Contact: 📞 +91-9566613616 | 📧 kalai@infernoshield.in | 📍 Thiruvannamalai, India</p>
      <p><a href="https://wa.me/919566613616" target="_blank">💬 WhatsApp Us</a></p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMobileMenuOpen = ref(false)

const toggleMenu = () => {
  if (window.innerWidth <= 768) {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
}

const closeMenuIfMobile = () => {
  if (window.innerWidth <= 768) {
    isMobileMenuOpen.value = false
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

header {
  background: linear-gradient(90deg, #b71c1c, #f44336);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  flex-wrap: wrap;
}

.logo {
  width: 80px;
  height: auto;
}

nav {
  display: flex;
  gap: 1rem;
  font-weight: bold;
  font-size: 1.05rem;
}

nav a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

nav a:hover {
  text-decoration: underline;
}

.hamburger {
  display: none;
  font-size: 1.8rem;
  color: #ffffff;
  background: transparent;
  border: none;
  cursor: pointer;
}

nav.show {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #b71c1c;
  padding: 1rem;
  z-index: 999;
}

@media (max-width: 768px) {
  nav {
    display: none;
  }

  .hamburger {
    display: block;
  }

  nav.show {
    display: flex;
  }
}

footer {
  background: #212121;
  color: #fff;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}

a {
  color: #fbc02d;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
