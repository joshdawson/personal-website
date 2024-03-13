<script setup lang="ts">
// import Card from 'primevue/card';
import Fieldset from 'primevue/fieldset';
</script>

<template>
  <h1>SERVICES</h1>

  <Fieldset class="services-container" legend="Web Development">
    <p>Leveraging cutting-edge technologies, I craft robust and scalable web applications tailored to your specific requirements. I can deliver bespoke solutions ranging from dynamic single-page applications to SaaS solutions.</p>
  </Fieldset>

  <Fieldset class="services-container" legend="API Development">
    <p>Using my expertise API design principles, I develop secure and efficient APIs. From custom API integrations to comprehensive backend solutions, I ensure that your applications are equipped with robust and scalable APIs that power modern digital experiences.</p>
  </Fieldset>

  <Fieldset class="services-container" legend="Code reviews">
    <p>Drawing upon my extensive experience in software engineering and technical leadership, I offer comprehensive code review services aimed at identifying potential vulnerabilities, improving code quality, and enhancing overall maintainability.</p>
  </Fieldset>

  <Fieldset class="services-container" legend="Mentoring">
    <p>With a passion for knowledge sharing and talent development, I provide personalised mentoring and coaching services to aspiring developers and seasoned professionals alike.</p>
  </Fieldset>
  <p></p>
  <p>Feel free to <a class="mail-link" href="mailto:joshdawson@progmaticsoftware.co.uk">reach out</a> to discuss your specific project requirements or to explore how I can assist you in achieving your objectives.</p>
</template>

<style scoped>
  
  .services-container {
    margin-top: 2rem;
  }
  .mail-link {
    font-weight: 400;
  }

  @media (max-width: 640px) {
    .services-heading {
      margin-top: 2rem;
    }
  }
</style>