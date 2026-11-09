<script setup lang="ts">
const services = [
  {
    icon: "pi-users",
    title: "Fractional Tech Lead",
    body: "For non-technical founders who need someone to own the tech. A few days a month covering architecture and infrastructure decisions, security, and keeping delivery on track.",
  },
  {
    icon: "pi-shield",
    title: "AI-Built App Review",
    body: "Built your app with AI tools like Cursor, Lovable or Bolt? A fixed-price review of what's risky (security, data exposure, architecture, scalability, hosting costs), what to fix first, and whether it will hold up as you grow. You get a written report and a walkthrough call.",
  },
  {
    icon: "pi-sitemap",
    title: "Architecture Review",
    body: "Facing a big technical call, such as rebuild or refactor, or how to set up your cloud? A focused review with a written recommendation.",
  },
];
</script>

<template>
  <div class="services-grid">
    <div class="service-card" v-for="(service, i) in services" :key="i">
      <i :class="['pi', service.icon, 'service-icon']" aria-hidden="true"></i>
      <h3 class="service-title">{{ service.title }}</h3>
      <p class="service-body">{{ service.body }}</p>
    </div>
  </div>

  <div class="services-cta">
    <p>Not sure which fits? Get in touch for a chat.</p>
    <a class="btn btn-primary" href="mailto:josh@progmaticsoftware.co.uk">
      <i class="pi pi-envelope"></i>
      Get in touch
    </a>
  </div>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-4);
}

.service-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.service-icon {
  font-size: 24px;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.service-title {
  margin: 0;
  font-size: var(--text-md);
  line-height: 1.25;
}

.service-body {
  margin: var(--space-2) 0 0;
}

.services-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-8);
}

.services-cta p {
  margin: 0;
  font-size: var(--text-md);
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
