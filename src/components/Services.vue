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
      <div class="service-icon">
        <i :class="['pi', service.icon]"></i>
      </div>
      <h3 class="service-title">{{ service.title }}</h3>
      <p class="service-body">{{ service.body }}</p>
    </div>
  </div>

  <div class="services-cta">
    <p>
      <a href="mailto:josh@progmaticsoftware.co.uk"
        ><i class="pi pi-send"></i> Get in touch</a
      >
      for a chat.
    </p>
  </div>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-4);
}

.service-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  transition:
    box-shadow var(--transition),
    transform var(--transition),
    border-color var(--transition);
}

.service-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
  border-color: rgba(24, 118, 140, 0.3);
}

.service-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: rgba(24, 118, 140, 0.08);
  border: 1px solid rgba(24, 118, 140, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  flex-shrink: 0;
}

.service-icon .pi {
  font-size: 18px;
  line-height: 1;
}

.service-card:hover .service-icon {
  background: rgba(24, 118, 140, 0.14);
}

.service-title {
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.service-body {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.65;
  margin: 0;
  flex: 1;
}

.services-cta {
  margin-top: var(--space-8);
  padding: var(--space-6);
  background: linear-gradient(
    135deg,
    rgba(24, 118, 140, 0.06) 0%,
    rgba(24, 118, 140, 0.02) 100%
  );
  border: 1px solid rgba(24, 118, 140, 0.15);
  border-radius: var(--radius-lg);
  text-align: center;
}

.services-cta p {
  margin: 0;
  font-size: var(--text-base);
  color: var(--color-text-muted);
}

.services-cta a .pi {
  font-size: 13px;
  vertical-align: middle;
  margin-right: var(--space-1);
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
