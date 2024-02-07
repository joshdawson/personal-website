<script setup lang="ts">
</script>

<template>
  <aside class="menu">
    <div class="circle-image">
      <img class="me-image" src="./assets/me.jpg" />
    </div>
    
    <p>ABOUT</p>
    <p>EXPERIENCE</p>
    <p>EDUCATION</p>
    <p>SKILLS</p>
  </aside>

  <main class="content-container">
    <div class="wrapper-inner">
      <section class="content">
        <h1>JOSH DAWSON</h1>
        <h4 class="reduced-margin">Freelance software architect & full stack developer</h4>
        <h5 class="sub-heading">Whitley Bay, Tyne & Wear | +447561813818 | <a href="mailto:joshdawson@progmaticsoftware.co.uk">joshdawson@progmaticsoftware.co.uk</a></h5>

        <p>Highly skilled, driven and passionate software professional with over 7 years experience across the whole software development domain.</p>
        <p>Expert in full stack development using Node.js & Tyescript, GraphQL, Angular and PostgreSQL.</p>
        <p>Skilled in Software Architecture & Design having been involved in multiple projects from the outset.</p>
        <p>Excellent problem solving skills developed over years of solving difficult problems in fast paced environments</p>
      </section>

      <section class="content">
        <h1 class="reduced-margin">EXPERIENCE</h1>
        <h4 class="experience-heading reduced-margin">Technical architect @ NBS<small class="duration"> April 2022 - December 2023</small></h4>
        <p>Provided technical leadership for strategically important technical requirements through prototyping, de-risking, architectural designs and robust technical documentation. </p>

        <h4 class="experience-heading reduced-margin">Senior software engineer @ Ultramed<small class="duration"> August 2021 - February 2022</small></h4>
        <p>First software engineering hire at a fast paced MedTech start up. Introduced automated tests to untested codebases,  helped introduce software development process and contributed to implementation and architecture of new hospital integration system.</p>

        <h4 class="experience-heading reduced-margin">Software developer @ NBS<small class="duration"> September 2016 - August 2021</small></h4>
        <p>Instrumental in helping build new SaaS offering from the ground up. Involved from proof of concept phase, leading development of multiple features within a scrum team alongisde mentoring junior members of the team.</p>
      </section>

      <section class="content">
        <h1 class="reduced-margin">EDUCATION</h1>
        <h4 class="experience-heading reduced-margin">York St. John University<small class="duration"> 2013 - 2016</small></h4>
        <p>First class honours in Computer Science (BSc Hons)<br />IEEE published author<br />Vice chancellor award for outstanding achievement</p>

        <h4 class="experience-heading reduced-margin">Heaton Manor School<small class="duration"> 2006 - 2013</small></h4>
        <p>A-levels in Maths, Physics and Computing</p>
      </section>

      <section class="content">
        <h1 class="reduced-margin">SKILLS</h1>
        <h4>Technical skills</h4>
        <h5 class="reduced-margin">Expert in</h5>
        <p>JavaScript (Node.js), TypeScript, Jest, Jasmine, Angular, GraphQL</p>

        <h5 class="reduced-margin">Experienced at</h5>
        <p>HTML, CSS, React, AWS, Linux, PostgreSQL, Elasticsearch, OAuth, Vue.js, TDD</p>

        <h5 class="reduced-margin">Exposure to</h5>
        <p>C#, GCP, Docker, Terraform, Azure, Python, AI & LLMs</p>

        <h4>Other skills</h4>
        <p>Team leadership, project management, mentoring, time management</p>
      </section>
    </div>
  </main>
</template>

<style scoped>
  .app {
    display: flex;
    height: 100%;
  }

  .circle-image {
    display: inline-block;
    width: 12rem;
    height: 12rem;
    overflow: hidden;
    border-radius: 50%;
    border: .5rem solid #A6A6A8;
  }

  .me-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .menu {
    background-color: #272635;
    flex: 1 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
  }

  .content-container {
    overflow-y: auto;
  }

  .content {
    color: #272635;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    min-height: 100vh;
    border-bottom: 1px solid #A6A6A8;
  }

  .sub-heading {
    color: #3E3C53
  }

  .duration {
    margin-left: auto;
    color: #18768C;
  }

  .experience-heading {
    display: flex;
    align-items: center;
    /* margin: .5rem 0; */
  }

  .reduced-margin {
    margin: .5rem 0;
  }

  .experience-detail {
    font-size: .9rem;
  }

  @media (max-width: 1000px) {
    .circle-image {
      display: none;
    }

    .menu {
      flex-direction: row;

      p {
        margin: 0 .5rem;
      }
    }
  }
</style>
