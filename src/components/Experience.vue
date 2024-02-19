<script setup lang="ts">
</script>

<template>
  <h1>EXPERIENCE</h1>
  <div class="experience-container">
    <div class="experience-detail">
      <h4>Technical architect @ NBS</h4>

      <p>Provided technical leadership for strategically important technical requirements through prototyping, de-risking, architectural designs and robust technical documentation. Collaborated with the CTO, Director of Software Delivery, and Software Architect to manage and prioritise workload, ensuring work is delivered to a high quality within an appropriate time frame.</p>
    </div>

    <div class="experience-date">
      <small class="duration">April 2022 - December 2023</small>
    </div>      
  </div>

  <div class="experience-container">
    <div class="experience-detail">
      <h4>Senior software engineer @ Ultramed</h4>

      <p>First software engineering hire at a fast paced MedTech start up. Introduced automated tests to untested codebases,  helped introduce software development process and contributed to implementation and architecture of new hospital integration system.</p>
    </div>
    <div class="experience-date">
      <small class="duration">August 2021 - February 2022</small>
    </div>
  </div>

  <div class="experience-container">
    <div class="experience-detail">
      <h4>Software developer @ NBS</h4>

      <p>Instrumental in helping build new SaaS offering from the ground up. Involved from proof of concept phase, leading development of multiple features within a scrum team alongisde mentoring junior members of the team.</p>
    </div>
    <div class="experience-date">
      <small class="duration">September 2016 - August 2021</small>
    </div>
  </div>
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

  .duration {
    margin-left: auto;
    color: #18768C;
  }

  @media (max-width: 640px) {
    .experience-container {
      flex-direction: column;
      margin-top: 3rem;
    }

    .experience-date {
      padding: 0;
    }
  }
</style>