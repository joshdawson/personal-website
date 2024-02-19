<script setup lang="ts">
  import Menu from './components/Menu.vue';
  import About from './components/About.vue';
  import Experience from './components/Experience.vue';
  import Services from './components/Services.vue';
  import Skills from './components/Skills.vue';
</script>

<template>
  <Menu></Menu>

  <main class="content-container">
    <div class="content-container-inner">
      <section class="content" id="about">
        <About></About>
      </section>

      <section class="content" id="experience">
        <Experience></Experience>
      </section>

      <section class="content" id="services">
        <Services></Services>
      </section>

      <section class="content" id="skills">
        <Skills></Skills>
      </section>
    </div>
  </main>
</template>

<style scoped>
  .app {
    display: flex;
    height: 100%;
  }

  .content-container {
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  .content-container-inner {
    padding: 0 2rem;
  }

  .content {
    color: #272635;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    min-height: 100dvh;
    border-bottom: 1px solid #A6A6A8;
  }

  @media (max-width: 1000px) {
    .content-container-inner {
      padding: 0;
    }

    .content {
      min-height: 90dvh;
    }
  }
</style>
