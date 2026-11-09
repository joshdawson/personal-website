<script setup lang="ts">
import meImageUrl from "../assets/me.jpg";
</script>

<template>
  <header class="header">
    <a href="#about" class="branding">
      <img class="avatar" :src="meImageUrl" alt="Josh Dawson" />
      <span class="name">Josh Dawson</span>
      <span class="tagline">Fractional Tech Lead · Architect</span>
    </a>

    <nav class="nav" aria-label="Sections">
      <a class="nav-link" href="#about">About</a>
      <a class="nav-link" href="#services">Services</a>
      <a class="nav-link" href="#experience">Experience</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: var(--header-height);
  padding: 0 var(--space-6);
  background: var(--color-header-bg);
  color: #ffffff;
}

.branding {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
  color: #ffffff;
}

.branding:hover {
  color: #ffffff;
  text-decoration: none;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.name {
  font-size: var(--text-md);
  font-weight: 500;
  white-space: nowrap;
}

.tagline {
  padding-left: var(--space-3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
}

.nav {
  display: flex;
  align-items: stretch;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0 var(--space-4);
  font-size: var(--text-body);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  box-shadow: inset 0 -3px 0 transparent;
  transition: color var(--transition), box-shadow var(--transition);
}

.nav-link:hover {
  color: #ffffff;
  text-decoration: none;
  box-shadow: inset 0 -3px 0 var(--blue-400);
}

@media (max-width: 760px) {
  .tagline {
    display: none;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 0 var(--space-4);
  }

  .avatar {
    display: none;
  }

  .nav-link {
    padding: 0 var(--space-2);
    font-size: var(--text-sm);
  }
}
</style>
