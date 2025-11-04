<script setup lang="ts">
import Card from "primevue/card";
</script>

<template>
  <h1>EXPERIENCE</h1>

  <Card class="experience-card">
    <template #title>Software Development Coach @ Skiller Whale</template>
    <template #subtitle>April 2025 - Present</template>

    <template #content>
      <small>Freelance</small>
      <p>
        Delivering coaching sessions on advanced TypeScript topics including
        generics, utility types, and function overloading.
      </p>
    </template>
  </Card>

  <Card class="experience-card">
    <template #title>Full Stack Developer @ Future_find Ltd</template>
    <template #subtitle>July 2025 - Present</template>

    <template #content>
      <small>Freelance</small>
      <p>
        Partnered with a founder in the recruitment industry to design and
        deliver an AI-powered recruitment platform MVP. Defined the cloud
        architecture using IaC and developed the full stack solution, including
        REST APIs and a modern frontend application.
      </p>
    </template>
  </Card>

  <Card class="experience-card">
    <template #title>Backend Developer @ Valifi Ltd</template>
    <template #subtitle>January 2025 - April 2025</template>

    <template #content>
      <small>Freelance</small>
      <p>
        Collaborated with a UK FinTech startup on various ad-hoc tasks including
        expanding the automated testing suite to improve code reliability, and
        developing scheduled jobs to remove manual processes.
      </p>
    </template>
  </Card>

  <Card class="experience-card">
    <template #title>System Architect @ Persona Design</template>
    <template #subtitle>May 2024 - Present</template>

    <template #content>
      <small>Contract</small>
      <p>
        Architected and built a brand new solution for an AI tool for the
        creative industry. Provisioned infrastructure, built CI/CD pipelines,
        and led backend development.
      </p>
    </template>
  </Card>

  <Card class="experience-card">
    <template #title>Technical Lead @ BrandSeed</template>
    <template #subtitle>March 2024 - October 2024</template>

    <template #content>
      <small>Part-time</small>
      <p>
        Offering technical advice on a yet to be released AI-enhanced brand
        strategy tool.
      </p>
    </template>
  </Card>

  <Card class="experience-card">
    <template #title>Technical Architect @ NBS</template>
    <template #subtitle>April 2022 - December 2023</template>

    <template #content>
      <small>Full-time</small>
      <p>
        Provided technical leadership for strategically important technical
        requirements through prototyping, de-risking, architectural designs and
        robust technical documentation.
      </p>
    </template>
  </Card>

  <Card class="experience-card">
    <template #title>Senior Software Engineer @ Ultramed</template>
    <template #subtitle>August 2021 - February 2022</template>

    <template #content>
      <small>Full-time</small>
      <p>
        First software engineering hire at a fast paced MedTech start up.
        Introduced automated tests to untested codebases, helped introduce
        software development process and contributed to implementation and
        architecture of new hospital integration system.
      </p>
    </template>
  </Card>

  <Card class="experience-card">
    <template #title>Software Developer @ NBS</template>
    <template #subtitle>September 2016 - August 2021</template>

    <template #content>
      <small>Full-time</small>
      <p>
        Instrumental in helping build new SaaS offering from the ground up.
        Involved from proof of concept phase, leading development of multiple
        features within a scrum team alongisde mentoring junior members of the
        team.
      </p>
    </template>
  </Card>

  <p class="full-cv">
    For a comprehensive overview of my experience and skills
    <a
      class="cv-link"
      href="https://drive.google.com/file/d/1UJpp17BI0EvO6v5g5bxyIB6ll76jBzzE/view?usp=sharing"
      >explore my full CV</a
    >
  </p>
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
