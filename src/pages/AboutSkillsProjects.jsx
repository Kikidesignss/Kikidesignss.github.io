import React, { useEffect, useState } from 'react';
import PopupHint from '../components/PopUpHint';
import ProjectCard from '../components/ProjectCard';
import { Link } from "react-router-dom";
import { title } from 'framer-motion/client';

const projects = [
  {
    id: 1,
    title: 'Anime Hub',
    description: 'Anime Hub is a fan-centered web app dedicated to exploring and celebrating the world of anime through community interaction. Users can create posts, leave reviews, add comments, upvote, and share recommendations in a fun, engaging space to connect with other anime fans.',
    skills: ['React.js + Vite', 'React Router', 'JavaScript', 'Supabase (Database + Auth)', 'CSS3 (Responsive Design)', 'State Management with Hooks', 'CRUD Operations'],
    purpose: 'Final project for CodePath WEB102 — showcasing front-end development, database integration, and interactive UI/UX features.',
    features: [
      'Create, edit, and delete posts with title, text, and image URL',
      'Home feed displaying posts with title, creation time, and upvote count',
      'Sorting posts by creation time or upvotes',
      'Search functionality to filter posts by title',
      'Individual post pages with full content, images, and comments',
      'Users can upvote posts any number of times',
      'Commenting system for discussion under posts'
    ],
    thumbnail: '/AnimeHub.png',
    demoLink: 'https://animes-hub.netlify.app',
  }
  ,
  {
    id: 2,
    title: 'Ghibli Dashboard',
    description: 'A Studio Ghibli dashboard that displays a list of films with details such as title, genre, and rating. Users can view individual movie details, filter content, and toggle visual charts to explore insights. Includes a sidebar for smooth navigation between the main dashboard and detail views.',
    skills: ['React.js', 'React Router','JavaScript', 'CSS', 'API Integration', 'Data Visualization', 'Recharts', 'Responsive Design'],
    purpose: 'To create an interactive and visually engaging dashboard that allows users to explore Studio Ghibli films while practicing React fundamentals, API data handling, and data visualization techniques.',
    features: [
      'Film list with detailed information (title, genre, rating)',
      'Unique detail view for each film with extra information',
      'Sidebar navigation shared across all views',
      'Direct, unique URLs for individual movie pages',
      'Two interactive charts displaying dataset insights',
      'Ability to toggle between different data visualizations',
      'Filter and explore data with an engaging dashboard interface',
    ],
    thumbnail: '/Dashboard.png',
    demoLink: 'https://ghiblidashboard.netlify.app',
  }
  ,
  {
    id: 3,
    title: 'K-pop Group Showcase',
    description: 'A community board web app that highlights various K-pop groups through informative, responsive cards.',
    skills: ['React.js', 'JavaScript', 'CSS', 'Responsive Design'],
    purpose: 'Built to showcase a themed, responsive card-based layout for a Kpop community board. Where users can scroll through different Kpop groups and get to learn more about them.',
    thumbnail: '/Kpop.png',
    demoLink: 'https://kpopshowcase.netlify.app',
    features: [
      'Cohesive K-pop themed community board',
      'Header/title describing the theme',
      'At least 10 responsive cards displaying K-pop groups',
      'Each card includes group details: name, debut year, agency, description',
      'Buttons/links to learn more about each group',
      'Responsive design for desktop and mobile',
      'Images added to each card for visual clarity'
    ]
  }
  ,
  {
    id: 4,
    title: 'Self Help Website MockUp',
    description: 'A subscription service offering personalized self-care packages tailored to individuals interests, lifestyles, and goals. With a focus on enhancing well-being, SelfHelp stands out with its commitment to eco-friendly practices, charitable giving, and community engagement. By leveraging advanced customization, sustainable packaging, and partnerships with mental health organizations, SelfHelp aims to empower individuals to prioritize self-care while making a positive impact on the planet and society.',
    skills: ['Canva', 'Figma'],
    purpose: 'A commuication course project to pitch users a product. In this case, self care products will help those who need it.',
    thumbnail: '/selfhelp.png',
    demoLink: 'https://selfhelp1.my.canva.site',
    features: [
        'Tagline, short description of the subscription service, and a “Learn More” CTA.',
        'About & Mission – Personalized self-care delivery, fast-paced world solution, and advanced algorithm-based customization.',
        'Customization & Questionnaire – Personalized packages based on a survey; Subscription Box Questionnaire (Not Open).',
        'Diverse Product Range – Skincare, stress-relief tools, snacks, movies, and food suggestions tailored to subscribers’ interests.',
        'Membership Benefits & Pricing – Convenient doorstep delivery, affordable $14.99/month plan, value for students and young professionals.',
        'Quality, Sustainability & Social Impact – Trusted brands, eco-friendly packaging, 30% profits donated to mental health nonprofits.',
        'Community & Support – Online resources, expert tips, virtual workshops, and fostering a wellness-focused subscriber community.'
    ]
  },
  {
    id: 5,
    title: 'Melissa Febos - Infographic',
    description: 'The infographic breaks down Febos’ text, showing examples of rhetorical appeals and how they connect to audience, purpose, and constraints. It illustrates key moments in the text that evoke empathy, logic, and credibility, providing a visual representation of analytical insights. Designed in Canva, it transforms complex rhetorical analysis into an accessible and visually appealing project that reinforces the learning objectives of the course.',
    skills: ['Canva'],
    purpose: 'This infographic was created for an English course to explore the rhetorical strategies used in Melissa Febos’ writing. Its goal is to highlight how multimodal projects can help students analyze ethos, pathos, and logos while developing digital and visual literacy. By translating textual analysis into a visual format, it demonstrates how communication can be made clear, engaging, and impactful for a targeted audience.',
    thumbnail: '/oneword.png',
    demoLink: 'https://www.canva.com/design/DAF0qWdHYN4/TZlPLY1kPHSkDbu1TNLpLw/edit?utm_content=DAF0qWdHYN4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    features: [
      'Rhetorical Breakdown – Clearly identifies and visually distinguishes ethos, pathos, and logos from the source text.',
      'Audience & Purpose – Shows who the intended audience is and how the text’s message is tailored to them.',
      'Visual Hierarchy – Uses color, font size, and layout to guide the viewer’s eye through key points and analysis.',
      'Text-to-Visual Translation – Converts complex textual analysis into digestible charts, callouts, or icons for easier understanding.',
      'Reflective Notes – Includes context and brief reflections on the author, constraints, and intended impact of the text.'
    ]
  },
  {
    id: 6,
    title: 'Upcoming Project',
    description: 'Stay tuned! A new web development project is currently in progress and will be showcased here soon.',
    skills: ['N/A'],
    purpose: 'Placeholder for an upcoming project that highlights future work and skills.',
    thumbnail: '/progress.jpg',
    demoLink: null
  }
  
];

const education = [
  {
    id: 1,
    institution: 'Kean University',
    degree: 'B.S. Computer Science',
    years: '2023 - Present',
    details: 'Focused on front end development and UI/UX design.',
  },
  // Add more education entries here
];

const experience = [
  {
    id: 1,
    role: "IUSE Student Researcher",
    organization: "Kean University",
    location: "Remote",
    duration: "May 2025 – Present",
    description: [
      "Conducted faculty-mentored research exploring emotion detection using large language models (LLMs) and multimodal datasets (text, audio, video).",
      "Implemented transformer-based models (RoBERTa) in Python, applying tokenization, embeddings, and positional encoding for improved emotion recognition accuracy.",
      "Built and tested multimodal pipelines with Hugging Face, evaluated performance using confusion matrices, accuracy, and classification reports.",
      "Proposed enhancements such as emotion intensity scoring and temporal emotion tracking.",
      "Collaborated with peers to present findings and troubleshoot technical challenges in Google Colab and VS Code."
    ],
    skills: [
      "Python", "NLP", "Transformer Models", "Machine Learning", "Google Colab", "VS Code", "Teamwork", "Collaborative Research"
    ]
  },
  {
    id: 2,
    role: "LEAP Student (Internship)",
    organization: "Kean University",
    duration: "Sep 2024 – May 2025 · 9 mos",
    description: [
      "Participated in the LEAP Program, gaining hands-on experience in the computer science field.",
      "Developed skills in Adobe Illustrator, newsletter creation, and digital content contributions.",
      "Completed LinkedIn Learning certifications in communication, leadership, and workplace competencies."
    ],
    skills: ["Networking", "Time Management", "Self Learning"]
  },
  {
    id: 3,
    role: "WEB102 Student (Internship)",
    organization: "CodePath",
    duration: "May 2025 – Aug 2025 · 4 mos",
    description: [
      "Completed a 10+ week intermediate web development course, building 5+ interactive web apps with React, JS, and APIs.",
      "Designed dynamic UIs with state management (useState), conditional rendering, and responsive accessibility.",
      "Integrated APIs, CRUD operations, and React Router for client-side navigation."
    ],
    skills: ["React.js", "REST APIs", "Vite", "Supabase", "React Router", "Git", "Node.js", "JavaScript"]
  },
  {
    id: 4,
    role: "WEB101 Student (Internship)",
    organization: "CodePath",
    duration: "Feb 2025 – Apr 2025 · 3 mos",
    description: [
      "Participated in a beginner-friendly web development course covering HTML, CSS, JS, and web animations.",
      "Applied DOM manipulation, event listeners, loops, and Flexbox to build interactive websites.",
      "Collaborated with peers on labs and troubleshooting sessions."
    ],
    skills: ["HTML", "CSS", "JavaScript", "Figma", "VS Code", "Teamwork"]
  },
  {
    id: 5,
    role: "Web Design Intern",
    organization: "National STEM Honor Society (NSTEM)",
    duration: "Jan 2025 – Aug 2025 · 8 mos",
    location: "Remote",
    description: [
      "Designed collateral (flyers, banners, newsletters) using Adobe Creative Suite & Canva.",
      "Maintained and optimized WordPress pages, improved HTML/CSS via Udemy courses.",
      "Collaborated across departments to align web, design, and content strategies.",
      "Used Trello for project management, bug reporting, and task tracking."
    ],
    skills: ["WordPress", "HTML", "CSS", "Adobe Creative Suite", "Figma", "Trello", "E-commerce"]
  },
  {
    id: 6,
    role: "Chapter Media & Communications Intern",
    organization: "National STEM Honor Society (NSTEM)",
    duration: "Sep 2024 – Aug 2025 · 1 yr",
    description: [
      "Created onboarding materials and personalized communications for incoming NSTEM members.",
      "Collected, organized, and maintained data across schools in Google Sheets.",
      "Designed and distributed newsletters and snapshots with Canva & MailerLite."
    ],
    skills: ["Canva", "Google Sheets", "MailerLite", "Virtual Collaboration", "Data Collection"]
  },
  {
    id: 7,
    role: "AI Ambassador",
    organization: "Inspirit AI",
    duration: "Sep 2024 – Nov 2024 · 3 mos",
    description: [
      "Selected as ambassador for an MIT/Stanford-led program on AI concepts.",
      "Engaged in 10+ weekly workshops on ML, NLP, and computer vision.",
      "Promoted AI programs to peers and educators, increasing awareness."
    ],
    skills: ["Leadership", "Communication", "Time Management"]
  },
  {
    id: 8,
    role: "PACE Program Participant",
    organization: "Prudential Financial",
    duration: "Mar 2022 – Mar 2022 · 1 mo",
    description: [
      "Collaborated in a mentor-led 3-day program analyzing COVID-19 demographic & income datasets for insurance expansion.",
      "Presented findings to 50+ attendees, including Prudential staff.",
      "Designed charts & visualizations to communicate business insights."
    ],
    skills: ["Excel", "Data Analysis", "Quantitative Research", "Public Speaking"],
    presentations: [
      {
        title: 'Case Study Overview',
        link: 'https://docs.google.com/presentation/d/1izIgJjHvohae51uognKIA0BT7BdRbPrcqw0PEXNrBjI/edit?usp=sharing'
      }
    ]
  },
  {
    id: 9,
    role: "AI Scholar (Internship)",
    organization: "Inspirit AI",
    duration: "Jun 2021 – Aug 2021 · 3 mos",
    description: [
      "Developed ML classifiers for disaster response tweets (achieved 95% recall for Water needs).",
      "Applied NLP preprocessing with Python & Pandas for improved datasets.",
      "Presented disaster-relief AI applications at a virtual showcase."
    ],
    skills: ["Python", "Machine Learning", "NLP", "Google Colab", "Teamwork", "Public Speaking"],
    presentations: [
      {
        title: 'Natural Disaster Relief',
        link: 'https://docs.google.com/presentation/d/1n6Ztrg9D6kjCQchYUz2VmmhCE6PY0FNlGaw72MkM0N4/edit?usp=sharing'
      }
    ]
  }
];

const certifications = [
  {
    id: 1,
    title: 'CodePath - WEB 101 Honors',
    issued: 'May 2025',
    image: '/web101.png',
  },
  {
    id: 2,
    title: 'CodePath - WEB 102 Honors',
    issued: 'Aug 2025',
    image: '/web102.png',
  },
  {
    id: 3,
    title: 'Inspirit AI - AI Ambassador',
    issued: 'Dec 2024',
    image: '/Ambassador.png',
  },
  {
    id: 4,
    title: 'Inspirit AI - AI Scholar',
    issued: 'Aug 2021',
    image: '/Scholar.png'
  },
  {
    id: 6,
    title: 'Internbridge - Web Development',
    issued: 'Aug 2024',
    image: '/internbridge.jpeg'
  },
  {
    id: 7,
    title: 'TriAlpha',
    issued: 'Apr 2025',
    image: '/TriAlpha.png'
  }
];

export default function AboutSkillsProjects() {
  const [hintIndex, setHintIndex] = useState(0);
  const [modalCert, setModalCert] = useState(null);

  const hints = [
    "Hey! Scroll down and check out my journey!",
    "Wow, This is cool!",
    "Can't wait for more, scroll down for the end page!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHintIndex((prev) => (prev + 1) % hints.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about-skills-projects">
      <PopupHint text={hints[hintIndex]} />

      <h1 className="name-heading">Kiana Nunez</h1>

      <section id="about">
        <img
          src="/Screen Shot 2024-12-10 at 11.12.28 PM.png"
          alt="Kiana"
        />
        <div>
          <h2>About Me</h2>
          <p>
          Hi everyone! I’m a Computer Science student at Kean University with a passion for web development; especially in front-end design and UI/UX. My goal is to grow my skills and eventually expand into freelance work, where I can blend creativity with technology.
          Outside of coding, I’ve always loved art in all forms. I enjoy drawing (both traditional and digital) and painting, which often inspire my design work. My interest in web development began in my junior year of high school and I’ve been hooked ever since.
          </p>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <div className="edu-details">
          <p>
            <strong>Kean University</strong> | Union, NJ | <strong>Expected May 2027</strong>
          </p>
          <p>
            B.S in Computer Science | GPA 3.79 | Dean’s List Recipient of 2024 | Tri-Alpha Inductee | WiCyS Event Coordinator
          </p>
          <p>
            <strong>Relevant Coursework:</strong> Discrete Structures | Calculus I | Computer Programming | Object Oriented Analysis & Design | Computer Organization & Architecture | Data Structures | Computer Operating Systems
          </p>
        </div>

        <h2>Extracurricular Activities</h2>
        <div className="activity-carousel">
          <div className="activity-slider">
          <div
      className="activity-card coming-soon"
      onClick={() => alert("Coming Soon!")}
    >
      Kean Dance Theatre
    </div>

    <div
      className="activity-card coming-soon"
      onClick={() => alert("Coming Soon!")}
    >
      WICYS
    </div>

    <div
      className="activity-card coming-soon"
      onClick={() => alert("Coming Soon!")}
    >
      ACM
    </div>

    <div
      className="activity-card coming-soon"
      onClick={() => alert("Coming Soon!")}
    >
      Other Kean Events
    </div>
  </div>
</div>
      </section>

      <section id="qualifications" style={{ marginBottom: '4rem' }}>
        <h2 className="section-title">Core Qualifications</h2>

        <div className="skills-container">
        <div className="skills-group">
  <h3>Programming & Frameworks:</h3>
  <p>HTML | CSS | JavaScript | React.js | React Router | Node.js | Python | RESTful API | Supabase | NLP | LLMs</p>
</div>

<div className="skills-group">
  <h3>Development Tools & Platforms:</h3>
  <p>GitHub | Git | Visual Studio Code | Eclipse | Vite | Trello | WordPress | Hugging Face</p>
</div>

<div className='skills-group'>
  <h3>Design & UX Tools:</h3>
  <p>Figma | Canva | Adobe Illustrator | MailerLite</p>
</div>

<div className='skills-group'>
  <h3>Productivity & Office:</h3>
  <p>Microsoft 365 | Google Workspace</p>
</div>

<div className="skills-group">
  <h3>Soft Skills:</h3>
  <p>Project Leadership | Time Management | Teamwork | Adaptability | Communication | Collaboration | Problem Solving | Critical Thinking | Creativity</p>
</div>
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="cert-carousel">
          <div className="cert-slider">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="cert-card"
          onClick={() => setModalCert(cert)}
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' ? setModalCert(cert) : null)}
          role="button"
          aria-label={`View details for ${cert.title}`}
        >
          <img src={cert.image} alt={cert.title} />
          <div className="overlay">
            <p>{cert.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {modalCert && (
    <div className="modal-overlay" onClick={() => setModalCert(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={modalCert.image} alt={modalCert.title} />
        <p>{modalCert.title} - Issued {modalCert.issued}</p>
        <button onClick={() => setModalCert(null)}>&times;</button>
      </div>
    </div>
  )}
</div>
      </section>

      <section id="experience">
  <h2>Experience</h2>
  <div className="experience-container">
    {experience.map((exp) => (
      <div key={exp.id} className="experience-card">
        <h3>
          {exp.role} <span className="at">| {exp.organization}</span>
        </h3>
        <p className="duration">
          {exp.duration} {exp.location && `| ${exp.location}`}
        </p>
        <ul>
          {exp.description.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
        <p className="skills">
          <strong>Skills:</strong> {exp.skills.join(" · ")}
        </p>

        {/* ✅ New Presentations Section */}
        {exp.presentations && exp.presentations.length > 0 && (
          <div className="presentations">
            <h4>Presentations:</h4>
            <ul>
              {exp.presentations.map((p, i) => (
                <li key={i}>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
</section>



      <section id="projects">
        <h2>Projects</h2>
        {projects.map((proj) => (
    <div key={proj.id} className="project-card-wrapper">
      <ProjectCard project={proj} />
    </div>
  ))}
      </section>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '4rem 0' }}>
  <Link to="/end" style={{ textDecoration: 'none'}}>
    <button
      style={{
        backgroundColor: 'darkgreen',
        color: '#fff',
        padding: '12px 24px',
        fontSize: 18,
        border: 'none',
        borderRadius: 8,
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      Contact Me!
    </button>
  </Link>
</div>


    </div>
  );
}

