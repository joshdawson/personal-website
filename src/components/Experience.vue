<script setup lang="ts">
const jobs = [
  {
    title: "Software Developer",
    company: "ethy",
    period: "November 2025 - Present",
    type: "Contract",
    description:
      "Owning the technical delivery of a SaaS product, including feature development, maintenance, and production releases.",
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
    period: "April 2025 - Present",
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
    company: "Persona Design",
    period: "May 2024 - Present",
    type: "Contract",
    description:
      "Architected and built a brand new solution for an AI tool for the creative industry. Provisioned infrastructure, built CI/CD pipelines, and led backend development.",
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
  <div class="timeline">
    <div class="timeline-item" v-for="(job, i) in jobs" :key="i">
      <div class="timeline-line">
        <div class="timeline-dot"></div>
        <div class="timeline-track" v-if="i < jobs.length - 1"></div>
      </div>

      <div class="timeline-card">
        <div class="card-header">
          <div class="card-title-group">
            <span class="job-title">{{ job.title }}</span>
            <span v-if="job.company" class="job-company"
              >@ {{ job.company }}</span
            >
          </div>
          <span class="job-badge">{{ job.type }}</span>
        </div>
        <span class="job-period"
          ><i class="pi pi-calendar"></i> {{ job.period }}</span
        >
        <p class="job-desc">{{ job.description }}</p>
      </div>
    </div>
  </div>

  <p class="full-cv">
    For a comprehensive overview of my experience,
    <a
      href="https://drive.google.com/file/d/1UJpp17BI0EvO6v5g5bxyIB6ll76jBzzE/view?usp=sharing"
      >explore my full CV <i class="pi pi-external-link"></i
    ></a>
  </p>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 0 var(--space-4);
}

/* ── Left rail ── */
.timeline-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-accent);
  border: 2px solid var(--color-bg);
  box-shadow: 0 0 0 2px var(--color-accent);
  flex-shrink: 0;
  transition:
    background var(--transition),
    box-shadow var(--transition);
}

.timeline-item:hover .timeline-dot {
  background: var(--color-accent-hover);
  box-shadow: 0 0 0 3px rgba(24, 118, 140, 0.25);
}

.timeline-track {
  flex: 1;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--color-accent),
    var(--color-border)
  );
  opacity: 0.25;
  margin: var(--space-2) 0;
}

/* ── Card ── */
.timeline-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-6);
  margin-bottom: var(--space-4);
  box-shadow: var(--shadow-sm);
  transition:
    box-shadow var(--transition),
    transform var(--transition),
    border-color var(--transition);
}

.timeline-item:hover .timeline-card {
  box-shadow: var(--shadow-md);
  transform: translateX(3px);
  border-color: rgba(24, 118, 140, 0.25);
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  margin-bottom: var(--space-1);
}

.card-title-group {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2);
}

.job-title {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text);
}

.job-company {
  font-size: var(--text-sm);
  color: var(--color-accent);
  font-weight: 500;
}

.job-badge {
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-accent);
  background: rgba(24, 118, 140, 0.08);
  border: 1px solid rgba(24, 118, 140, 0.2);
  border-radius: var(--radius-full);
  padding: 2px var(--space-3);
  white-space: nowrap;
  flex-shrink: 0;
}

.job-period {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.02em;
}

.job-period .pi {
  font-size: 11px;
  opacity: 0.7;
  line-height: 1;
}

.job-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.65;
  margin: var(--space-2) 0 0;
}

.full-cv {
  margin-top: var(--space-6);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.full-cv a .pi {
  font-size: 12px;
  vertical-align: middle;
  margin-left: var(--space-1);
}

@media (max-width: 640px) {
  .timeline-item {
    grid-template-columns: 20px 1fr;
  }

  .timeline-card {
    padding: var(--space-4);
  }

  .card-header {
    flex-direction: column;
    gap: var(--space-2);
  }
}
</style>
