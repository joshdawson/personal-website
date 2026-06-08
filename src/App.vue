<script setup lang="ts">
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Menu from "./components/Menu.vue";
import Services from "./components/Services.vue";
</script>

<template>
  <Menu></Menu>

  <main class="content-container">
    <div class="content-container-inner">
      <section class="content" id="about">
        <div class="section-label">
          <span class="section-title">About</span>
        </div>
        <About></About>
      </section>

      <section class="content" id="experience">
        <span class="section-title">Experience</span>
        <Experience></Experience>
      </section>

      <!-- <section class="content" id="projects">
        <span class="section-title">Projects</span>
        <Projects></Projects>
      </section> -->

      <section class="content" id="services">
        <span class="section-title">Services</span>
        <Services></Services>
      </section>
    </div>
  </main>
</template>

<style scoped>
.content-container {
  overflow-y: auto;
  scroll-behavior: smooth;
  flex: 1;
  background: var(--color-bg);
}

.content-container-inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 var(--space-8);
}

.content {
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  padding: var(--space-16) 0 var(--space-12);
  justify-content: center;
  min-height: 100dvh;
  border-bottom: 1px solid var(--color-border);
}

.content:last-child {
  border-bottom: none;
}

@media (max-width: 1000px) {
  .content-container {
    overflow-y: visible;
  }

  .content-container-inner {
    padding: 0 var(--space-4);
  }

  .content {
    min-height: auto;
    padding: var(--space-12) 0 var(--space-8);
  }
}
</style>
