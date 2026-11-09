<script setup lang="ts"></script>

<template>
  <h1 class="hero-name">Josh Dawson</h1>
  <p class="hero-roles">Fractional Tech Lead · Technical Architect</p>

  <p class="hero-bio">
    I look after the tech for non-technical founders and small teams:
    architecture, infrastructure, security and delivery.
  </p>

  <div class="actions">
    <a class="btn btn-primary" href="mailto:josh@progmaticsoftware.co.uk">
      <i class="pi pi-envelope"></i>
      Get in touch
    </a>
    <a
      class="btn btn-outline btn-icon"
      href="https://www.linkedin.com/in/josh-dawson11/"
      title="LinkedIn"
      aria-label="LinkedIn"
    >
      <i class="pi pi-linkedin"></i>
    </a>
    <a
      class="btn btn-outline btn-icon"
      href="https://github.com/joshdawson"
      title="GitHub"
      aria-label="GitHub"
    >
      <i class="pi pi-github"></i>
    </a>
  </div>

  <p class="email">
    <a href="mailto:josh@progmaticsoftware.co.uk"
      >josh@progmaticsoftware.co.uk</a
    >
  </p>
</template>

<style scoped>
.hero-name {
  margin: 0 0 var(--space-2);
}

.hero-roles {
  margin: 0;
  font-size: var(--text-lg);
  line-height: 1.4;
  color: var(--color-text-muted);
}

.hero-bio {
  max-width: 60ch;
  margin: var(--space-6) 0;
  font-size: var(--text-md);
  line-height: 1.5;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
}

.email {
  margin: var(--space-3) 0 0;
  font-size: var(--text-sm);
}

@media (max-width: 640px) {
  h1 {
    font-size: 2rem;
  }

  .hero-roles {
    font-size: var(--text-md);
  }
}
</style>
