<script setup lang="ts">
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Menu from "./components/Menu.vue";
import Services from "./components/Services.vue";
</script>

<template>
  <Menu></Menu>

  <main class="content-container">
    <section class="content" id="about">
      <About></About>
    </section>

    <section class="content" id="services">
      <h2 class="section-title">Services</h2>
      <Services></Services>
    </section>

    <section class="content" id="experience">
      <h2 class="section-title">Experience</h2>
      <Experience></Experience>
    </section>

    <!-- <section class="content" id="projects">
      <h2 class="section-title">Projects</h2>
      <Projects></Projects>
    </section> -->
  </main>
</template>

<style scoped>
.content-container {
  max-width: 920px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.content {
  padding: var(--space-12) 0;
  border-bottom: 1px solid var(--color-border);
  scroll-margin-top: var(--header-height);
}

.content:last-child {
  border-bottom: none;
}

@media (max-width: 640px) {
  .content-container {
    padding: 0 var(--space-4);
  }

  .content {
    padding: var(--space-8) 0;
  }
}
</style>
