<script setup lang="ts">
  import Card from 'primevue/card';
  import videoUrl from '../assets/toon-library-video.mp4';
</script>

<template>
  <h1>PROJECTS</h1>

  <Card class="card-container">
    <template #header>
      <div class="video-container">
        <video class="project-header" controls>
          <source :src="videoUrl" type="video/mp4">
        </video>
      </div>

    </template>

    <template #title>Toon library API</template>
    <template #subtitle>GraphQL API around open library data</template>
    <template #content><strong>Built with: </strong>MongoDB, Nx, Nest.js, TypeScript</template>

    <template #footer>
      <div>
        <small>
          <a href="https://toon-library-api-zano3hgo5q-lz.a.run.app/graphql">View project</a>
          <br />
          <a href="https://github.com/joshdawson/toon-library-api">See code</a></small>
      </div>
    </template>
  </Card>
</template>

<style scoped>
  .card-container {
    max-width: 640px;
    margin-top: 2rem;
  }

  .video-container {
    max-width: 640px;
    overflow: hidden;
    border-radius: 1rem 1rem 0 0;
  }

  .project-header {
    width: 100%;
    height: auto;
  }
</style>