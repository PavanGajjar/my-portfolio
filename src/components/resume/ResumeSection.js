import React from "react";
import "../../css/resume/resumeSection.css";

const ResumeSection = () => {
  return (
    <section className="resume-container">
      <div className="container">
        <header className="resume-header">
          <h1 className="resume-title">Pavan Gajjar</h1>
          <p className="resume-subtitle">Full Stack Web Developer</p>
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
                      C#, .NET, .NET Framework, .NET Core, ASP.NET, Node.js,
                      Azure Functions, MVC, Dapper, Entity Framework, LINQ,
                      RESTful APIs, AJAX
                    </td>
                  </tr>
                  <tr>
                    <td>Frontend</td>
                    <td>
                      Angular 2+, AngularJS, React (Basics), JavaScript,
                      TypeScript, HTML5, CSS3, JQuery, SCSS, ES6, NPM,
                      Bootstrap, Angular Material, UI/UX Design
                    </td>
                  </tr>
                  <tr>
                    <td>Database</td>
                    <td>Microsoft SQL Server, MySQL, SSMS, Workbench</td>
                  </tr>
                  <tr>
                    <td>Version Control</td>
                    <td>Git, Github, Gitlab</td>
                  </tr>
                  <tr>
                    <td>Web Services</td>
                    <td>Jenkins, Docker, Kubernetes</td>
                  </tr>
                  <tr>
                    <td>Cloud</td>
                    <td>Azure</td>
                  </tr>
                  <tr>
                    <td>Data</td>
                    <td>JSON, XML</td>
                  </tr>
                  <tr>
                    <td>Logging & Task Management</td>
                    <td>Jira, Azure, Zoho, Bitbucket</td>
                  </tr>
                  <tr>
                    <td>Work Methodologies</td>
                    <td>Agile methodologies, Scrum</td>
                  </tr>
                  <tr>
                    <td>Unit Testing</td>
                    <td>TDD, Karma, Jasmine</td>
                  </tr>
                  <tr>
                    <td>IDE</td>
                    <td>Visual Studio, Visual Studio Code</td>
                  </tr>
                  <tr>
                    <td>API Testing</td>
                    <td>Postman, Swagger UI, Fiddler</td>
                  </tr>
                  <tr>
                    <td>Authentication</td>
                    <td>OAuth 2.0, JWT, Owin</td>
                  </tr>
                  <tr>
                    <td>Soft Skills</td>
                    <td>
                      Leadership, Troubleshooting, Communication, Time
                      Management, Problem-Solving, Teamwork, Project Management,
                      Decision-making
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
                      Docker Foundations, Microservices Foundations, Github
                      Professionals
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
                <h3>Software Developer</h3>
                <p className="experience-date">Aug 2021 - April 2023</p>
                <p className="experience-company">
                  PathQuest Solutions Private Limited, Ahmedabad, India
                </p>
                <ul className="experience-description">
                  <li>
                    - Upgraded the front end from Angular 8 to Angular 13,
                    implementing a scalable architecture for rendering diverse
                    report types as well as developed reusable UI components to
                    enhance functionality and improve user experience.
                  </li>
                  <li>
                    - Integrated multiple company accounts per user account,
                    efficiently connecting third-party accounting tools to fetch
                    and render data.
                  </li>
                  <li>
                    - Collaborated in Agile teams to integrate APIs with Azure
                    Functions and implement secure, cloud-based data storage
                    solutions.
                  </li>
                  <li>
                    - Delivered high-quality applications by leveraging advanced
                    debugging techniques, clean coding practices, and
                    performance optimization, exceeding client expectations.
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>Software Developer</h3>
                <p className="experience-date">Sept 2020 - Jul 2021</p>
                <p className="experience-company">
                  Pacific Global Solutions Limited, Ahmedabad, India
                </p>
                <ul className="experience-description">
                  <li>
                    - Designed and optimized database schemas to integrate
                    third-party accounting tools, employing relational data
                    models, SQL stored procedures, queries, and linked tables.
                  </li>
                  <li>
                    - Developed a self-contained .NET API back-end project as
                    part of a distributed systems, implementing CRUD operations
                    using Dapper and Entity Framework for efficient
                    communication between systems.
                  </li>
                  <li>
                    - Built a secure payment workflow using ZOHO Subscription
                    and integrated ZOHO Chatbot to enhance user interactions
                    within enterprise applications.
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
                  Designed and optimized a database schema to integrate
                  third-party accounting tools, utilizing relational data models
                  with SQL stored procedures, SQL queries, and linked tables.
                  Created and developed a self-contained .NET API back end
                  project as part of a microservices architecture, implementing
                  CRUD operations using Dapper and Entity Framework for seamless
                  communication between systems.
                </li>
                <li>
                  Designed a secure payment workflow using ZOHO Subscription and
                  integrated a ZOHO Chatbot to enhance user interactions within
                  enterprise applications.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Pathquest Account Payable</h3>
              <ul className="project-description">
                <li>
                  Collaborated with the team to upgrade the front-end from
                  Angular 8 to Angular 13, implementing a scalable architecture
                  to render various types of reports.
                </li>
                <li>
                  Developed reusable UI components as part of a team effort to
                  enhance functionality and improve user experience.
                </li>
                <li>
                  Contributed to connecting multiple company accounts as per
                  user accounts, working with different account tools to fetch
                  data and render reports efficiently.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>HLS Global ITR</h3>
              <ul className="project-description">
                <li>
                  Collaborated with the team to design and implement the
                  front-end architecture using Angular 14, creating interactive
                  dashboards with Highcharts.js and integrating user
                  authentication and registration features.
                </li>
                <li>
                  Worked on back-end development with Azure Functions and MySQL,
                  building APIs and ensuring seamless data integration between
                  the front-end and database.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>HLS Global Expat Management System</h3>
              <ul className="project-description">
                <li>
                  Engineered a many-to-many relationship architecture to manage
                  multiple users, companies, and roles, enabling a scalable
                  solution for expat management.
                </li>
                <li>
                  Developed a dynamic front end architecture in Angular 13,
                  setting up environments, reusable components, and
                  company-specific portals using session and local storage to
                  display user-specific data across multiple browser tabs.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Identity Server Project</h3>
              <ul className="project-description">
                <li>
                  Contributed to migrating the login and registration process
                  for Business Intelligence and Accounts Payable systems from
                  OWIN to .NET 5 Identity Server with JWT authentication,
                  enhancing security and gaining experience in advanced
                  authentication systems.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Bill Arc</h3>
              <ul className="project-description">
                <li>
                  Led the transition to a modern stack using ReactJS for the
                  front end and Node.js for the backend for e-commerce payment
                  management application.
                </li>
                <li>
                  Implemented secure RESTful APIs, modular architecture, and
                  clean code principles.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Dfarm (Michigan, United States) Nov 2022 - Dec 2022</h3>
              <ul className="project-description">
                <li>
                  Developed responsive frontend architecture with Angular 14 for
                  scalable, multi-portal management, and integrated product
                  listing to payment page workflows from Figma design.
                </li>
                <li>
                  Set up deployment environments for project phases, optimizing
                  DevOps processes, and added JSON and custom JavaScript
                  animations for enhanced experience.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>
                Capstone Final Term Project (Kitchener, Canada) May 2024 - Aug
                2024
              </h3>
              <ul className="project-description">
                <li>
                  Developed a comprehensive Tenancy Management System using the
                  MERN stack, integrating JWT authentication and bcrypt for
                  secure API access.
                </li>
                <li>
                  Built a scalable Single Page Application (SPA) with React.js,
                  leveraging a component-based design to ensure modularity and
                  seamless user experiences.
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
