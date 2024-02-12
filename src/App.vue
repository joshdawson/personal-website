<script setup lang="ts">
</script>

<template>
  <aside class="menu">
    <div class="circle-image">
      <a href="#about"><img class="me-image" src="./assets/me.jpg" /></a>
    </div>
    
    <p><a class="menu-link" href="#about">ABOUT</a></p>
    <p><a class="menu-link" href="#experience">EXPERIENCE</a></p>
    <p><a class="menu-link" href="#education">EDUCATION</a></p>
    <p><a class="menu-link" href="#skills">SKILLS</a></p>
  </aside>

  <main class="content-container">
    <div class="wrapper-inner">
      <section class="content" id="about">
        <h1>JOSH DAWSON</h1>
        <h4 class="reduced-margin">Freelance software architect & full stack developer</h4>
        <h5 class="sub-heading">Whitley Bay, Tyne & Wear | +447561813818 | <a href="mailto:joshdawson@progmaticsoftware.co.uk">joshdawson@progmaticsoftware.co.uk</a></h5>

        <p>Expert in full stack development using Node.js & Tyescript, GraphQL, Angular and PostgreSQL.</p>
        <p>Skilled in Software Architecture & Design having been involved in multiple projects from the outset.</p>
        <p>Excellent problem solving skills developed over years of solving difficult problems in fast paced environments</p>
        <p>
          <a href="https://www.linkedin.com/in/josh-dawson-674815228/">
            <svg class="social-icon-wrapper" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path class="social-icon" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </p>
      </section>

      <section class="content" id="experience">
        <h1 class="reduced-margin">EXPERIENCE</h1>
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
      </section>

      <section class="content" id="education">
        <h1 class="reduced-margin">EDUCATION</h1>

        <div class="experience-container">
          <div class="experience-detail">
            <h4>York St. John University</h4>

            <p>First class honours in Computer Science (BSc Hons)<br />IEEE published author<br />Vice chancellor award for outstanding achievement</p>
          </div>
          <div class="experience-date">
            <small class="duration">2013 - 2016</small>
          </div>
        </div>

        <div class="experience-container">
          <div class="experience-detail">
            <h4>Heaton Manor School</h4>

            <p>A-levels in Maths, Physics and Computing</p>
          </div>
          <div class="experience-date">
            <small class="duration">2006 - 2013</small>
          </div>
        </div>
      </section>

      <section class="content" id="skills">
        <h1 class="reduced-margin">SKILLS</h1>
        <h4>Technical skills</h4>
        <h5 class="reduced-margin">Expert in</h5>
        <p>JavaScript (Node.js), TypeScript, Jest, Jasmine, Angular, GraphQL</p>

        <h5 class="reduced-margin">Experienced at</h5>
        <p>HTML, CSS, React, AWS, Linux, PostgreSQL, Elasticsearch, OAuth, Vue.js, TDD</p>

        <h5 class="reduced-margin">Exposure to</h5>
        <p>C#, GCP, Docker, Terraform, Azure, Python, AI & LLMs</p>

        <h4 class="reduced-margin">Other skills</h4>
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

  .menu-link {
    color: #ffffffde;
  }

  .menu-link:hover {
    color: #ffffff;
  }

  .circle-image {
    display: inline-block;
    width: 12rem;
    height: 12rem;
    overflow: hidden;
    border-radius: 50%;
    border: .5rem solid #A6A6A8;
    margin: 1rem 0;
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
    scroll-behavior: smooth;
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

  .experience-container {
    display: flex;
  }

  .experience-detail {
    flex: 1 0 10%;
  }

  .experience-date {
    padding: 1rem;
  }

  .sub-heading {
    color: #3E3C53
  }

  .duration {
    margin-left: auto;
    color: #18768C;
  }

  .reduced-margin {
    margin: .5rem 0;
  }

  .experience-detail {
    font-size: .9rem;
  }

  .social-icon {
    fill: #272635;
  }

  .social-icon-wrapper:hover {
    cursor: pointer;

    .social-icon {
      fill: #18768C;
      
    }
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

    .content {
      min-height: 90vh;
    }
  }

  @media (max-width: 640px) {
    .experience-container {
      flex-direction: column;
    }

    .experience-date {
      padding: 0;
    }
  }
</style>
