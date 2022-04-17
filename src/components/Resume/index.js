import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Marika Di Carlo</h2>
          <ul>
            <li>
              Core competencies in full-stack web
              development, and managing integrations.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/marikadicarlo/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </p>

          <a href="https://github.com/marikadicarlo" class="link">
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
              JAVA, Web APIS, Third-Party APIs, Server-Side APIs,
              <br />
              HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js,
              IndexedDB,
              <br />
              Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL,
              APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
