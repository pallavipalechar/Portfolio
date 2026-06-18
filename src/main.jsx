import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import './styles.css';
import profilePhoto from './assets/pallavi-profile.jpeg';
import artwork01 from './assets/artworks/artwork-01.jpeg';
import artwork02 from './assets/artworks/artwork-02.jpeg';
import artwork03 from './assets/artworks/artwork-03.jpeg';
import artwork04 from './assets/artworks/artwork-04.jpeg';
import artwork05 from './assets/artworks/artwork-05.jpeg';
import artwork06 from './assets/artworks/artwork-06.jpeg';
import artwork07 from './assets/artworks/artwork-07.jpeg';
import artwork08 from './assets/artworks/artwork-08.jpeg';
import artwork09 from './assets/artworks/artwork-09.jpeg';
import artwork10 from './assets/artworks/artwork-10.jpeg';
import artwork11 from './assets/artworks/artwork-11.jpeg';
import artwork12 from './assets/artworks/artwork-12.jpeg';
import artwork13 from './assets/artworks/artwork-13.jpeg';
import artwork14 from './assets/artworks/artwork-14.jpeg';
import artwork15 from './assets/artworks/artwork-15.jpeg';
import artwork16 from './assets/artworks/artwork-16.jpeg';
import artwork17 from './assets/artworks/artwork-17.jpeg';

const profile = {
  name: 'Pallavi P V',
  role: 'Software Engineer | React Developer | PLM Specialist',
  location: 'United States ',
  phone: '+1 972-710-3153',
  email: 'pallavi12palechar@gmail.com',
  linkedin: 'https://linkedin.com/in/pallavi-palechar',
  github: 'https://github.com/pallavipalechar',
  summary:
    'Software Developer with 3+ years of industrial experience building responsive web applications and enterprise PLM solutions. MCA graduate with expertise in React.js, Next.js, and AI/ML concepts. Currently expanding expertise in Generative AI, Prompt Engineering, and DevOps to build intelligent and scalable software solutions.',
};

const highlights = [
  '3+ years industrial experience',
  'React.js, Next.js, and AI/ML concepts',
  'Enterprise PLM and Teamcenter delivery',
  'Prompt Engineering and DevOps learner',
];

const experience = [
  {
    role: 'Freelance Developer',
    company: 'Independent',
    period: 'January 2025 - Present',
    location: 'Remote',
    bullets: [
      'Engineered high-performance web applications using React.js and JavaScript (ES6+), improving mobile responsiveness by 30% and ensuring 100% cross-browser compatibility.',
      'Architected dynamic UIs by integrating RESTful APIs, automating data fetching processes, and reducing manual data handling by 40%.',
      'Developed a library of reusable UI components and optimized frontend assets, increasing development velocity by 25% and reducing page load times by 35%.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'EZ Technologies',
    period: 'June 2024 - December 2024',
    location: 'Mangalore, Karnataka',
    bullets: [
      'Built responsive web experiences with modern frontend patterns, reusable components, and performance-conscious implementation.',
      'Collaborated across design and development workflows to ship accessible interfaces and reliable business features.',
    ],
  },
  {
    role: 'Teamcenter Developer (PLM)',
    company: 'Tata Consultancy Services (TCS)',
    period: 'September 2022 - January 2024',
    location: 'Bangalore, India',
    bullets: [
      'Implemented enterprise-grade PLM solutions using Siemens Teamcenter, streamlining complex business processes and improving workflow efficiency by 20%.',
      'Enhanced 2-tier and 4-tier architectures through rigorous system monitoring and configuration, resulting in a 15% reduction in system downtime.',
      'Executed advanced BMIDE customizations and engineered .NET REST APIs for automated workflows, eliminating 30% of manual administrative overhead.',
    ],
  },
];

const projects = [
  {
    name: 'IronGuard Chat',
    date: 'May 2026',
    stack: 'Python, React.js',
    link: 'https://github.com/pallavipalechar/IronGuard-Chat',
    open: 'https://ironguard-chat.vercel.app/',
    bullets: [
      'Developed a full-stack AI chatbot using React frontend and Flask backend integrated with GPT-2 Medium from Hugging Face, improving response handling efficiency by 70%.',
      'Implemented a risk analysis filter system to detect and block harmful prompts before model processing.',
    ],
  },
  {
    name: 'Kalpavedike',
    date: 'January 2026',
    stack: 'Next.js, Tailwind CSS',
    link: 'https://github.com/pallavipalechar/Kalpavedike',
    open: 'https://kalpavedike.vercel.app/',
    bullets: [
      'Built and deployed a fully functional website, improving accessibility and user engagement for devotees.',
      'Improved performance and responsiveness, achieving 30% faster load times and ensuring a seamless experience across devices.',
    ],
  },
  {
    name: 'Attendance Management System',
    date: 'August 2025',
    stack: 'Python, PHP, JavaScript, CSS, Bootstrap',
    link: 'https://github.com/pallavipalechar/EZWitness',
    open: 'https://ezwitness.vercel.app/',
    bullets: [
      'Designed responsive frontend interfaces for a face recognition-based attendance system, improving user interaction and usability by 30%.',
      'Developed and strengthened UI/UX components, enhancing system efficiency and reducing attendance processing time by 25%.',
    ],
  },
];

const artworks = [
  { title: 'Leaf Ganesha Mandala', image: artwork01, orientation: 'portrait' },
  { title: 'Sunflower Ink Study', image: artwork02, orientation: 'portrait' },
  { title: 'Swan Mandala', image: artwork03, orientation: 'portrait' },
  { title: 'Krishna Line Art', image: artwork04, orientation: 'portrait' },
  { title: 'Mandala Bloom', image: artwork05, orientation: 'square' },
  { title: 'Elephant Pattern Study', image: artwork06, orientation: 'landscape' },
  { title: 'Krishna Portrait', image: artwork07, orientation: 'portrait' },
  { title: 'Ganesha Crown Detail', image: artwork08, orientation: 'portrait' },
  { title: 'Buddha Sketchbook Art', image: artwork09, orientation: 'portrait' },
  { title: 'Temple Motif Study', image: artwork10, orientation: 'landscape' },
  { title: 'Peacock Ink Work', image: artwork11, orientation: 'portrait' },
  { title: 'Durga Face Study', image: artwork12, orientation: 'portrait' },
  { title: 'Flowing Hair Pattern', image: artwork13, orientation: 'portrait' },
  { title: 'Owl Mandala', image: artwork14, orientation: 'portrait' },
  { title: 'Dreamcatcher Feather Art', image: artwork15, orientation: 'landscape' },
  { title: 'Ganesha Mandala 2026', image: artwork16, orientation: 'portrait' },
  { title: 'Eagle Mandala', image: artwork17, orientation: 'portrait' },
];

const skillGroups = [
  {
    title: 'Technologies & Frameworks',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Jasmine'],
  },
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'C', 'C++', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases & Enterprise Platforms',
    skills: ['MongoDB', 'MySQL', 'Siemens Teamcenter', 'Active Workspace', 'BMIDE', 'ERPNext'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Visual Studio Code', 'Git', 'GitHub', 'Postman', 'Figma', 'WordPress', 'Jira', 'Vercel'],
  },
  {
    title: 'Concepts',
    skills: ['Web/UI Development', 'Web Components', 'Wireframing', 'Prototyping', 'Agile', 'Debugging', 'AI/ML'],
  },
];

const certifications = [
  { name: 'Claude 101',
    issuer: 'Anthropic',
    focus: 'Claude AI, Prompt EngineeringAI-Assisted Writing, Research & Analysis, Productivity Workflows'
  },
  {
    name: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    focus: 'AI Fundamentals, AI Literacy, Responsible AI, AI Applications, Prompt Engineering, Critical Evaluation of AI Outputs',
  },
  {
    name: 'AI Whisperer - Crafting Effective Prompts',
    issuer: 'University of South Florida',
    focus: 'Generative AI, Prompt Engineering',
  },
  {
    name: 'AI and Career Empowerment',
    issuer: 'University of Maryland',
    focus: 'AI Fundamentals, Career Development',
  },
  {
    name: 'UI/UX Design',
    issuer: 'Great Learning',
    focus: 'User Interface Design, User Experience',
  },
  {
    name: 'UX Foundations',
    issuer: 'LinkedIn Learning',
    focus: 'Interaction Design, Interaction Design Principles',
  },
  {
    name: 'Front-End Development (HTML & CSS, JavaScript)',
    issuer: 'Great Learning',
    focus: 'Web Development, Responsive Design',
  },
];

function ContactLink({ href, icon: Icon, label }) {
  return (
    <a className="contact-link" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      <Icon size={18} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Pallavi P V home">
          PP
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
           <a href="#artworks">Artworks</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              React Developer | PLM Engineer | AI Enthusiast
            </p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View Projects
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="secondary-button" href="/PallaviPV_Resume.pdf" download>
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile portrait">
            <img
              src={profilePhoto}
              alt="Pallavi P V"
              style={{ filter: "grayscale(100%) contrast(110%)" }}
            />
          </div>
        </section>

        <section className="stats-grid" aria-label="Career highlights">
          {highlights.map((item) => (
            <div className="stat" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </section>

        <Section id="experience" eyebrow="Career" title="Professional Experience">
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.role}`}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="item-header">
                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.company}</p>
                    </div>
                    <div className="meta">
                      <span>{job.period}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Selected Work" title="Projects">
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <Code2 size={22} aria-hidden="true" />
                  <span>{project.date}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="stack">{project.stack}</p>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Repository
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a href={project.open} target="_blank" rel="noreferrer">
                  Live Demo
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </Section>

       
        <Section id="skills" eyebrow="Toolkit" title="Technical Skills">
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-panel" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="certifications" eyebrow="Learning" title="Certifications">
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article className="cert-card" key={cert.name}>
                <Award size={20} aria-hidden="true" />
                <div>
                  <h3>{cert.name}</h3>
                  <p>{cert.focus}</p>
                  <span>{cert.issuer}</span>
                </div>
              </article>
            ))}
          </div>
        </Section>

    <Section id="artworks" eyebrow="Creative Work" title="My Artworks">
             <center> <div className="artwork-intro">
                <p>
                  A collection of hand-drawn mandala, devotional, floral, and nature-inspired ink artworks that reflect my
                  eye for detail, symmetry, and visual composition.
                </p>
              </div></center>
              <div className="artwork-grid">
                {artworks.map((artwork, index) => (
                  <figure className={`artwork-card ${artwork.orientation}`} key={artwork.title}>
                    <img src={artwork.image} loading={index > 5 ? 'lazy' : 'eager'} />
                    <figcaption>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                     
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Section>


        <section className="contact-section" id="contact">
          <div>
            <span className="section-kicker">Contact</span>
            <h2>Let’s build thoughtful, scalable software.</h2>
            <p>
              I’m interested in frontend engineering, full-stack web applications, AI-enabled products, and enterprise
              platform work.
            </p>
          </div>
          <div className="contact-panel">
            <ContactLink href={`mailto:${profile.email}`} icon={Mail} label={profile.email} />
            <ContactLink href={`tel:${profile.phone.replaceAll(' ', '')}`} icon={Phone} label={profile.phone} />
            <ContactLink href={profile.linkedin} icon={Linkedin} label="linkedin.com/pallavi-palechar" />
            <ContactLink href={profile.github} icon={Github} label="github.com/pallavipalechar" />
            <div className="contact-link">
              <MapPin size={18} aria-hidden="true" />
              <span>{profile.location}</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>{profile.name}</span>
        <span>Portfolio</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
