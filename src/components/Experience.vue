<script setup lang="ts">
</script>

<template>
  <h1>EXPERIENCE</h1>
  <div class="experience-container">
    <div class="experience-detail">
      <h4 class="experience-heading">Technical architect @ NBS</h4>

      <p>Provided technical leadership for strategically important technical requirements through prototyping, de-risking, architectural designs and robust technical documentation.</p>
    </div>

    <div class="experience-date">
      <small class="duration">April 2022 - December 2023</small>
    </div>      
  </div>

  <div class="experience-container">
    <div class="experience-detail">
      <h4 class="experience-heading">Senior software engineer @ Ultramed</h4>

      <p>First software engineering hire at a fast paced MedTech start up. Introduced automated tests to untested codebases,  helped introduce software development process and contributed to implementation and architecture of new hospital integration system.</p>
    </div>
    <div class="experience-date">
      <small class="duration">August 2021 - February 2022</small>
    </div>
  </div>

  <div class="experience-container">
    <div class="experience-detail">
      <h4 class="experience-heading">Software developer @ NBS</h4>

      <p>Instrumental in helping build new SaaS offering from the ground up. Involved from proof of concept phase, leading development of multiple features within a scrum team alongisde mentoring junior members of the team.</p>
    </div>
    <div class="experience-date">
      <small class="duration">September 2016 - August 2021</small>
    </div>
  </div>

  <p class="full-cv">For a comprehensive overview of my experience and skills <a class="cv-link" href="https://drive.google.com/file/d/1-EUkM-y_3mX_7bQ47fuZZypTP5varUQw/view?usp=sharing">explore my full CV</a> </p>
</template>

<style scoped>
  .experience-container {
    display: flex;
    margin-top: 1rem;
  }

  .experience-detail {
    flex: 1 0 10%;
  }

  .experience-date {
    padding: 1rem;
  }

  .experience-heading {
    color: var(--theme-highlight);
  }

  .duration {
    margin-left: auto;
    color: var(--theme-gray);
  }

  .cv-link {
    font-weight: 400;
  }

  @media (max-width: 640px) {
    .experience-container {
      flex-direction: column;
      margin-top: 3rem;
    }

    .experience-date {
      padding: 0;
    }

    .full-cv {
      margin-top: 2rem;
    }
  }
</style>