<script setup lang="ts">
const jobs = [
  {
    title: "Technical Lead",
    company: null,
    period: "February 2026 - October 2026",
    type: "Freelance",
    description:
      "Leading the end-to-end migration and modernisation of a legacy production platform onto a current, secure, and supportable stack. Working across the full system: database, caching, search, web server, and background processing.",
  },
  {
    title: "Fractional Tech Lead",
    company: "ethy",
    period: "November 2025 - Present",
    type: "Contract",
    description:
      "Sole technical owner of a live SaaS platform. Delivered its pivot to a vendor marketplace, served under the existing domain through a reverse proxy with SEO preserved, alongside ongoing maintenance, security upgrades and feature development.",
  },
  {
    title: "Full Stack Developer",
    company: null,
    period: "July 2025 - November 2025",
    type: "Freelance",
    description:
      "Collaborated with a founder in the recruitment industry to design and deliver an AI-powered recruitment platform MVP. Defined the cloud architecture using IaC and developed the full stack solution, including REST APIs and a modern frontend application.",
  },
  {
    title: "Software Development Coach",
    company: "Skiller Whale",
    period: "April 2025 - May 2025",
    type: "Freelance",
    description:
      "Delivering coaching sessions on advanced TypeScript topics including generics, utility types, and function overloading.",
  },
  {
    title: "Backend Developer",
    company: "Valifi Ltd",
    period: "January 2025 - April 2025",
    type: "Freelance",
    description:
      "Worked with a UK FinTech startup on various ad-hoc tasks including expanding the automated testing suite to improve code reliability, and developing scheduled jobs to remove manual processes.",
  },
  {
    title: "System Architect",
    company: "Persona Dynamics",
    period: "May 2024 - Present",
    type: "Contract",
    description:
      "Own the backend and infrastructure for an early-stage AI startup whose platform turns research documents into AI personas that users can chat with. Designed and built the platform from scratch, and make the technical decisions behind it: architecture, hosting, security, running costs and choice of AI providers.",
  },
  {
    title: "Technical Lead",
    company: "BrandSeed",
    period: "March 2024 - October 2024",
    type: "Part-time",
    description:
      "Offering technical advice on a yet to be released AI-enhanced brand strategy tool.",
  },
  {
    title: "Technical Architect",
    company: "NBS",
    period: "April 2022 - December 2023",
    type: "Full-time",
    description:
      "Provided technical leadership for strategically important technical requirements through prototyping, de-risking, architectural designs and robust technical documentation.",
  },
  {
    title: "Senior Software Engineer",
    company: "Ultramed",
    period: "August 2021 - February 2022",
    type: "Full-time",
    description:
      "First software engineering hire at a fast paced MedTech start up. Introduced automated tests to untested codebases, helped introduce software development process and contributed to implementation and architecture of new hospital integration system.",
  },
  {
    title: "Software Developer",
    company: "NBS",
    period: "September 2016 - August 2021",
    type: "Full-time",
    description:
      "Instrumental in helping build new SaaS offering from the ground up. Involved from proof of concept phase, leading development of multiple features within a scrum team alongside mentoring junior members of the team.",
  },
];
</script>

<template>
  <ol class="timeline">
    <li
      class="timeline-step"
      v-for="(job, i) in jobs"
      :key="i"
      :class="{ current: job.period.endsWith('Present') }"
    >
      <div class="step-period">{{ job.period }}</div>
      <div class="step-marker" aria-hidden="true"></div>
      <div class="step-body">
        <div class="step-heading">
          <h3 class="job-title">
            {{ job.title }}
            <span v-if="job.company" class="job-company"
              >· {{ job.company }}</span
            >
          </h3>
          <span class="label">{{ job.type }}</span>
        </div>
        <p class="job-desc">{{ job.description }}</p>
      </div>
    </li>
  </ol>

  <a
    class="btn btn-outline full-cv"
    href="https://drive.google.com/file/d/1UJpp17BI0EvO6v5g5bxyIB6ll76jBzzE/view?usp=sharing"
  >
    View full CV <i class="pi pi-external-link"></i>
  </a>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}

.timeline-step {
  display: grid;
  grid-template-columns: 180px 12px 1fr;
  column-gap: var(--space-4);
  position: relative;
}

/* connecting line, runs through the marker column */
.timeline-step::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(180px + var(--space-4) + 5.5px);
  width: 1px;
  background: var(--color-border);
}

.timeline-step:first-child::before {
  top: 4px;
}

.timeline-step:last-child::before {
  bottom: auto;
  height: 4px;
}

.step-period {
  padding-top: 1px;
  font-size: var(--text-sm);
  color: var(--color-text-subtle);
  text-align: right;
}

.step-marker {
  position: relative;
  width: 12px;
  height: 12px;
  margin-top: 4px;
  border: 1px solid var(--color-accent);
  border-radius: 50%;
  background: var(--color-bg);
}

.current .step-marker {
  background: var(--color-accent);
}

.step-body {
  padding-bottom: var(--space-6);
}

.step-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
}

.job-title {
  margin: 0;
  font-size: var(--text-md);
  line-height: 1.25;
}

.job-company {
  font-weight: 400;
  color: var(--color-text-muted);
}

.job-desc {
  margin: var(--space-2) 0 0;
  max-width: 65ch;
}

.full-cv {
  margin-top: var(--space-4);
}

@media (max-width: 640px) {
  .timeline-step {
    grid-template-columns: 12px 1fr;
  }

  .timeline-step::before {
    left: 5.5px;
  }

  .step-period {
    grid-column: 2;
    grid-row: 1;
    text-align: left;
    padding: 0 0 var(--space-1);
  }

  .step-marker {
    grid-column: 1;
    grid-row: 1;
  }

  .step-body {
    grid-column: 2;
  }
}
</style>
