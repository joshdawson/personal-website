<script setup lang="ts">
import Card from 'primevue/card';
</script>

<template>
  <h1>EXPERIENCE</h1>

  <Card class="experience-card">
    <template #title>System Architect @ Persona Design</template>
    <template #subtitle>May 2024 - Present</template>

    <template #content>
      <small>Contract</small>
      <p>Building and architecting feasibility study for AI tool for the creative industry.</p>
    </template>
  </Card>

  <Card class="experience-card">
    <template #title>Technical architect @ NBS</template>
    <template #subtitle>April 2022 - December 2023</template>

    <template #content>
      <small>Full-time</small>
      <p>Provided technical leadership for strategically important technical requirements through prototyping, de-risking, architectural designs and robust technical documentation.</p>
    </template>
  </Card>

  <Card class="experience-card">
    <template #title>Senior software engineer @ Ultramed</template>
    <template #subtitle>August 2021 - February 2022</template>

    <template #content>
      <small>Full-time</small>
      <p>First software engineering hire at a fast paced MedTech start up. Introduced automated tests to untested codebases,  helped introduce software development process and contributed to implementation and architecture of new hospital integration system.</p>
    </template>
  </Card>

  <Card class="experience-card">
    <template #title>Software developer @ NBS</template>
    <template #subtitle>September 2016 - August 2021</template>

    <template #content>
      <small>Full-time</small>
      <p>Instrumental in helping build new SaaS offering from the ground up. Involved from proof of concept phase, leading development of multiple features within a scrum team alongisde mentoring junior members of the team.</p>
    </template>
  </Card>

  <p class="full-cv">For a comprehensive overview of my experience and skills <a class="cv-link" href="https://drive.google.com/file/d/1-EUkM-y_3mX_7bQ47fuZZypTP5varUQw/view?usp=sharing">explore my full CV</a> </p>
</template>

<style scoped>
  .experience-card {
    margin-top: 2rem;
  }

  .experience-title {
    color: var(--theme-highlight);
  }

  .cv-link {
    font-weight: 400;
  }

  .full-cv {
    margin-top: 2rem;
  }
</style>