<script setup lang="ts">
</script>

<template>
  <div class="about-hero">
    <h1 class="hero-name">Josh Dawson</h1>
    <p class="hero-roles">
      <span class="role-pill">Fractional Tech Lead</span>
      <span class="role-dot">·</span>
      <span class="role-pill">Technical Architect</span>
      <span class="role-dot">·</span>
      <span class="role-pill">Full Stack Developer</span>
    </p>
  </div>

  <p class="hero-bio">I enjoy working in startups, specialising in building MVPs and getting new products off the ground.</p>

  <a class="contact-link" href="mailto:joshdawson@progmaticsoftware.co.uk">
    <i class="pi pi-envelope"></i>
    joshdawson@progmaticsoftware.co.uk
  </a>

  <div class="social-row">
    <a class="social-btn" href="https://www.linkedin.com/in/josh-dawson-674815228/" title="LinkedIn" aria-label="LinkedIn">
      <i class="pi pi-linkedin"></i>
    </a>

    <a class="social-btn" href="https://github.com/joshdawson" title="GitHub" aria-label="GitHub">
      <i class="pi pi-github"></i>
    </a>

    <a class="social-btn" href="https://www.upwork.com/freelancers/~012b06113d1327cf8e?mp_source=share" title="Upwork" aria-label="Upwork">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="m357.2 296.9c-17 0-33-7.2-47.4-18.9l3.5-16.6.1-.6c3.2-17.6 13.1-47.2 43.8-47.2 23 0 41.7 18.7 41.7 41.7s-18.7 41.6-41.7 41.6zm0-125.5c-39.2 0-69.5 25.4-81.9 67.3-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0 21.7-17.6 39.3-39.3 39.3s-39.3-17.6-39.3-39.3v-109.8h-42.1v109.7c0 44.9 36.5 81.8 81.4 81.8s81.4-36.9 81.4-81.8v-18.4c8.2 17.1 18.2 34.4 30.4 49.6l-25.8 121.4h43.1l18.7-88c16.4 10.5 35.2 17.1 56.8 17.1 46.2 0 83.8-37.8 83.8-84.1.1-46.1-37.4-83.7-83.6-83.7"/>
      </svg>
    </a>

    <a class="social-btn codementor" href="https://www.codementor.io/@joshdawson661?refer=badge" title="Codementor" aria-label="Codementor">
      <img src="https://www.codementor.io/m-badges/joshdawson661/im-a-cm-b.svg" alt="Codementor badge" />
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
    background: linear-gradient(135deg, var(--theme-dark) 0%, var(--theme-highlight) 100%);
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
    background: rgba(24,118,140,0.08);
    border: 1px solid rgba(24,118,140,0.18);
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
    transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
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

  .social-btn.codementor {
    width: auto;
    padding: 0 var(--space-3);
  }

  .social-btn.codementor img {
    height: 24px;
    width: auto;
  }

  @media (max-width: 640px) {
    .role-dot { display: none; }
    .hero-bio { font-size: var(--text-base); }
  }
</style>
