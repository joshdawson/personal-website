<script setup lang="ts">
import meImageUrl from "../assets/me.jpg";
</script>

<template>
  <aside class="menu">
    <div class="menu-top">
      <a href="#about" class="avatar-link">
        <div class="circle-image">
          <img class="me-image" :src="meImageUrl" alt="Josh Dawson" />
        </div>
      </a>

      <div class="menu-identity">
        <span class="menu-name">Josh Dawson</span>
        <span class="menu-tagline">Tech Lead · Architect · Dev</span>
      </div>
    </div>

    <nav class="menu-nav">
      <a class="menu-link" href="#about">
        <i class="pi pi-user link-icon"></i>
        About
      </a>
      <a class="menu-link" href="#experience">
        <i class="pi pi-briefcase link-icon"></i>
        Experience
      </a>
      <a class="menu-link" href="#services">
        <i class="pi pi-cog link-icon"></i>
        Services
      </a>
    </nav>

    <div class="menu-footer">
      <a
        href="mailto:joshdawson@progmaticsoftware.co.uk"
        class="menu-footer-link"
      >
        <i class="pi pi-envelope"></i>
        joshdawson@progmaticsoftware.co.uk
      </a>
    </div>
  </aside>
</template>

<style scoped>
.menu {
  background: linear-gradient(175deg, #1a1929 0%, var(--theme-dark-mid) 100%);
  flex: 0 0 260px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: var(--space-8) 0;
  gap: var(--space-8);
  position: relative;
  overflow: hidden;
}

/* subtle decorative glow */
.menu::before {
  content: "";
  position: absolute;
  top: -80px;
  left: -80px;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(24, 118, 140, 0.25) 0%,
    transparent 70%
  );
  pointer-events: none;
}

/* ── Top block ── */
.menu-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 var(--space-6);
  gap: var(--space-4);
}

.avatar-link {
  display: block;
}

.circle-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(24, 118, 140, 0.6);
  box-shadow: 0 0 0 6px rgba(24, 118, 140, 0.12);
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
}

.circle-image:hover {
  border-color: var(--theme-highlight-bright);
  box-shadow: 0 0 0 8px rgba(24, 118, 140, 0.2);
}

.me-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-identity {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  text-align: center;
}

.menu-name {
  color: var(--theme-white);
  font-size: var(--text-lg);
  font-weight: 700;
  letter-spacing: -0.01em;
}

.menu-tagline {
  color: rgba(255, 255, 255, 0.45);
  font-size: var(--text-xs);
  letter-spacing: 0.05em;
}

/* ── Nav ── */
.menu-nav {
  display: flex;
  flex-direction: column;
  padding: 0;
  flex: 1;
}

.menu-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-6);
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  transition:
    color var(--transition),
    background var(--transition);
  border-left: 2px solid transparent;
  position: relative;
}

.link-icon {
  font-size: 14px;
  opacity: 0.45;
  flex-shrink: 0;
  transition: opacity var(--transition);
  line-height: 1;
}

.menu-link:hover {
  color: var(--theme-white);
  background: rgba(255, 255, 255, 0.05);
  border-left-color: var(--theme-highlight-bright);
}

.menu-link:hover .link-icon {
  opacity: 1;
}

/* ── Footer ── */
.menu-footer {
  padding: 0 var(--space-6);
}

.menu-footer-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 10px;
  color: rgba(255, 255, 255, 0.25);
  font-weight: 400;
  letter-spacing: 0.02em;
  word-break: break-all;
  transition: color var(--transition);
}

.menu-footer-link .pi {
  font-size: 11px;
  flex-shrink: 0;
  line-height: 1;
}

.menu-footer-link:hover {
  color: rgba(255, 255, 255, 0.6);
}

/* ── Mobile: top sticky bar ── */
@media (max-width: 1000px) {
  .menu {
    flex: none;
    flex-direction: row;
    align-items: stretch;
    height: 56px;
    padding: 0 var(--space-4);
    position: sticky;
    top: 0;
    z-index: 100;
    gap: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .menu::before {
    display: none;
  }

  .menu-top {
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: var(--space-3);
    flex-shrink: 0;
    margin-right: auto;
  }

  .menu-nav {
    flex-direction: row;
    align-items: stretch;
    flex: none;
    gap: 0;
  }

  .menu-link {
    padding: 0 var(--space-3);
    border-left: none;
    font-size: 10px;
    letter-spacing: 0.08em;
    box-shadow: inset 0 -2px 0 transparent;
  }

  .menu-link:hover {
    background: rgba(255, 255, 255, 0.06);
    box-shadow: inset 0 -2px 0 var(--theme-highlight-bright);
  }

  .circle-image {
    width: 32px;
    height: 32px;
    border-width: 2px;
    box-shadow: none;
  }

  .menu-identity {
    align-items: flex-start;
    gap: 0;
  }

  .menu-name {
    font-size: var(--text-sm);
  }

  .menu-tagline {
    display: none;
  }

  .link-icon {
    display: none;
  }

  .menu-footer {
    display: none;
  }
}
</style>
