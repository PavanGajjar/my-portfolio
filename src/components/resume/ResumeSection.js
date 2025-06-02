import React from "react";
import "../../css/resume/resumeSection.css";

const ResumeSection = () => {
  const dockerFoundations = (
    <a
      href="https://www.linkedin.com/learning/certificates/45a404b8e52565ea385f7bd3a3cdd7144f690ca35fb0cb0e2e5fd0399f1973ed?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bxa1znT1DSG%2B9NZb9Ec0zIw%3D%3D"
      target="_blank"
      rel="noopener noreferrer">
      Docker Foundations
    </a>
  );
  const microservicesFoundations = (
    <a
      href="https://www.linkedin.com/learning/certificates/b4cfc75c97aedeb3a26b8656c8438a69ca5ca6a25b3332dccb67eabf28234526?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bxa1znT1DSG%2B9NZb9Ec0zIw%3D%3D"
      target="_blank"
      rel="noopener noreferrer">
      Microservices Foundations
    </a>
  );
  const gitHubProfessionals = (
    <a
      href="https://www.linkedin.com/learning/certificates/45a404b8e52565ea385f7bd3a3cdd7144f690ca35fb0cb0e2e5fd0399f1973ed?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bxa1znT1DSG%2B9NZb9Ec0zIw%3D%3D"
      target="_blank"
      rel="noopener noreferrer">
      GitHub Professionals
    </a>
  );
  
  return (
    <section className="resume-container">
      <div className="container">
        <header className="resume-header">
          <h1 className="resume-title">Pavan Gajjar</h1>
          <h3>Full Stack Web Developer</h3>
        </header>

        <div className="resume-content">
          {/* Updated Skills Section */}
          <div className="skills-section">
            <div className="container">
              <h2 className="skills-title">My Skills</h2>
              <table className="skills-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Skills</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Backend</td>
                    <td>
                      .NET | .NET Core | ASP.NET | C# | Entity Framework |
                      ADO.NET | Dapper | LINQ | Nodejs (Basics) | RESTful APIs |
                      Azure Functions
                    </td>
                  </tr>
                  <tr>
                    <td>Frontend</td>
                    <td>
                      Angular 8–18 | React JS | JavaScript | TypeScript | HTML5
                      | CSS3 | Bootstrap | jQuery | ES6 | NPM | UI/UX |
                      Responsive Design
                    </td>
                  </tr>
                  <tr>
                    <td>Database & ORM</td>
                    <td>
                      Microsoft SQL Server | MySQL | SQL Stored Procedures |
                      SSMS | Workbench | MongoDB | Relational Data Modeling
                    </td>
                  </tr>
                  <tr>
                    <td>Cloud & DevOps</td>
                    <td>
                      Microsoft Azure | Azure DevOps | Jenkins | Docker |
                      Kubernetes | Deployment Pipelines
                    </td>
                  </tr>
                  <tr>
                    <td>Version Control & Collaboration</td>
                    <td>Git | GitHub | GitLab | Bitbucket</td>
                  </tr>
                  <tr>
                    <td>Testing & Debugging</td>
                    <td>
                      Postman | Swagger UI | Fiddler | Test-Driven Development
                      (TDD) | Karma | Jasmine | Debugging Tools
                    </td>
                  </tr>
                  <tr>
                    <td>Authentication & Security</td>
                    <td>JWT | OAuth 2.0 | OWIN | Bcrypt | Secure API Design</td>
                  </tr>
                  <tr>
                    <td>Project & Task Management</td>
                    <td>Jira | Azure Boards | Zoho</td>
                  </tr>
                  <tr>
                    <td>Data Formats & Integration</td>
                    <td>
                      JSON | XML | API Integration | Microservices Architecture
                    </td>
                  </tr>
                  <tr>
                    <td>Tools & IDEs</td>
                    <td>
                      Visual Studio | VS Code | Canva | Adobe Photoshop | Adobe
                      Premiere Pro | MS Office | Figmax (for UI collaboration)
                    </td>
                  </tr>
                  <tr>
                    <td>Soft Skills</td>
                    <td>
                      Problem Solving | Communication | Team Collaboration |
                      Time Management | Agile/Scrum | Technical Leadership |
                      Detail-Oriented | Troubleshooting
                    </td>
                  </tr>
                  <tr>
                    <td>Additional Skills</td>
                    <td>
                      Adobe Photoshop, Adobe Premiere Pro, MS Excel, MS Word, MS
                      Project, MS PowerPoint
                    </td>
                  </tr>
                  <tr>
                    <td>Certifications</td>
                    <td>
                      {dockerFoundations}, {microservicesFoundations},{" "}
                      {gitHubProfessionals}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <section className="experience-section">
            <div className="container">
              <h2 className="experience-title">Work Experience</h2>

              <div className="experience-item">
                <h3>Software Engineer</h3>
                <p className="experience-date">Sept 2024 - April 2025</p>
                <p className="experience-company">
                  Wild Hog Country Market, Stratford, Ontario
                </p>
                <ul className="experience-description">
                  <li>
                    - Developed a responsive Single Page Application using
                    Angular 14 with reusable UI components to ensure consistency
                    and scalability.
                  </li>
                  <li>
                    - Built a .NET 6 Web API to support future backend
                    integration, managing static data with TypeScript for
                    structured content delivery.
                  </li>
                  <li>
                    - Managed the hosting environment, overseeing deployment,
                    configuration, and performance optimization for seamless web
                    access.
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>Software Engineer</h3>
                <p className="experience-date">Aug 2021 - April 2023</p>
                <p className="experience-company">
                  PathQuest Solutions Private Limited, Ahmedabad, India
                </p>
                <ul className="experience-description">
                  <li>
                    - Built scalable web applications using modern front-end
                    frameworks and RESTful APIs in a microservices environment.
                  </li>
                  <li>
                    - Developed reusable UI components, optimized data handling,
                    and contributed to multi-tenant systems with secure
                    authentication.
                  </li>
                  <li>
                    - Collaborated in Agile teams to deliver user-focused
                    solutions across finance and global mobility domains.
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>Software Engineer</h3>
                <p className="experience-date">Sept 2020 - Jul 2021</p>
                <p className="experience-company">
                  Pacific Global Solutions Limited, Ahmedabad, India
                </p>
                <ul className="experience-description">
                  <li>
                    - Developed modular .NET APIs and optimized relational
                    databases to support enterprise SaaS products.
                  </li>
                  <li>
                    - Integrated third-party tools like ZOHO for secure
                    payments, subscriptions and chatbot functionality.
                  </li>
                  <li>
                    - Streamlined backend workflows and enhanced system
                    performance through efficient data access and service
                    design.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="projects-section">
            <h2 className="projects-title">PROJECTS</h2>

            <div className="project-item">
              <h3>Pathquest Business Intelligence</h3>
              <ul className="project-description">
                <li>
                  Designed and optimized relational database schemas to
                  integrate third-party accounting tools using SQL stored
                  procedures, queries, and linked tables.
                </li>
                <li>
                  Developed a self-contained .NET API back-end as part of a
                  microservices architecture, implementing CRUD operations using
                  Dapper and Entity Framework.
                </li>
                <li>
                  Implemented a secure payment workflow with ZOHO Subscription
                  and integrated a ZOHO Chatbot to enhance enterprise-level user
                  interaction.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Pathquest Account Payable</h3>
              <ul className="project-description">
                <li>
                  Upgraded the front end from Angular 8 to Angular 13,
                  implementing a scalable architecture to support complex
                  reporting workflows.
                </li>
                <li>
                  Developed reusable UI components to enhance maintainability
                  and user experience.
                </li>
                <li>
                  Integrated multiple company accounts with user profiles,
                  fetching data from external accounting tools and rendering
                  dynamic reports.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>HLS Global ITR</h3>
              <ul className="project-description">
                <li>
                  Designed and developed the front-end architecture in Angular
                  14, featuring interactive dashboards with Highcharts.js.
                </li>
                <li>
                  Implemented user authentication and registration, and built
                  backend APIs using Azure Functions and MySQL for seamless data
                  flow.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>HLS Global Expat Management System</h3>
              <ul className="project-description">
                <li>
                  Built a modular front end using Angular 13, including reusable
                  components and company-specific portals utilizing session and
                  local storage.
                </li>
                <li>
                  Engineered a scalable many-to-many relationship structure to
                  manage users, companies, and roles efficiently across multiple
                  tabs and sessions.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Bill Arc</h3>
              <ul className="project-description">
                <li>
                  Led the migration to a modern tech stack with ReactJS
                  (frontend) and Node.js (backend) for an e-commerce payment
                  management platform.
                </li>
                <li>
                  Developed secure RESTful APIs and implemented modular, clean
                  code architecture.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>
                Agritech Supply Chain - Dfarm (Michigan, USA) Nov 2022 – Dec
                2022
              </h3>
              <ul className="project-description">
                <li>
                  Developed a responsive front-end architecture using Angular 14
                  for scalable multi-portal management.
                </li>
                <li>
                  Integrated Figma-based designs into product listing and
                  payment workflows, and enhanced UI/UX with JSON and custom
                  JavaScript animations.
                </li>
                <li>
                  Streamlined deployment environments to improve DevOps
                  processes.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>
                Capstone Final Term Project - Kitchener, Canada (May 2024 – Aug
                2024)
              </h3>
              <ul className="project-description">
                <li>
                  Built a Tenancy Management System using the MERN stack with
                  JWT-based authentication and bcrypt for secure API access.
                </li>
                <li>
                  Developed a scalable Single Page Application (SPA) using
                  React.js with a component-based architecture to ensure
                  seamless user interaction.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Country Market Website - Wild Hog Country Market</h3>
              <ul className="project-description">
                <li>
                  Built a responsive Single Page Application using Angular 14 to
                  display departmental content with structured layouts and
                  images.
                </li>
                <li>
                  Managed static data with TypeScript and set up a .NET 6 Web
                  API for future backend integration.
                </li>
                <li>
                  Designed reusable UI components to ensure consistency,
                  responsiveness, and scalability.
                </li>
              </ul>
            </div>
          </section>

          <section className="resume-education">
            <h2 className="section-title">Education</h2>
            <ul className="education-list">
              <li className="education-item">
                <h3>Web Development - Conestoga College</h3>
                <p>May 2023 - Aug 2024</p>
              </li>
              <li className="education-item">
                <h3>
                  Bachelor of Computer Engineering - Gujarat Technological
                  University
                </h3>
                <p>Dec 2016 - Aug 2020</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
