<script setup lang="ts">
const services = [
  {
    icon: "pi-code",
    title: "Web Development",
    body: "Leveraging cutting-edge technologies, I craft robust and scalable web applications tailored to your specific requirements - from dynamic single-page applications to full SaaS solutions.",
  },
  {
    icon: "pi-server",
    title: "API Development",
    body: "Using my expertise in API design principles, I develop secure and efficient APIs. From custom integrations to comprehensive backend solutions, I ensure your applications are equipped with robust, scalable APIs.",
  },
  {
    icon: "pi-eye",
    title: "Code Reviews",
    body: "Drawing on extensive software engineering and technical leadership experience, I offer comprehensive code review services - identifying vulnerabilities, improving quality, and enhancing overall maintainability.",
  },
  {
    icon: "pi-users",
    title: "Mentoring",
    body: "With a passion for knowledge sharing and talent development, I provide personalised mentoring to developers early in their career - helping them build confidence and develop good engineering habits.",
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
      Ready to build something great?
      <a href="mailto:joshdawson@progmaticsoftware.co.uk"
        ><i class="pi pi-send"></i> Get in touch</a
      >
      to discuss your project.
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
