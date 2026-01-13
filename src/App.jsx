const skills = [
  "Java",
  "C++",
  "Python",
  "Swift",
  "SwiftUI",
  "C#",
  "SQL",
  "JavaScript",
  "HTML",
  "CSS",
  "Figma",
  "XML",
  "Salesforce",
  "WordPress",
  "Elementor",
  "Kali Linux",
  "AWS",
];

const certificates = [
  "Native Android Development (Order of Engineers & Architects — Tripoli)",
  "Technical Support Fundamentals (Coursera)",
  "IELTS Academic — Overall Band 6.5",
  "The Bits and Bytes of Computer Networking (Coursera)",
];

const experience = [
  {
    title: "Software Engineering Intern | Optik Consultancy",
    date: "Nov 2025 – Present",
    bullets: [
      "Contribute to enterprise-grade software solutions across analytics, automation, and digital transformation initiatives.",
      "Collaborate within a multidisciplinary Agile team to deliver scalable, maintainable systems aligned with client requirements.",
      "Assist with system architecture, technical documentation, and implementation across frontend and backend components.",
      "Participate in stakeholder meetings, sprint planning, and technical reviews to support end-to-end delivery.",
    ],
  },
  {
    title: "Business Owner | MR Advanced Windscreens",
    date: "May 2025 – Present",
    bullets: [
      "Launch and manage a mobile windscreen replacement business serving customers across Greater Sydney.",
      "Oversee bookings, customer service, supply chain, and on-site repairs to maintain safety and quality.",
      "Handle invoicing, budgeting, and expense tracking with accounting tools.",
    ],
  },
  {
    title: "Windscreen Fitter | Quickglass Windscreens",
    date: "Jan 2024 – May 2025",
    bullets: [
      "Install, repair, and replace vehicle windscreens and window glass with a focus on safety and precision.",
      "Diagnose damage and advise customers on repair vs. replacement, applying primers and adhesives to standards.",
      "Deliver mobile services across Sydney and coordinate bookings to maintain customer satisfaction.",
    ],
  },
  {
    title: "Traffic Controller | Vigilant Group / ATC Group",
    date: "Jul 2023 – Jan 2024",
    bullets: [
      "Manage safe and efficient traffic flow around construction zones according to control plans.",
      "Set up and remove signage, barriers, and cones; monitor site conditions and report hazards.",
      "Coordinate with supervisors and team members to minimize disruptions and maintain safety.",
    ],
  },
  {
    title: "Customer Service Supervisor | Guildford Mina Pizzeria",
    date: "Jan 2023 – Jul 2023",
    bullets: [
      "Deliver fast, friendly service in a high-volume environment while maintaining satisfaction during peak hours.",
      "Handle phone, Uber Eats, and in-person orders with accuracy and efficiency.",
      "Resolve complaints professionally and support kitchen and delivery staff with order coordination.",
    ],
  },
];

const projects = [
  {
    title: "VisionLess Pro (visionOS App)",
    date: "Autumn 2025 | iOS Industry Studio",
    bullets: [
      "Assistive visionOS app for Apple Vision Pro helping low-vision users identify and navigate to objects.",
      "Built with Swift, RealityKit, and ARKit: hand tracking, object tracking, plane detection, and world sensing.",
      "Real-time spatial audio cues with foveated audio and stationary detection to reduce audio clutter.",
      "Custom visualization with outlines, labels, speech, and contextual feedback.",
      "MVVM-compatible system using @Observable AppModel; session events, permissions, and async provider lifecycle.",
      "GitHub: github.com/RamiKhalil1/Visionless-Pro",
    ],
  },
  {
    title: "CPR Kids Website Redesign",
    date: "Autumn 2025 | Software Development Studio",
    bullets: [
      "Six-member Agile team redesigning and migrating the CPR Kids WordPress site using Elementor.",
      "Improved WCAG accessibility, responsiveness, navigation, and content structure.",
      "Integrated Google Reviews, newsletter forms, and partner carousels.",
      "Reported impact: +22.32% bookings, +1.3% engagement, 1% bounce rate two weeks post-launch.",
      "Website: cprkids.com.au",
    ],
  },
  {
    title: "BubblePop Game (iOS)",
    date: "Autumn 2024 | Application Development in the iOS Environment",
    bullets: [
      "SwiftUI arcade-style game with custom animations, difficulty scaling, and real-time scoreboard.",
      "MVVM architecture with UserDefaults for persistent scores, combo scoring, and animated transitions.",
      "GitHub: github.com/RamiKhalil1/BubblePopGame",
    ],
  },
  {
    title: "MealRecipeApp (iOS)",
    date: "Spring 2024 | Advanced iOS Development",
    bullets: [
      "Explore and favorite meals via TheMealDB API with async/await networking in MVVM architecture.",
      "Core Data persistence for favorites and offline support with NWPathMonitor.",
      "Responsive SwiftUI UI with clean navigation.",
      "GitHub: github.com/RamiKhalil1/MealRecipeApp",
    ],
  },
  {
    title: "Daily Journal App (iOS)",
    date: "Spring 2024 | Advanced iOS Development",
    bullets: [
      "Privacy-focused journaling app with moods, quotes (API Ninjas), and Core Data storage.",
      "Calendar view with dynamic month/year and date highlighting, password protection, and sharing.",
      "GitHub: github.com/RamiKhalil1/DailyJournalApp",
    ],
  },
  {
    title: "Financial Tracking App (iOS)",
    date: "Spring 2024 | Advanced iOS Development",
    bullets: [
      "Budget tracking, categorized expenses, and goal management with SwiftUI + MVVM.",
      "Interactive dashboards with Apple Charts, password-protected access, and persistent storage.",
      "GitHub: github.com/RamiKhalil1/Financial-Tracking-App",
    ],
  },
  {
    title: "Flight Agency App (Java Desktop)",
    date: "Spring 2023 | Programming 2",
    bullets: [
      "Java desktop app with GUI, secure login, and automated itinerary builder.",
      "FXML-based modular views with observable properties for real-time UI updates.",
      "Trip validation rules: minimum two destinations, no consecutive or same-country repeats, valid connections.",
    ],
  },
];

const criteria = [
  {
    code: "3.1",
    title: "Commitment to ethical conduct and professional accountability",
    body: "During a software development project, I identified that incomplete user input validation could produce unreliable outputs. I raised the risk with my team, documented the issue, and implemented validation and testing to protect data integrity. The project met quality expectations and avoided issues during later testing, reinforcing my commitment to ethical practice and accountability.",
  },
  {
    code: "3.2",
    title: "Ability to communicate with engineers and stakeholders from different fields",
    body: "In the CPR Kids website redesign, I translated accessibility requirements and platform constraints into clear, non-technical explanations for stakeholders. I documented decisions, ensured feedback was incorporated into development tasks, and supported collaboration across developers, designers, and non-technical partners.",
  },
  {
    code: "3.3",
    title: "Ability to engage with a creative, innovative, and proactive environment",
    body: "In the VisionLess Pro visionOS project, I explored how spatial audio, object detection, and hand tracking could combine to improve usability for low-vision users. I proposed and implemented contextual audio cues and stationary object detection to reduce sensory overload, iterating based on testing feedback.",
  },
  {
    code: "3.4",
    title: "Ability to use and manage information",
    body: "Across projects, I manage APIs, data models, design documentation, and version-controlled codebases. For CPR Kids, I structured content, managed accessibility requirements, and coordinated third-party integrations such as reviews and newsletter forms, ensuring accurate information for both users and the team.",
  },
  {
    code: "3.5",
    title: "Ability to manage performance in a professional environment",
    body: "Balancing full-time study with multiple team projects required deliberate planning. I prioritized tasks, tracked progress, and sought feedback to improve my work. These habits supported on-time delivery and consistent quality in collaborative, deadline-driven settings.",
  },
  {
    code: "3.6",
    title: "Ability to work in a team and show leadership when required",
    body: "During the CPR Kids redesign, I supported teammates by clarifying requirements, resolving technical issues, and keeping tasks aligned with sprint goals. Running my own business also developed leadership through scheduling, communication, and decision-making, which I apply to team environments.",
  },
];

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <span className="brand-mark">RK</span>
          <div>
            <p className="brand-name">Rami Khalil</p>
            <p className="brand-role">Software Engineering Portfolio</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#reflections">Reflections</a>
          <a href="#cover-letter">Cover Letter</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-text">
            <p className="eyebrow">UTS | Software Engineering (Honours)</p>
            <h1>Designing dependable, human-centered software.</h1>
            <p>
              I am a Software Engineering student at the University of Technology Sydney with a strong interest in
              technology that is useful, approachable, and impactful. My engineering journey began with practical
              problem solving and grew as I saw how thoughtful software improves everyday life. I am especially
              drawn to mobile, web, and accessibility-focused experiences that translate real-world challenges into
              reliable digital solutions.
            </p>
            <p>
              Building iOS and visionOS apps, contributing to accessibility-focused web redesigns, and running a
              service-based business have strengthened my technical skills and reinforced the value of teamwork,
              clear communication, and user-centered design. I am committed to creating systems that are ethical,
              maintainable, and sustainable for long-term use.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#resume">View Resume</a>
              <a className="btn ghost" href="#contact">Get In Touch</a>
            </div>
          </div>
          <div className="hero-card">
            <h3>Professional Snapshot</h3>
            <ul>
              <li>Software Engineering (Honours), UTS</li>
              <li>Mobile and accessibility-focused product work</li>
              <li>Experience across Agile team projects</li>
              <li>Business ownership and client-facing delivery</li>
            </ul>
          </div>
        </section>

        <section className="section" id="resume">
          <div className="section-header">
            <h2>Curriculum Vitae</h2>
            <p>Professional experience, education, and technical capabilities.</p>
          </div>

          <div className="resume-grid">
            <div className="card">
              <h3>Contact</h3>
              <p>
                <strong>Phone:</strong> +61 4 2233 1089
              </p>
              <p>
                <strong>Email:</strong> rami.mkhalil19@gmail.com
              </p>
              <p>
                <strong>LinkedIn:</strong> rami-khalil-2133b4206
              </p>
              <p>
                <strong>Address:</strong> 31 Flintlock Drive, St Clair, NSW 2759
              </p>
            </div>

            <div className="card">
              <h3>Career Objective</h3>
              <p>
                Dedicated software engineering student with a strong foundation in application development, user
                experience design, and data-driven problem solving. Experienced in projects that prioritize
                usability, accessibility, and performance. Committed to building impactful digital solutions through
                thoughtful design, collaboration, and continuous learning.
              </p>
            </div>

            <div className="card">
              <h3>Education</h3>
              <div className="item">
                <p className="item-title">University of Technology Sydney (UTS)</p>
                <p>Bachelor of Engineering (Honours), Major in Software Engineering</p>
                <p className="item-meta">GPA: 6.71 | Feb 2023 – Present</p>
              </div>
              <div className="item">
                <p className="item-title">Lebanese University</p>
                <p>Bachelor’s degree in Software Engineering</p>
                <p className="item-meta">GPA: 80.88 | Oct 2020 – Jul 2022</p>
              </div>
            </div>

            <div className="card">
              <h3>Technical Skills</h3>
              <div className="tag-list">
                {skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <h3>Certificates</h3>
              <ul>
                {certificates.map((certificate) => (
                  <li key={certificate}>{certificate}</li>
                ))}
              </ul>
            </div>

            <div className="card wide">
              <h3>Employment</h3>
              {experience.map((role) => (
                <div className="item" key={role.title}>
                  <div className="item-head">
                    <p className="item-title">{role.title}</p>
                    <span className="item-meta">{role.date}</span>
                  </div>
                  <ul>
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="card wide">
              <h3>Projects</h3>
              {projects.map((project) => (
                <div className="item" key={project.title}>
                  <div className="item-head">
                    <p className="item-title">{project.title}</p>
                    <span className="item-meta">{project.date}</span>
                  </div>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="reflections">
          <div className="section-header">
            <h2>Reflective Writing</h2>
            <p>Critical incidents that shape my professional development.</p>
          </div>

          <div className="reflection-grid">
            <article className="card">
              <h3>Principles of Sustainability to Create Viable Systems</h3>
              <p>
                Toward the end of a university project involving the development of a mobile application, I was
                responsible for extending functionality that had been partially implemented by another team
                member. While reviewing the existing codebase, I noticed that the application worked, yet there was
                minimal documentation explaining architectural decisions or implementation logic.
              </p>
              <p>
                I initially felt confident that I could continue the work without issue. As I progressed, I became
                frustrated by the time spent trying to understand undocumented code. I realized that although the
                system functioned in the short term, it was not sustainable for long-term maintenance or team
                handover. This conflicted with my belief that good engineering practice creates solutions others can
                understand, reuse, and improve.
              </p>
              <p>
                From a sustainability perspective, this experience aligns with the conservation of resources
                described in <em>Engineering Your Future</em> (Dowling et al., 2016). In software systems, wasted time,
                repeated effort, and technical debt represent inefficient use of human and organizational resources.
                Sustainable engineering is not limited to environmental outcomes; it also involves designing systems
                that preserve knowledge and minimize future rework.
              </p>
              <p>
                This incident taught me that sustainability in software engineering requires deliberate documentation,
                clear architecture, and consideration of future users and developers. In future projects, I will
                prioritize maintainable code structures and written explanations, even under time pressure, to ensure
                systems remain viable and adaptable.
              </p>
            </article>

            <article className="card">
              <h3>Professional Practice Within Intercultural and Global Contexts</h3>
              <p>
                While working on team-based university projects with students from diverse cultural and educational
                backgrounds, I experienced how communication styles and expectations can differ significantly. In one
                group project, misunderstandings arose due to varying assumptions about leadership, task ownership,
                and how feedback should be delivered.
              </p>
              <p>
                At the time, I felt uncertain about raising concerns because I did not want to appear confrontational.
                I assumed everyone shared the same expectations about communication and collaboration, which
                proved incorrect. The experience challenged my belief that technical competence alone ensures
                successful teamwork.
              </p>
              <p>
                Engineers Australia emphasizes the importance of effective communication, respect, and
                collaboration within diverse teams. Reflecting on this experience helped me understand that
                professional responsibility includes adapting communication to different cultural perspectives and
                ensuring all team members feel heard.
              </p>
              <p>
                I learned the importance of encouraging participation, clarifying expectations early, and being mindful
                of intercultural differences. In future professional settings, I will take a proactive role in fostering
                inclusive communication to support ethical, collaborative, and globally competent engineering
                practice.
              </p>
            </article>
          </div>

          <div className="card references">
            <h3>References (APA 7th)</h3>
            <ul>
              <li>Dowling, D., Hadgraft, R., Carew, A., McCarthy, T., &amp; Hargreaves, D. (2016). <em>Engineering your future</em>. Wiley.</li>
              <li>Engineers Australia. (n.d.). <em>Code of ethics and guidelines on professional conduct</em>. https://www.engineersaustralia.org.au</li>
            </ul>
          </div>
        </section>

        <section className="section" id="cover-letter">
          <div className="section-header">
            <h2>Cover Letter</h2>
            <p>Graduate Engineer Program — Industrus Engineering</p>
          </div>

          <div className="card">
            <p>Dear Hiring Manager,</p>
            <p>
              I am applying for the Graduate Engineer Program at Industrus Engineering. I am completing a
              Bachelor of Engineering (Honours) in Software Engineering at the University of Technology Sydney,
              with prior tertiary study in Software Engineering at the Lebanese University. My academic projects,
              industry studio work, and professional experience in team-based environments have developed
              strong technical, communication, and professional skills that align well with Industrus’ innovative and
              multidisciplinary consulting approach.
            </p>
            <p>
              Please find my responses to the selection criteria below. I have structured each response using the
              STAR method to demonstrate clear situations, actions, and results.
            </p>

            <div className="criteria">
              {criteria.map((criterion) => (
                <div className="criteria-item" key={criterion.code}>
                  <h4>
                    Selection Criterion {criterion.code}: {criterion.title}
                  </h4>
                  <p>{criterion.body}</p>
                </div>
              ))}
            </div>

            <p>
              I would welcome the opportunity to discuss my application further and can be contacted via email or
              phone at your convenience. Thank you for your consideration.
            </p>
            <p>Kind regards,</p>
            <p>Rami Khalil</p>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-header">
            <h2>Contact</h2>
            <p>Open to graduate software engineering roles and collaborative projects.</p>
          </div>
          <div className="card contact-card">
            <div>
              <p className="item-title">Email</p>
              <p>rami.khalil@student.uts.edu.au</p>
            </div>
            <div>
              <p className="item-title">Phone</p>
              <p>+61 4 2233 1089</p>
            </div>
            <div>
              <p className="item-title">LinkedIn</p>
              <p>rami-khalil-2133b4206</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Rami Khalil.</p>
      </footer>
    </div>
  );
}

export default App;
