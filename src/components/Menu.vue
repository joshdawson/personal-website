<script setup lang="ts">
</script>

<template>
    <aside class="menu">
    <div class="circle-image">
      <a href="#about"><img class="me-image" src="/me.jpg" /></a>
    </div>
    
    <p><a class="menu-link" href="#about">ABOUT</a></p>
    <p><a class="menu-link" href="#projects">PROJECTS</a></p>
    <p><a class="menu-link" href="#services">SERVICES</a></p>
    <p><a class="menu-link" href="#experience">EXPERIENCE</a></p>
  </aside>
</template>

<style scoped>
  .menu {
    background-color: var(--theme-dark);
    flex: 1 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
    min-height: 4rem;
  }

  .circle-image {
    display: inline-block;
    width: 12rem;
    height: 12rem;
    overflow: hidden;
    border-radius: 50%;
    border: .5rem solid var(--theme-gray);
    margin: 1rem 0;
  }

  .me-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .menu-link {
    color: var(--theme-white-low-opacity);
  }

  .menu-link:hover {
    color: var(--theme-white);
  }

  @media (max-width: 1000px) {
    .circle-image {
      display: none;
    }

    .menu {
      flex-direction: row;

      p {
        margin: 0 .4rem;
      }
    }
  }
</style>