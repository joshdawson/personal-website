<script setup lang="ts"></script>

<template>
  <div class="about-hero">
    <h1 class="hero-name">Josh Dawson</h1>
    <p class="hero-roles">
      <span class="role-pill">Fractional Tech Lead</span>
      <span class="role-dot">·</span>
      <span class="role-pill">Technical Architect</span>
    </p>
  </div>

  <p class="hero-bio">
    I look after the tech for non-technical founders and small teams:
    architecture, infrastructure, security and delivery.
  </p>

  <a class="contact-link" href="mailto:josh@progmaticsoftware.co.uk">
    <i class="pi pi-envelope"></i>
    josh@progmaticsoftware.co.uk
  </a>

  <div class="social-row">
    <a
      class="social-btn"
      href="https://www.linkedin.com/in/josh-dawson11/"
      title="LinkedIn"
      aria-label="LinkedIn"
    >
      <i class="pi pi-linkedin"></i>
    </a>

    <a
      class="social-btn"
      href="https://github.com/joshdawson"
      title="GitHub"
      aria-label="GitHub"
    >
      <i class="pi pi-github"></i>
    </a>
  </div>
</template>

<style scoped>
.about-hero {
  margin-bottom: var(--space-6);
}

.hero-name {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(
    135deg,
    var(--theme-dark) 0%,
    var(--theme-highlight) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-3);
}

.hero-roles {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
}

.role-pill {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  background: rgba(24, 118, 140, 0.08);
  border: 1px solid rgba(24, 118, 140, 0.18);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
}

.role-dot {
  color: var(--color-text-muted);
  opacity: 0.4;
  font-size: var(--text-sm);
}

.hero-bio {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  max-width: 520px;
  margin: var(--space-4) 0;
  line-height: 1.7;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-accent);
  font-weight: 500;
  margin-bottom: var(--space-6);
}

.contact-link .pi {
  font-size: 14px;
  line-height: 1;
}

.social-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition:
    border-color var(--transition),
    box-shadow var(--transition),
    transform var(--transition);
  color: var(--color-text-muted);
}

.social-btn svg {
  width: 18px;
  height: 18px;
  fill: var(--color-text-muted);
  transition: fill var(--transition);
}

.social-btn .pi {
  font-size: 18px;
  color: var(--color-text-muted);
  transition: color var(--transition);
  line-height: 1;
}

.social-btn:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.social-btn:hover svg {
  fill: var(--color-accent);
}

.social-btn:hover .pi {
  color: var(--color-accent);
}

@media (max-width: 640px) {
  .role-dot {
    display: none;
  }
  .hero-bio {
    font-size: var(--text-base);
  }
}
</style>
